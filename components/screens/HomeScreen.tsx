"use client";

import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { Stat } from "@/components/ui/Stat";
import { FeatureItem } from "@/components/ui/FeatureItem";
import { Icon } from "@/components/ui/Icon";
import { LotCard } from "@/components/property/LotCard";

interface HomeScreenProps {
  onNav: (id: string) => void;
}

const wrap = { maxWidth: 1240, margin: "0 auto", padding: "0 32px" };

const values = [
  { icon: "star", tone: "navy" as const, t: "Calidad", d: "Desarrollos planeados con estándares de urbanización superiores." },
  { icon: "trending-up", tone: "green" as const, t: "Accesibilidad", d: "Esquemas de pago flexibles para hacer tu patrimonio posible." },
  { icon: "shield-check", tone: "navy" as const, t: "Integridad", d: "Certeza jurídica y escrituración transparente en cada lote." },
  { icon: "handshake", tone: "teal" as const, t: "Ganar–Ganar", d: "Relaciones de largo plazo donde tú y tu inversión crecen." },
];

const lots = [
  { development: "Fracc. Las Lomas", name: "Lote A-12", status: "disponible" as const, price: "$1,850,000", priceNote: "o desde $24,500 / mes", specs: [{ value: "1,024 m²", label: "Superficie" }, { value: "22 m", label: "Frente" }, { value: "Esquina", label: "Ubicación" }] },
  { development: "Valle Sereno", name: "Lote C-04", status: "ultimos" as const, price: "$2,310,000", priceNote: "Enganche 20%", specs: [{ value: "1,400 m²", label: "Superficie" }, { value: "28 m", label: "Frente" }, { value: "Vista", label: "Premium" }] },
  { development: "Altavista", name: "Lote B-21", status: "disponible" as const, price: "$1,420,000", priceNote: "Preventa", specs: [{ value: "860 m²", label: "Superficie" }, { value: "20 m", label: "Frente" }, { value: "Plano", label: "Topografía" }] },
];

const stats = [
  ["+38%", "Plusvalía promedio a 5 años", "route"],
  ["100%", "Lotes escriturados", "shield-check"],
  ["18 meses", "Sin intereses", "trending-up"],
  ["40%", "Áreas verdes y comunes", "trees"],
] as const;

export function HomeScreen({ onNav }: HomeScreenProps) {
  return (
    <div>
      {/* ======================= HERO ======================= */}
      <section style={{ position: "relative", background: "var(--navy-800)", color: "#fff", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(115deg, var(--navy-900) 0%, var(--navy-700) 55%, var(--teal-700) 130%)" }} />
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(/assets/patterns/contour-lines.svg)",
          backgroundSize: "860px", backgroundPosition: "right -60px center", opacity: 0.85,
        }} />
        <div style={{ ...wrap, position: "relative", display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: 56, alignItems: "center", padding: "92px 32px 96px" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 26 }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, letterSpacing: ".16em", textTransform: "uppercase", color: "var(--green-400)" }}>
              Desarrollo Inmobiliario · Monterrey
            </span>
            <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 60, lineHeight: 1.04, letterSpacing: "-0.02em", color: "#fff", margin: 0, textWrap: "balance" }}>
              Tu patrimonio,<br /><span style={{ color: "var(--green-400)" }}>con visión a futuro.</span>
            </h1>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 19, lineHeight: 1.6, color: "var(--navy-100)", maxWidth: 520, margin: 0 }}>
              Lotes campestres que integran accesibilidad, plusvalía y calidad de vida. Invierte hoy en la tierra que crecerá contigo.
            </p>
            <div style={{ display: "flex", gap: 14, marginTop: 4 }}>
              <Button variant="accent" size="lg" iconRight={<Icon name="arrow-right" size={18} color="#fff" />} onClick={() => onNav("catalog")}>
                Ver lotes disponibles
              </Button>
              <Button variant="on-dark" size="lg" onClick={() => onNav("contact")}>Agendar visita</Button>
            </div>
            <div style={{ display: "flex", gap: 36, marginTop: 18, paddingTop: 26, borderTop: "1px solid rgba(255,255,255,0.16)" }}>
              <Stat value="3" label="Desarrollos activos" tone="light" />
              <Stat value="+38%" label="Plusvalía 5 años" tone="light" />
              <Stat value="12 años" label="En el mercado" tone="light" />
            </div>
          </div>

          {/* Floating featured lot */}
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{ width: 360, transform: "translateY(4px)" }}>
              <LotCard {...lots[0]} onAction={() => onNav("catalog")} />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== VALORES ====================== */}
      <section style={{ background: "var(--surface)", padding: "88px 0" }}>
        <div style={wrap}>
          <div style={{ display: "flex", flexDirection: "column", gap: 14, alignItems: "center", textAlign: "center", marginBottom: 52 }}>
            <div className="cv-rule" />
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 38, color: "var(--navy-900)", margin: 0, letterSpacing: "-0.015em" }}>Construido sobre cuatro valores</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "var(--text-muted)", maxWidth: 560, margin: 0 }}>Cada lote que desarrollamos refleja la forma en que hacemos negocios en Camvi 78.</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
            {values.map((v, i) => (
              <Card key={i} padding="lg" elevation="sm">
                <FeatureItem
                  icon={<Icon name={v.icon} size={22} color={v.tone === "green" ? "var(--green-600)" : v.tone === "teal" ? "var(--teal-600)" : "var(--navy-700)"} />}
                  tone={v.tone}
                  title={v.t}
                >{v.d}</FeatureItem>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ================== LOTES DESTACADOS ================= */}
      <section style={{ background: "var(--neutral-50)", padding: "88px 0", borderTop: "1px solid var(--border)" }}>
        <div style={wrap}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 40, gap: 24, flexWrap: "wrap" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12.5, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--teal-600)" }}>Catálogo</span>
              <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 36, color: "var(--navy-900)", margin: 0, letterSpacing: "-0.015em" }}>Lotes destacados</h2>
            </div>
            <Button variant="secondary" iconRight={<Icon name="chevron-right" size={17} color="var(--navy-700)" />} onClick={() => onNav("catalog")}>
              Ver todo el catálogo
            </Button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {lots.map((l, i) => <LotCard key={i} {...l} onAction={() => onNav("catalog")} />)}
          </div>
        </div>
      </section>

      {/* ================== PLUSVALÍA BAND ================== */}
      <section style={{ position: "relative", background: "var(--navy-700)", color: "#fff", overflow: "hidden", padding: "76px 0" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(/assets/patterns/contour-lines.svg)",
          backgroundSize: "720px", backgroundPosition: "left -100px center", opacity: 0.55,
        }} />
        <div style={{ ...wrap, position: "relative", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 56, alignItems: "center" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12.5, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--green-400)" }}>Inversión inteligente</span>
            <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 36, color: "#fff", margin: 0, letterSpacing: "-0.015em" }}>La tierra es el activo que no deja de crecer</h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 16.5, lineHeight: 1.65, color: "var(--navy-100)", margin: 0 }}>
              Nuestros desarrollos se ubican en corredores estratégicos de Monterrey con infraestructura en expansión. Compra hoy a precio de preventa y capitaliza la plusvalía.
            </p>
            <div style={{ marginTop: 8 }}>
              <Button variant="accent" size="lg" iconRight={<Icon name="arrow-right" size={18} color="#fff" />} onClick={() => onNav("contact")}>
                Solicitar análisis de inversión
              </Button>
            </div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
            {stats.map((s, i) => (
              <div key={i} style={{
                background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "var(--radius-lg)", padding: "22px 22px 20px",
              }}>
                <Icon name={s[2]} size={22} color="var(--green-400)" />
                <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 34, color: "#fff", marginTop: 12, letterSpacing: "-0.02em" }}>{s[0]}</div>
                <div style={{ fontFamily: "var(--font-body)", fontSize: 13.5, color: "var(--navy-200)", marginTop: 2 }}>{s[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== CTA FINAL ==================== */}
      <section style={{ background: "var(--surface)", padding: "84px 0" }}>
        <div style={wrap}>
          <Card accent padding="lg" style={{ borderRadius: "var(--radius-xl)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 32, flexWrap: "wrap", padding: "14px 18px" }}>
              <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 620 }}>
                <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 30, color: "var(--navy-900)", margin: 0, letterSpacing: "-0.015em" }}>¿List@ para conocer tu próximo lote?</h2>
                <p style={{ fontFamily: "var(--font-body)", fontSize: 16, color: "var(--text-muted)", margin: 0 }}>Agenda una visita guiada o recibe el plano maestro y la lista de precios por WhatsApp.</p>
              </div>
              <div style={{ display: "flex", gap: 12 }}>
                <Button variant="accent" size="lg" onClick={() => onNav("contact")}>Agendar visita</Button>
                <Button variant="secondary" size="lg" iconLeft={<Icon name="file-text" size={17} color="var(--navy-700)" />} onClick={() => onNav("contact")}>
                  Descargar plano
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
