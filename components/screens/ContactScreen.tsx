"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Badge } from "@/components/ui/Badge";
import { Icon } from "@/components/ui/Icon";

const wrap = { maxWidth: 1180, margin: "0 auto", padding: "0 32px" };

function InfoRow({ icon, label, value }: { icon: string; label: string; value: string }) {
  return (
    <div style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
      <div style={{
        width: 42, height: 42, flex: "none", borderRadius: "var(--radius-md)",
        background: "rgba(255,255,255,0.1)", display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Icon name={icon} size={19} color="var(--green-400)" />
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12, letterSpacing: ".08em", textTransform: "uppercase", color: "var(--navy-200)" }}>{label}</span>
        <span style={{ fontFamily: "var(--font-body)", fontSize: 15.5, color: "#fff" }}>{value}</span>
      </div>
    </div>
  );
}

export function ContactScreen() {
  const [sent, setSent] = useState(false);

  return (
    <div style={{ background: "var(--neutral-50)", padding: "72px 0 96px" }}>
      <div style={wrap}>
        <div style={{
          display: "grid", gridTemplateColumns: "0.9fr 1.1fr",
          background: "var(--surface)", borderRadius: "var(--radius-xl)",
          overflow: "hidden", boxShadow: "var(--shadow-lg)", border: "1px solid var(--border)",
        }}>
          {/* Left — navy info panel */}
          <div style={{ position: "relative", background: "var(--navy-700)", color: "#fff", overflow: "hidden", padding: "48px 44px" }}>
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "url(/assets/patterns/contour-lines.svg)",
              backgroundSize: "620px", backgroundPosition: "left -40px bottom -120px", opacity: 0.55,
            }} />
            <div style={{ position: "relative", display: "flex", flexDirection: "column", gap: 30, height: "100%" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12.5, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--green-400)" }}>Hablemos</span>
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 32, color: "#fff", margin: 0, letterSpacing: "-0.015em", lineHeight: 1.15 }}>Agenda una visita o recibe información</h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, lineHeight: 1.65, color: "var(--navy-100)", margin: 0 }}>Un asesor patrimonial te contactará el mismo día con el plano maestro y la lista de precios.</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 4 }}>
                <InfoRow icon="phone" label="Teléfono" value="81 1234 5678" />
                <InfoRow icon="mail" label="Correo" value="hola@camvi78.mx" />
                <InfoRow icon="map-pin" label="Oficinas" value="Av. Gómez Morín 1100, San Pedro, N.L." />
              </div>
              <div style={{ marginTop: "auto", display: "flex", gap: 8, flexWrap: "wrap" }}>
                <Badge tone="green" variant="solid" dot>Respuesta el mismo día</Badge>
                <Badge tone="navy" variant="soft" style={{ background: "rgba(255,255,255,0.12)", color: "#fff" }}>Sin compromiso</Badge>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div style={{ padding: "48px 44px" }}>
            {sent ? (
              <div style={{ height: "100%", minHeight: 360, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", textAlign: "center", gap: 16 }}>
                <div style={{ width: 64, height: 64, borderRadius: "50%", background: "var(--green-100)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <Icon name="check" size={30} color="var(--green-600)" />
                </div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, color: "var(--navy-900)", margin: 0 }}>¡Gracias! Te contactaremos pronto.</h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 15.5, color: "var(--text-muted)", maxWidth: 360, margin: 0 }}>Hemos recibido tus datos. Un asesor de Camvi 78 se comunicará contigo en breve.</p>
                <Button variant="secondary" onClick={() => setSent(false)}>Enviar otra solicitud</Button>
              </div>
            ) : (
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--navy-900)", margin: "0 0 4px" }}>Solicita información</h3>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <Input label="Nombre" placeholder="Tu nombre" required />
                  <Input label="Teléfono" type="tel" placeholder="81 0000 0000" required iconLeft={<Icon name="phone" size={16} color="var(--text-muted)" />} />
                </div>
                <Input label="Correo electrónico" type="email" placeholder="tu@correo.com" required iconLeft={<Icon name="mail" size={16} color="var(--text-muted)" />} />
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  <label style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, color: "var(--text-strong)" }}>Desarrollo de interés</label>
                  <select style={{ height: 46, padding: "0 14px", borderRadius: "var(--radius-md)", border: "1.5px solid var(--border-strong)", background: "var(--surface)", fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-strong)" }}>
                    <option>Las Lomas</option>
                    <option>Valle Sereno</option>
                    <option>Altavista</option>
                    <option>Aún no lo sé</option>
                  </select>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 7 }}>
                  <label style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, color: "var(--text-strong)" }}>Mensaje</label>
                  <textarea rows={3} placeholder="Cuéntanos qué buscas..." style={{ padding: "12px 14px", borderRadius: "var(--radius-md)", border: "1.5px solid var(--border-strong)", background: "var(--surface)", fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-strong)", resize: "vertical" }} />
                </div>
                <Button variant="accent" size="lg" type="submit" fullWidth iconRight={<Icon name="arrow-right" size={18} color="#fff" />}>
                  Enviar solicitud
                </Button>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--text-subtle)", textAlign: "center", margin: 0 }}>Al enviar aceptas nuestro aviso de privacidad.</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
