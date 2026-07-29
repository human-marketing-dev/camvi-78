"use client";

import Image from "next/image";
import { useState } from "react";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

const wrap: React.CSSProperties = { maxWidth: 1400, margin: "0 auto", padding: "0 56px" };

const eyebrow: React.CSSProperties = {
  fontFamily: "var(--font-display)",
  fontWeight: 500,
  fontSize: 11.5,
  letterSpacing: "0.34em",
  textTransform: "uppercase",
  color: "var(--teal-600)",
};

const serifStyle: React.CSSProperties = {
  fontFamily: "var(--font-serif)",
  fontWeight: 300,
  letterSpacing: "-0.005em",
  lineHeight: 1.04,
};

const btnBase: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: 14,
  height: 58,
  padding: "0 38px",
  background: "var(--green-500)",
  color: "#fff",
  fontFamily: "var(--font-display)",
  fontWeight: 600,
  fontSize: 13,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  border: "0",
  borderRadius: 2,
  cursor: "pointer",
  textDecoration: "none",
};

const values = [
  { n: "01", t: "Calidad", d: "Urbanización y planeación con estándares superiores, pensadas para perdurar generaciones." },
  { n: "02", t: "Accesibilidad", d: "Esquemas de pago flexibles que hacen posible el patrimonio que mereces." },
  { n: "03", t: "Integridad", d: "Certeza jurídica y transparencia absoluta en cada lote y cada trato." },
  { n: "04", t: "Ganar‑Ganar", d: "Relaciones de largo plazo donde tu inversión y nuestra reputación crecen juntas." },
];

const galleryItems = [
  { src: "/aerea-los-olivos-2.webp", cap: "General vista aérea", alt: "Vista aérea general de Los Olivos" },
  { src: "/assets/photos/los-olivos-gallery-aerea.jpg", cap: "Parque central · vista aérea", alt: "Vista aérea del parque central" },
  { src: "/assets/photos/los-olivos-gallery-areas.jpg", cap: "Áreas verdes y senderos", alt: "Áreas verdes y senderos" },
];

const figures = [
  { n: "01", t: "Directo", d: "Financiamiento sin intermediarios y sin intereses ocultos." },
  { n: "02", t: "Escrituración", d: "Cada lote con certeza jurídica y título limpio. Sin promesas, con papeles." },
  { n: "03", t: "Sur de MTY", d: "El corredor con mayor proyección de plusvalía de Nuevo León." },
  { n: "04", t: "Dueño", d: "Tratas con quien desarrolla y comercializa la tierra. Sin revendedores de por medio." },
];

export default function Page() {
  const [form, setForm] = useState({ nombre: "", telefono: "", correo: "", interes: "Quiero información de lotes", mensaje: "" });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  return (
    <div style={{ background: "var(--ivory)", minHeight: "100vh" }}>
      <SiteHeader />

      {/* ==================== HERO ==================== */}
      <section id="top" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "flex-end", overflow: "hidden" }}>
        {/* Background photo */}
        <div style={{ position: "absolute", inset: 0 }}>
          <Image
            src="/assets/photos/hero-bg.jpg"
            alt="Los Olivos — paisaje"
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            priority
          />
        </div>
        {/* Gradient overlays */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(17,22,58,0.82) 0%, rgba(17,22,58,0.46) 42%, rgba(17,22,58,0.16) 100%)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(17,22,58,0.22) 0%, rgba(17,22,58,0.10) 55%, rgba(17,22,58,0.58) 100%)" }} />
        {/* Contour texture */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(/assets/patterns/contour-lines.svg)",
          backgroundSize: "1100px",
          backgroundPosition: "right -120px center",
          backgroundRepeat: "no-repeat",
          opacity: 0.22,
        }} />
        {/* Top scrim */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 220, zIndex: 1, background: "linear-gradient(180deg, rgba(11,14,32,0.72) 0%, rgba(11,14,32,0) 100%)", pointerEvents: "none" }} />

        {/* Content */}
        <div style={{ ...wrap, position: "relative", zIndex: 2, width: "100%", paddingTop: 130, paddingBottom: 80 }}>
          <div style={{ ...eyebrow, color: "var(--green-300)" }}>Desarrollo Inmobiliario · Monterrey</div>
          <h1 style={{ ...serifStyle, color: "#fff", fontSize: "clamp(48px, 7vw, 104px)", margin: "18px 0 0", maxWidth: "14ch" }}>
            Tierra con <em style={{ fontStyle: "italic", color: "var(--green-300)" }}>permanencia</em>, patrimonio con visión.
          </h1>
          <p style={{ marginTop: 30, maxWidth: "46ch", color: "rgba(255,255,255,0.82)", fontSize: 18, lineHeight: 1.7, fontFamily: "var(--font-body)" }}>
            Desarrollamos comunidades campestres y comercializamos terrenos y lotes en los corredores con mayor proyección de Nuevo León.
          </p>
          <div style={{ display: "flex", gap: 56, marginTop: 46, paddingTop: 30, borderTop: "1px solid rgba(255,255,255,0.18)", maxWidth: 760 }}>
            {[
              { n: "1", l: "Desarrollo insignia" },
              { n: "40%", l: "Áreas verdes y comunes" },
              { n: "100%", l: "Certeza jurídica y escrituración" },
            ].map((m) => (
              <div key={m.n}>
                <div style={{ ...serifStyle, fontWeight: 300, fontSize: 46, color: "#fff", lineHeight: 1 }}>{m.n}</div>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 11, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginTop: 8 }}>{m.l}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ position: "absolute", right: 56, bottom: 80, zIndex: 3, display: "flex", flexDirection: "column", alignItems: "center", gap: 12 }}>
          <span style={{ writingMode: "vertical-rl", fontFamily: "var(--font-display)", fontSize: 10, letterSpacing: "0.26em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)" }}>Descubre</span>
          <div style={{ width: 1, height: 56, background: "linear-gradient(rgba(255,255,255,0.6), rgba(255,255,255,0))" }} />
        </div>
      </section>

      {/* =================== FILOSOFÍA =================== */}
      <section id="filosofia" style={{ padding: "140px 0", background: "var(--ivory)" }}>
        <div style={{ ...wrap, display: "grid", gridTemplateColumns: "0.92fr 1.08fr", gap: 72, alignItems: "center" }}>
          {/* Media */}
          <div style={{ position: "relative", aspectRatio: "4/5", borderRadius: 2, overflow: "hidden", background: "var(--navy-800)" }}>
            <Image
              src="/assets/photos/los-olivos-manifesto.jpg"
              alt="Los Olivos — camino interior arbolado"
              fill
              sizes="(max-width: 768px) 100vw, 46vw"
              style={{ objectFit: "cover" }}
            />
            <div style={{ position: "absolute", inset: 14, border: "1px solid rgba(255,255,255,0.28)", zIndex: 1, pointerEvents: "none" }} />
            <div style={{ position: "absolute", left: 22, bottom: 20, zIndex: 2, fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 16, color: "rgba(255,255,255,0.85)" }}>
              Los Olivos · Montemorelos, N.L.
            </div>
          </div>

          {/* Text */}
          <div>
            <div style={eyebrow}>Nuestra filosofía</div>
            <h2 style={{ ...serifStyle, marginTop: 20, fontSize: "clamp(32px, 3.6vw, 54px)", color: "var(--navy-900)", maxWidth: "18ch" }}>
              No vendemos terrenos. Creamos el lugar donde crecerá tu patrimonio.
            </h2>
            <div style={{ marginTop: 28, color: "var(--stone-ink)", fontSize: 17, lineHeight: 1.85, fontFamily: "var(--font-body)" }}>
              <p style={{ margin: "0 0 22px" }}>En Camvi 78 entendemos la tierra como el activo más noble: el que permanece, el que se aprecia y el que se hereda. Cada desarrollo nace de un estudio cuidadoso del entorno, la conectividad y la proyección a futuro de la región.</p>
              <p style={{ margin: 0 }}>Planeamos comunidades campestres con urbanización de calidad, certeza jurídica total y esquemas accesibles, para que invertir en tu futuro sea una decisión serena y bien acompañada.</p>
              <div style={{ marginTop: 36, display: "flex", alignItems: "center", gap: 16 }}>
                <div style={{ width: 44, height: 1, background: "var(--green-500)" }} />
                <span style={{ fontFamily: "var(--font-display)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--navy-700)" }}>
                  Calidad · Accesibilidad · Integridad · Ganar-Ganar
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== VALORES ==================== */}
      <section id="valores" style={{ padding: "130px 0", background: "var(--sand)" }}>
        <div style={wrap}>
          <div style={eyebrow}>Lo que nos sostiene</div>
          <h2 style={{ ...serifStyle, fontSize: "clamp(30px, 3.4vw, 50px)", marginTop: 18, maxWidth: "18ch", color: "var(--navy-900)" }}>
            Cuatro valores en cada metro cuadrado
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 40, marginTop: 56 }}>
            {values.map((v) => (
              <div key={v.n} style={{ paddingTop: 26, borderTop: "1px solid var(--taupe)" }}>
                <div style={{ fontFamily: "var(--font-display)", fontSize: 11, letterSpacing: "0.18em", color: "var(--stone-ink)" }}>{v.n}</div>
                <h4 style={{ fontFamily: "var(--font-serif)", fontWeight: 400, fontSize: 30, color: "var(--navy-900)", margin: "14px 0 0" }}>{v.t}</h4>
                <p style={{ color: "var(--stone-ink)", fontSize: 15, lineHeight: 1.75, margin: "14px 0 0", fontFamily: "var(--font-body)" }}>{v.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================ DESARROLLO INSIGNIA ================ */}
      <section id="desarrollos" style={{ background: "var(--ivory)", padding: "30px 0 130px" }}>
        <div style={wrap}>
          {/* Section head */}
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 32, padding: "60px 0 36px" }}>
            <div>
              <div style={eyebrow}>Nuestro desarrollo insignia</div>
              <h2 style={{ ...serifStyle, fontSize: "clamp(30px, 3.4vw, 50px)", marginTop: 18, color: "var(--navy-900)" }}>Donde todo comienza</h2>
            </div>
            <div style={{ fontFamily: "var(--font-display)", fontSize: 12, letterSpacing: "0.2em", color: "var(--stone-ink)", textTransform: "uppercase" }}>
              Montemorelos · Nuevo León
            </div>
          </div>

          {/* Banner */}
          <div style={{ position: "relative", height: "60vh", minHeight: 460, overflow: "hidden", borderRadius: 2 }}>
            <Image
              src="/aerea-los-olivos.webp"
              alt="Los Olivos — vista aérea"
              fill
              sizes="100vw"
              style={{ objectFit: "cover", objectPosition: "center 30%" }}
            />
            <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(17,22,58,0.18) 0%, rgba(17,22,58,0) 35%, rgba(17,22,58,0.62) 100%)" }} />
            {/* Badge */}
            <div style={{
              position: "absolute", top: 32, left: 56, zIndex: 2,
              fontFamily: "var(--font-display)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase",
              color: "#fff", background: "rgba(17,22,58,0.5)", backdropFilter: "blur(6px)",
              border: "1px solid rgba(255,255,255,0.3)", padding: "9px 16px", borderRadius: 999,
            }}>
              En comercialización
            </div>
            {/* Overlay text */}
            <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, padding: "48px 56px", zIndex: 2 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, color: "var(--green-300)" }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--green-500)" }} />
                <span style={{ fontFamily: "var(--font-display)", fontSize: 11.5, letterSpacing: "0.18em", textTransform: "uppercase" }}>Montemorelos · Nuevo León</span>
              </div>
              <h3 style={{ ...serifStyle, fontWeight: 300, fontSize: "clamp(44px, 6vw, 92px)", color: "#fff", margin: "10px 0 0", textShadow: "0 2px 24px rgba(11,14,32,0.5)" }}>
                Los Olivos
              </h3>
            </div>
          </div>

          {/* Body */}
          <div style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr", gap: 72, alignItems: "start", paddingTop: 64 }}>
            <div>
              <p style={{ ...serifStyle, fontWeight: 300, fontSize: "clamp(26px, 2.6vw, 38px)", color: "var(--navy-900)", lineHeight: 1.18, margin: 0 }}>
                Residencial campestre de lotes arbolados con vistas a la sierra, sobre uno de los corredores de mayor proyección al sur de Monterrey.
              </p>
              <p style={{ color: "var(--stone-ink)", fontSize: 16.5, lineHeight: 1.85, marginTop: 22, fontFamily: "var(--font-body)" }}>
                Un acceso controlado de arquitectura contemporánea, vialidades amplias y un parque central rodeado de olivos y roca natural dan la bienvenida a una comunidad pensada para vivir, invertir y heredar. Diseño paisajístico, áreas comunes generosas y la tranquilidad del campo a minutos de la ciudad.
              </p>
              {/* Specs */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 44, marginTop: 38, paddingTop: 34, borderTop: "1px solid var(--taupe)" }}>
                {[
                  { v: "40%", k: "Áreas verdes y comunes" },
                  { v: "100%", k: "Certeza jurídica" },
                  { v: "Montemorelos", k: "Nuevo León" },
                ].map((s) => (
                  <div key={s.k}>
                    <div style={{ ...serifStyle, fontWeight: 400, fontSize: 34, color: "var(--navy-800)", whiteSpace: "nowrap" }}>{s.v}</div>
                    <div style={{ fontFamily: "var(--font-display)", fontSize: 10.5, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--stone-ink)", marginTop: 6 }}>{s.k}</div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              {/* Amenities */}
              <ul style={{ listStyle: "none", padding: 0, margin: "4px 0 0", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0 32px" }}>
                {["Sendero", "Cruce", "Asadores", "Áreas de estar", "Firepit", "Playground", "Canal", "Acceso controlado 24/7"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "center", gap: 12, padding: "15px 0", borderBottom: "1px solid var(--taupe)", fontSize: 15, color: "var(--navy-800)", fontFamily: "var(--font-body)" }}>
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green-500)", flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
              <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 32 }}>
                <a
                  href="https://residencialcampestrelosolivos.mx/"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ ...btnBase, alignSelf: "flex-start" }}
                >
                  Visitar sitio de Los Olivos
                </a>
                <a
                  href="#contacto"
                  style={{ display: "inline-flex", alignItems: "center", gap: 12, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--navy-700)", textDecoration: "none" }}
                >
                  Agendar una visita
                  <div style={{ width: 30, height: 1, background: "var(--navy-700)" }} />
                </a>
              </div>
            </div>
          </div>

          {/* Gallery */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 18, marginTop: 64 }}>
            {galleryItems.map((g) => (
              <div key={g.cap} style={{ position: "relative", aspectRatio: "3/2", overflow: "hidden", borderRadius: 2, background: "var(--navy-800)" }}>
                <Image src={g.src} alt={g.alt} fill sizes="(max-width: 768px) 100vw, 33vw" style={{ objectFit: "cover" }} />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(17,22,58,0) 50%, rgba(17,22,58,0.5) 100%)" }} />
                <div style={{ position: "absolute", left: 16, bottom: 14, zIndex: 2, fontFamily: "var(--font-serif)", fontStyle: "italic", fontSize: 14, color: "rgba(255,255,255,0.9)", textShadow: "0 1px 10px rgba(11,14,32,0.6)" }}>
                  {g.cap}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== CIFRAS ==================== */}
      <section style={{ display: "none" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(/assets/patterns/contour-lines.svg)",
          backgroundSize: "900px", backgroundPosition: "left -100px center",
          backgroundRepeat: "no-repeat", opacity: 0.45,
        }} />
        <div style={{ ...wrap, position: "relative", zIndex: 2 }}>
          <div style={{ ...eyebrow, color: "var(--green-300)" }}>Por qué Camvi 78</div>
          <h2 style={{ ...serifStyle, fontSize: "clamp(30px, 3.6vw, 52px)", color: "#fff", marginTop: 20, maxWidth: "20ch" }}>
            Comprar tierra es fácil. Comprarla <em style={{ fontStyle: "italic", color: "var(--green-300)" }}>bien</em> es otra cosa.
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 0, marginTop: 72 }}>
            {figures.map((f, i) => (
              <div key={f.n} style={{ padding: i === 0 ? "0 28px 0 0" : "0 28px", borderLeft: i === 0 ? 0 : "1px solid rgba(255,255,255,0.16)" }}>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: "0.16em", color: "var(--green-300)", marginBottom: 14 }}>{f.n}</div>
                <div style={{ ...serifStyle, fontWeight: 300, fontSize: "clamp(26px, 2.4vw, 36px)", color: "#fff", lineHeight: 1.1 }}>{f.t}</div>
                <div style={{ fontSize: 14, lineHeight: 1.65, color: "rgba(255,255,255,0.62)", marginTop: 14, maxWidth: "22ch", fontFamily: "var(--font-body)" }}>{f.d}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =================== PORTAFOLIO PREVIEW =================== */}
      <section style={{ background: "var(--sand)", padding: "130px 0" }}>
        <div style={wrap}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 32, marginBottom: 56 }}>
            <div>
              <div style={eyebrow}>Portafolio</div>
              <h2 style={{ ...serifStyle, fontSize: "clamp(30px, 3.4vw, 50px)", marginTop: 18, color: "var(--navy-900)", maxWidth: "20ch" }}>
                Terrenos y lotes <em style={{ fontStyle: "italic" }}>disponibles</em>
              </h2>
            </div>
            <a
              href="/portafolio"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 600,
                fontSize: 11,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--navy-700)",
                textDecoration: "none",
                borderBottom: "1px solid var(--navy-300)",
                paddingBottom: 4,
                whiteSpace: "nowrap",
                flexShrink: 0,
              }}
            >
              Ver portafolio completo →
            </a>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {[
              { id: "Acuaducto", type: "Lotes", tx: "Venta", area: "32,000 m²", detail: "16 lotes de 2,000 m²", txColor: "#166534", txBg: "#f0faf4" },
              { id: "Chancaca", type: "Lotes", tx: "Venta", area: "15,477 m²", detail: "Glamping · 4 lotes", txColor: "#166534", txBg: "#f0faf4" },
              { id: "R03", type: "Terreno", tx: "Venta", area: "62,668 m²", detail: "Terreno completo", txColor: "#166534", txBg: "#f0faf4" },
            ].map((p) => (
              <article
                key={p.id}
                style={{
                  background: "#fff",
                  border: "1px solid var(--taupe)",
                  display: "flex",
                  flexDirection: "column",
                  overflow: "hidden",
                }}
              >
                {/* image placeholder */}
                <div
                  style={{
                    height: 168,
                    background: "linear-gradient(140deg, var(--sand) 0%, var(--sand-2) 70%, var(--taupe) 100%)",
                    position: "relative",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  <svg width="52" height="40" viewBox="0 0 56 44" fill="none" style={{ opacity: 0.2 }}>
                    <path d="M0 44 L14 22 L22 32 L34 14 L56 44Z" fill="var(--stone-ink)" />
                    <circle cx="42" cy="10" r="8" fill="var(--stone-ink)" />
                  </svg>
                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 3, background: "var(--green-500)" }} />
                </div>

                <div style={{ padding: "24px 24px 22px", flex: 1, display: "flex", flexDirection: "column", gap: 16 }}>
                  <div>
                    <div style={{ display: "flex", gap: 6, marginBottom: 10, flexWrap: "wrap" }}>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: 9.5, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600, padding: "3px 9px", background: "var(--sand)", color: "var(--stone-ink)" }}>
                        {p.type}
                      </span>
                      <span style={{ fontFamily: "var(--font-display)", fontSize: 9.5, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600, padding: "3px 9px", background: p.txBg, color: p.txColor }}>
                        {p.tx}
                      </span>
                    </div>
                    <h3 style={{ fontFamily: "var(--font-serif)", fontWeight: 300, fontSize: 26, color: "var(--navy-900)", margin: 0, lineHeight: 1.1 }}>
                      {p.id}
                    </h3>
                  </div>

                  <div style={{ borderTop: "1px solid var(--sand-2)", paddingTop: 14 }}>
                    <span style={{ fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--stone-ink)", display: "block", marginBottom: 3 }}>
                      Superficie total
                    </span>
                    <span style={{ fontFamily: "var(--font-serif)", fontSize: 30, fontWeight: 300, color: "var(--navy-900)", lineHeight: 1 }}>
                      {p.area}
                    </span>
                    <span style={{ display: "block", fontFamily: "var(--font-body)", fontSize: 13, color: "var(--stone-ink)", marginTop: 6 }}>
                      {p.detail}
                    </span>
                  </div>

                  <div style={{ marginTop: "auto" }}>
                    <a
                      href="/portafolio"
                      style={{ fontFamily: "var(--font-display)", fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase", fontWeight: 600, color: "var(--navy-700)", textDecoration: "none", borderBottom: "1px solid var(--navy-300)", paddingBottom: 3 }}
                    >
                      Solicitar información
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div style={{ marginTop: 48, display: "flex", justifyContent: "center" }}>
            <a href="/portafolio" style={{ ...btnBase, background: "var(--navy-800)" }}>
              Ver todas las propiedades
            </a>
          </div>
        </div>
      </section>

      {/* ==================== CTA / CONTACTO ==================== */}
      <section id="contacto" style={{ position: "relative", background: "var(--navy-700)", overflow: "hidden", padding: "120px 0" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(/assets/patterns/contour-lines.svg)",
          backgroundSize: "980px", backgroundPosition: "center",
          backgroundRepeat: "no-repeat", opacity: 0.5,
        }} />
        <div style={{ ...wrap, position: "relative", zIndex: 2, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          {/* Copy */}
          <div>
            <div style={{ ...eyebrow, color: "var(--green-300)" }}>Agenda una visita</div>
            <h2 style={{ ...serifStyle, fontSize: "clamp(34px, 4vw, 60px)", color: "#fff", maxWidth: "14ch", margin: "18px 0 0" }}>
              Conoce el lugar donde comienza tu patrimonio.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.78)", fontSize: 17, maxWidth: "44ch", lineHeight: 1.7, margin: "26px 0 0", fontFamily: "var(--font-body)" }}>
              Te acompañamos con información completa de nuestros desarrollos y del portafolio de terrenos y lotes disponibles. Sin compromiso, con la asesoría de quienes conocen la tierra.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 32, marginTop: 38 }}>
              {[
                { k: "Teléfono", v: "81 2040 4040", href: "tel:+528120404040" },
                { k: "Correo", v: "info@camvi78.com", href: "mailto:info@camvi78.com" },
                { k: "Ubicación", v: "Montemorelos, N.L.", href: undefined },
              ].map((ci) => (
                <div key={ci.k}>
                  <div style={{ fontFamily: "var(--font-display)", fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "var(--green-300)" }}>{ci.k}</div>
                  {ci.href ? (
                    <a href={ci.href} style={{ display: "block", color: "#fff", textDecoration: "none", fontSize: 17, marginTop: 7, fontFamily: "var(--font-serif)" }}>{ci.v}</a>
                  ) : (
                    <span style={{ display: "block", color: "#fff", fontSize: 17, marginTop: 7, fontFamily: "var(--font-serif)" }}>{ci.v}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.14)", borderRadius: 4, padding: 40, backdropFilter: "blur(6px)" }}>
            <form onSubmit={(e) => e.preventDefault()}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 0 }}>
                {[
                  { name: "nombre", label: "Nombre", type: "text", placeholder: "Tu nombre" },
                  { name: "telefono", label: "Teléfono", type: "tel", placeholder: "81 0000 0000" },
                ].map((f) => (
                  <div key={f.name} style={{ marginBottom: 18 }}>
                    <label style={{ display: "block", fontFamily: "var(--font-display)", fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>{f.label}</label>
                    <input
                      type={f.type}
                      name={f.name}
                      placeholder={f.placeholder}
                      value={form[f.name as keyof typeof form]}
                      onChange={handleChange}
                      style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 2, padding: "13px 14px", color: "#fff", fontFamily: "var(--font-body)", fontSize: 15, boxSizing: "border-box" }}
                    />
                  </div>
                ))}
              </div>

              {[
                { name: "correo", label: "Correo", type: "email", placeholder: "tucorreo@ejemplo.com" },
              ].map((f) => (
                <div key={f.name} style={{ marginBottom: 18 }}>
                  <label style={{ display: "block", fontFamily: "var(--font-display)", fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>{f.label}</label>
                  <input
                    type={f.type}
                    name={f.name}
                    placeholder={f.placeholder}
                    value={form[f.name as keyof typeof form]}
                    onChange={handleChange}
                    style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 2, padding: "13px 14px", color: "#fff", fontFamily: "var(--font-body)", fontSize: 15, boxSizing: "border-box" }}
                  />
                </div>
              ))}

              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", fontFamily: "var(--font-display)", fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>Interés</label>
                <select
                  name="interes"
                  value={form.interes}
                  onChange={handleChange}
                  style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 2, padding: "13px 14px", color: "#fff", fontFamily: "var(--font-body)", fontSize: 15, boxSizing: "border-box" }}
                >
                  <option style={{ color: "#11163a" }}>Quiero información de lotes</option>
                  <option style={{ color: "#11163a" }}>Agendar una visita guiada</option>
                  <option style={{ color: "#11163a" }}>Recibir el plan maestro</option>
                  <option style={{ color: "#11163a" }}>Esquemas de financiamiento</option>
                </select>
              </div>

              <div style={{ marginBottom: 18 }}>
                <label style={{ display: "block", fontFamily: "var(--font-display)", fontSize: 10.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>Mensaje</label>
                <textarea
                  name="mensaje"
                  placeholder="Cuéntanos qué buscas…"
                  value={form.mensaje}
                  onChange={handleChange}
                  style={{ width: "100%", background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.18)", borderRadius: 2, padding: "13px 14px", color: "#fff", fontFamily: "var(--font-body)", fontSize: 15, resize: "vertical", minHeight: 84, boxSizing: "border-box" }}
                />
              </div>

              <button
                type="submit"
                style={{ ...btnBase, width: "100%", justifyContent: "center", marginTop: 6 }}
              >
                Solicitar información
              </button>
              <p style={{ fontSize: 12, color: "rgba(255,255,255,0.5)", margin: "16px 0 0", textAlign: "center", lineHeight: 1.5, fontFamily: "var(--font-body)" }}>
                Al enviar aceptas nuestro aviso de privacidad. Te contactamos en menos de 24 horas.
              </p>
            </form>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
