"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";

interface LotSpec {
  value: string;
  label: string;
}

interface LotCardProps {
  name: string;
  development?: string;
  area?: string;
  price: string;
  priceNote?: string;
  status?: "disponible" | "apartado" | "vendido" | "ultimos";
  specs?: LotSpec[];
  image?: string;
  badge?: string;
  onAction?: () => void;
  actionLabel?: string;
  style?: React.CSSProperties;
}

export function LotCard({
  name, development, area, price, priceNote, status = "disponible",
  specs = [], image, badge, onAction, actionLabel = "Ver lote", style = {},
}: LotCardProps) {
  const statusMap = {
    disponible: { tone: "green" as const, label: "Disponible" },
    apartado:   { tone: "warning" as const, label: "Apartado" },
    vendido:    { tone: "neutral" as const, label: "Vendido" },
    ultimos:    { tone: "danger" as const, label: "Últimos lotes" },
  };
  const st = statusMap[status] ?? statusMap.disponible;
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "flex", flexDirection: "column",
        background: "var(--surface)", border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)", overflow: "hidden",
        boxShadow: hover ? "var(--shadow-lg)" : "var(--shadow-sm)",
        transform: hover ? "translateY(-3px)" : "none",
        transition: "box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)",
        ...style,
      }}
    >
      {/* Media */}
      <div style={{ position: "relative", height: 190, background: "var(--navy-700)" }}>
        {image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={image} alt={name}
            style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transform: hover ? "scale(1.04)" : "scale(1)", transition: "transform var(--duration-slow) var(--ease-out)" }}
          />
        ) : (
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(135deg, var(--navy-800) 0%, var(--teal-700) 100%)",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <div style={{
              position: "absolute", inset: 0,
              backgroundImage: "url(/assets/patterns/contour-lines.svg)",
              backgroundSize: "cover", backgroundPosition: "center", opacity: 0.6,
            }} />
          </div>
        )}
        <div style={{ position: "absolute", top: 14, left: 14 }}>
          <Badge tone={st.tone} variant="solid" dot size="md">{badge || st.label}</Badge>
        </div>
      </div>

      {/* Body */}
      <div style={{ padding: "var(--space-5)", display: "flex", flexDirection: "column", gap: "var(--space-4)", flex: 1 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {development && (
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 11.5, letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--teal-600)" }}>
              {development}
            </span>
          )}
          <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 21, color: "var(--navy-900)", margin: 0, letterSpacing: "-0.01em" }}>{name}</h3>
        </div>

        {specs.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px 18px" }}>
            {specs.map((sp, i) => (
              <div key={i} style={{ display: "flex", flexDirection: "column", gap: 1 }}>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, fontWeight: 500, color: "var(--navy-800)", whiteSpace: "nowrap" }}>{sp.value}</span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "var(--text-muted)" }}>{sp.label}</span>
              </div>
            ))}
          </div>
        )}

        <div style={{ marginTop: "auto", paddingTop: "var(--space-4)", borderTop: "1px solid var(--border)", display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 12 }}>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {area && <span style={{ fontFamily: "var(--font-body)", fontSize: 12.5, color: "var(--text-muted)" }}>{area}</span>}
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, color: "var(--navy-900)", letterSpacing: "-0.01em" }}>{price}</span>
            {priceNote && <span style={{ fontFamily: "var(--font-body)", fontSize: 11.5, color: "var(--text-muted)" }}>{priceNote}</span>}
          </div>
          <Button variant="primary" size="sm" onClick={onAction}>{actionLabel}</Button>
        </div>
      </div>
    </div>
  );
}
