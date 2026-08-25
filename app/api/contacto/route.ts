export const runtime = "nodejs";

import { NextRequest, NextResponse } from "next/server";

// Simple in-memory rate limiter: max 3 requests per IP per 15 min
const rateMap = new Map<string, { count: number; reset: number }>();
const RATE_LIMIT = 3;
const WINDOW_MS = 15 * 60 * 1000;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export async function POST(req: NextRequest) {
  // Rate limiting
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0] ?? "unknown";
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (entry && now < entry.reset) {
    if (entry.count >= RATE_LIMIT) {
      return NextResponse.json({ error: "Demasiados intentos. Intenta en unos minutos." }, { status: 429 });
    }
    entry.count++;
  } else {
    rateMap.set(ip, { count: 1, reset: now + WINDOW_MS });
  }

  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Solicitud inválida." }, { status: 400 });

  const { nombre, correo, telefono, interes, mensaje, _hp } = body;

  // Honeypot
  if (_hp) return NextResponse.json({ ok: true });

  // Validación
  if (!nombre?.trim() || !correo?.trim() || !telefono?.trim()) {
    return NextResponse.json({ error: "Nombre, correo y teléfono son requeridos." }, { status: 400 });
  }

  const n = escapeHtml(nombre.trim());
  const e = escapeHtml(correo.trim());
  const t = escapeHtml(telefono.trim());
  const i = escapeHtml((interes ?? "").trim());
  const m = escapeHtml((mensaje ?? "").trim());

  const siteName = process.env.SITE_NAME ?? "Camvi 78";

  const htmlContent = `
    <div style="font-family:sans-serif;max-width:560px;margin:0 auto;color:#1a1f2e">
      <h2 style="background:#1a1f2e;color:#fff;padding:20px 24px;margin:0;font-size:18px">
        Nuevo contacto — ${siteName}
      </h2>
      <table style="width:100%;border-collapse:collapse">
        <tr><td style="padding:14px 24px;border-bottom:1px solid #eee;width:130px;color:#6A6354;font-size:13px">Nombre</td><td style="padding:14px 24px;border-bottom:1px solid #eee;font-size:15px"><strong>${n}</strong></td></tr>
        <tr><td style="padding:14px 24px;border-bottom:1px solid #eee;color:#6A6354;font-size:13px">Correo</td><td style="padding:14px 24px;border-bottom:1px solid #eee;font-size:15px">${e}</td></tr>
        <tr><td style="padding:14px 24px;border-bottom:1px solid #eee;color:#6A6354;font-size:13px">Teléfono</td><td style="padding:14px 24px;border-bottom:1px solid #eee;font-size:15px">${t}</td></tr>
        ${i ? `<tr><td style="padding:14px 24px;border-bottom:1px solid #eee;color:#6A6354;font-size:13px">Interés</td><td style="padding:14px 24px;border-bottom:1px solid #eee;font-size:15px">${i}</td></tr>` : ""}
        ${m ? `<tr><td style="padding:14px 24px;color:#6A6354;font-size:13px;vertical-align:top">Mensaje</td><td style="padding:14px 24px;font-size:15px;white-space:pre-line">${m}</td></tr>` : ""}
      </table>
      <p style="padding:16px 24px;margin:0;font-size:12px;color:#aaa">Enviado desde camvi78.com</p>
    </div>`;

  const payload = {
    sender: { name: siteName, email: process.env.BREVO_FROM ?? "info@epicus.com.mx" },
    to: [{ email: process.env.CONTACT_TO ?? "fraige@epicus.com.mx" }],
    replyTo: { email: correo.trim() },
    subject: `[${siteName}] Nuevo contacto — ${n}`,
    htmlContent,
    tags: ["camvi-78"],
  };

  const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "api-key": process.env.BREVO_API_KEY ?? "",
    },
    body: JSON.stringify(payload),
  });

  if (!brevoRes.ok) {
    const errBody = await brevoRes.text().catch(() => "(no body)");
    console.error(`[contacto] Brevo error ${brevoRes.status}:`, errBody);
    return NextResponse.json({ error: "No se pudo enviar el mensaje. Intenta de nuevo." }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
