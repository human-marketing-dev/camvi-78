"use client";

import { useState } from "react";
import Image from "next/image";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";

type PropType = "lotes" | "terreno";
type Transaction = "venta" | "renta";

interface Lot {
  label: string;
  area: number;
  unit?: string;
}

interface Property {
  id: string;
  name?: string;
  type: PropType;
  transaction: Transaction;
  totalArea: number | null;
  lots?: Lot[];
  use?: string;
  placeholder?: boolean;
  image?: string;
}

const properties: Property[] = [
  {
    id: "Acuaducto",
    type: "lotes",
    transaction: "venta",
    totalArea: 32000,
    image: "/Acueducto.webp",
    lots: Array.from({ length: 16 }, (_, i) => ({ label: `Lote ${String(i + 1).padStart(2, "0")}`, area: 2000 })),
  },
  {
    id: "Altamira",
    type: "lotes",
    transaction: "venta",
    totalArea: 1500,
    image: "/Altamira.webp",
    lots: [
      { label: "Lote 01", area: 750 },
      { label: "Lote 02", area: 750 },
    ],
  },
  {
    id: "La Quinta I",
    type: "lotes",
    transaction: "venta",
    totalArea: null,
    placeholder: true,
  },
  {
    id: "La Quinta II",
    type: "lotes",
    transaction: "venta",
    totalArea: 25000,
    image: "/Lotes La Quinta.webp",
    lots: Array.from({ length: 5 }, (_, i) => ({ label: `Lote ${String(i + 1).padStart(2, "0")}`, area: 5000 })),
  },
  {
    id: "Chancaca",
    type: "lotes",
    transaction: "venta",
    totalArea: 15477,
    use: "Glamping",
    image: "/Chancaca.webp",
    lots: [
      { label: "Lote 01", area: 4148 },
      { label: "Lote 02", area: 4510 },
      { label: "Lote 03", area: 4679 },
      { label: "Lote 04", area: 2140 },
    ],
  },
  {
    id: "V01",
    type: "terreno",
    transaction: "venta",
    totalArea: 26650.03,
    image: "/v-01.webp",
  },
  {
    id: "V02",
    name: "V002 → V02",
    type: "terreno",
    transaction: "venta",
    totalArea: 11010.08,
    image: "/v-02.webp",
  },
  {
    id: "R01",
    type: "terreno",
    transaction: "renta",
    totalArea: 10000,
    image: "/r-01.webp",
  },
  {
    id: "R02",
    type: "lotes",
    transaction: "renta",
    totalArea: 21885.47,
    image: "/r-02.webp",
    lots: [
      { label: "Lote 01", area: 10000 },
      { label: "Lote 02", area: 2971.37 },
      { label: "Lote 03", area: 2971.37 },
      { label: "Lote 04", area: 2971.37 },
      { label: "Lote 05", area: 2971.37 },
    ],
  },
  {
    id: "R03",
    type: "terreno",
    transaction: "venta",
    totalArea: 62668.24,
    image: "/r-03.webp",
  },
  {
    id: "R04",
    type: "terreno",
    transaction: "renta",
    totalArea: 790.05,
    image: "/r-04.webp",
  },
  {
    id: "R05",
    type: "terreno",
    transaction: "renta",
    totalArea: 15145.74,
    image: "/r-05.webp",
  },
  {
    id: "R06",
    type: "terreno",
    transaction: "renta",
    totalArea: 16950.02,
    image: "/r-06.webp",
  },
  {
    id: "R07",
    type: "terreno",
    transaction: "renta",
    totalArea: 18054.4,
    image: "/r-07.webp",
  },
];

function formatArea(m2: number) {
  return `${m2.toLocaleString("es-MX", { maximumFractionDigits: 2 })} m²`;
}

function Chip({
  label,
  active,
  onClick,
}: {
  label: string;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      style={{
        fontFamily: "var(--font-display)",
        fontSize: 11,
        letterSpacing: "0.16em",
        textTransform: "uppercase",
        fontWeight: 600,
        padding: "9px 22px",
        border: active ? "1px solid var(--navy-700)" : "1px solid var(--taupe)",
        borderRadius: 2,
        background: active ? "var(--navy-700)" : "transparent",
        color: active ? "#fff" : "var(--stone-ink)",
        cursor: "pointer",
        transition: "all .2s",
      }}
    >
      {label}
    </button>
  );
}

function PropertyCard({ p }: { p: Property }) {
  const isVenta = p.transaction === "venta";
  const accent = isVenta ? "var(--green-500)" : "var(--teal-500)";
  const accentBg = isVenta ? "var(--green-50, #f0faf4)" : "var(--teal-50, #f0fafe)";
  const accentText = isVenta ? "var(--green-700, #166534)" : "var(--teal-700, #0e7490)";

  return (
    <article
      style={{
        background: "#fff",
        border: "1px solid var(--taupe)",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* image */}
      <div
        style={{
          aspectRatio: "4/3",
          position: "relative",
          overflow: "hidden",
          flexShrink: 0,
          background: "linear-gradient(140deg, var(--sand) 0%, var(--sand-2) 70%, var(--taupe) 100%)",
        }}
      >
        {p.image ? (
          <Image
            src={p.image}
            alt={p.id}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            style={{ objectFit: "cover" }}
          />
        ) : (
          <>
            <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <svg width="56" height="44" viewBox="0 0 56 44" fill="none" style={{ opacity: 0.22 }}>
                <path d="M0 44 L14 22 L22 32 L34 14 L56 44Z" fill="var(--stone-ink)" />
                <circle cx="42" cy="10" r="8" fill="var(--stone-ink)" />
              </svg>
            </div>
            <span
              style={{
                position: "absolute",
                bottom: 10,
                right: 14,
                fontFamily: "var(--font-mono)",
                fontSize: 9,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--stone-ink)",
                opacity: 0.5,
              }}
            >
              Imagen próximamente
            </span>
          </>
        )}
        {/* accent bar at bottom of image */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 4, background: accent, zIndex: 1 }} />
      </div>

      <div style={{ padding: "28px 28px 24px", flex: 1, display: "flex", flexDirection: "column", gap: 20 }}>
        {/* header */}
        <div>
          <div style={{ display: "flex", gap: 8, marginBottom: 12, flexWrap: "wrap" }}>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 10,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontWeight: 600,
                padding: "4px 10px",
                background: "var(--sand)",
                color: "var(--stone-ink)",
              }}
            >
              {p.type === "lotes" ? "Lotes" : "Terreno"}
            </span>
            <span
              style={{
                fontFamily: "var(--font-display)",
                fontSize: 10,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                fontWeight: 600,
                padding: "4px 10px",
                background: accentBg,
                color: accentText,
              }}
            >
              {p.transaction === "venta" ? "Venta" : "Renta"}
            </span>
            {p.use && (
              <span
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 10,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  fontWeight: 600,
                  padding: "4px 10px",
                  background: "var(--sand-2)",
                  color: "var(--stone-ink)",
                }}
              >
                {p.use}
              </span>
            )}
          </div>

          <h3
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              fontSize: 28,
              letterSpacing: "0.01em",
              color: "var(--navy-900)",
              margin: 0,
              lineHeight: 1.1,
            }}
          >
            {p.id}
          </h3>
        </div>

        {/* area */}
        {p.placeholder ? (
          <div
            style={{
              padding: "20px 0",
              borderTop: "1px solid var(--sand-2)",
              borderBottom: "1px solid var(--sand-2)",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 14,
                color: "var(--stone-ink)",
                fontStyle: "italic",
                margin: 0,
              }}
            >
              Información disponible próximamente
            </p>
          </div>
        ) : (
          <div style={{ borderTop: "1px solid var(--sand-2)", paddingTop: 18 }}>
            <div style={{ marginBottom: p.lots ? 16 : 0 }}>
              <span
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--stone-ink)",
                  display: "block",
                  marginBottom: 4,
                }}
              >
                Superficie total
              </span>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 36,
                  fontWeight: 300,
                  color: "var(--navy-900)",
                  lineHeight: 1,
                }}
              >
                {p.totalArea ? formatArea(p.totalArea) : "—"}
              </span>
            </div>

            {p.lots && p.lots.length <= 6 && (
              <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                {p.lots.map((lot) => (
                  <div
                    key={lot.label}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      padding: "5px 0",
                      borderBottom: "1px solid var(--sand)",
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        color: "var(--stone-ink)",
                        letterSpacing: "0.06em",
                      }}
                    >
                      {lot.label}
                    </span>
                    <span
                      style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: 11,
                        color: "var(--navy-700)",
                        fontWeight: 500,
                      }}
                    >
                      {lot.area.toLocaleString("es-MX")} m²
                    </span>
                  </div>
                ))}
              </div>
            )}

            {p.lots && p.lots.length > 6 && (
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "6px 0",
                  borderBottom: "1px solid var(--sand)",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--stone-ink)",
                    letterSpacing: "0.06em",
                  }}
                >
                  {p.lots.length} lotes
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 11,
                    color: "var(--navy-700)",
                    fontWeight: 500,
                  }}
                >
                  {p.totalArea ? formatArea(p.totalArea / p.lots.length) : "—"} c/u
                </span>
              </div>
            )}
          </div>
        )}

        {/* CTA */}
        <div style={{ marginTop: "auto" }}>
          <a
            href="/#contacto"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontFamily: "var(--font-display)",
              fontSize: 11,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              fontWeight: 600,
              color: "var(--navy-700)",
              textDecoration: "none",
              borderBottom: "1px solid var(--navy-300)",
              paddingBottom: 4,
            }}
          >
            Solicitar información
          </a>
        </div>
      </div>
    </article>
  );
}

export default function PortafolioPage() {
  const [typeFilter, setTypeFilter] = useState<"all" | PropType>("all");
  const [txFilter, setTxFilter] = useState<"all" | Transaction>("all");

  const filtered = properties.filter((p) => {
    if (typeFilter !== "all" && p.type !== typeFilter) return false;
    if (txFilter !== "all" && p.transaction !== txFilter) return false;
    return true;
  });

  const ventaCount = properties.filter((p) => p.transaction === "venta").length;
  const rentaCount = properties.filter((p) => p.transaction === "renta").length;
  const lotesCount = properties.filter((p) => p.type === "lotes").length;
  const terrenoCount = properties.filter((p) => p.type === "terreno").length;

  return (
    <>
      <SiteHeader alwaysSolid />

      {/* Hero band */}
      <section
        style={{
          paddingTop: 208,
          paddingBottom: 64,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* background photo */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/assets/photos/hero-bg.jpg)",
            backgroundSize: "cover",
            backgroundPosition: "center 40%",
          }}
        />
        {/* dark overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(10,14,26,0.72) 0%, rgba(10,14,26,0.58) 100%)",
          }}
        />
        {/* contour pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url(/assets/patterns/contour-lines.svg)",
            backgroundSize: "820px",
            backgroundPosition: "right -80px center",
            backgroundRepeat: "no-repeat",
            opacity: 0.14,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 56px",
            position: "relative",
            zIndex: 2,
          }}
        >
          <p
            style={{
              fontFamily: "var(--font-display)",
              fontSize: 11,
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              color: "var(--green-300)",
              fontWeight: 600,
              margin: "0 0 18px",
            }}
          >
            Portafolio · Camvi 78
          </p>
          <h1
            style={{
              fontFamily: "var(--font-serif)",
              fontWeight: 300,
              fontSize: "clamp(40px, 6vw, 72px)",
              color: "#fff",
              margin: "0 0 18px",
              lineHeight: 1.05,
              letterSpacing: "-0.01em",
            }}
          >
            Propiedades{" "}
            <em style={{ fontStyle: "italic", color: "rgba(255,255,255,0.65)" }}>
              disponibles
            </em>
          </h1>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: 16,
              color: "rgba(255,255,255,0.62)",
              margin: 0,
              maxWidth: "52ch",
              lineHeight: 1.7,
            }}
          >
            Terrenos y lotes campestres en venta y renta en los corredores con mayor proyección de Nuevo León.
          </p>

          {/* Stats */}
          <div style={{ display: "flex", gap: 48, marginTop: 48, flexWrap: "wrap" }}>
            {[
              { label: "Propiedades", value: properties.length },
              { label: "En venta", value: ventaCount },
              { label: "En renta", value: rentaCount },
            ].map(({ label, value }) => (
              <div key={label}>
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 42,
                    fontWeight: 300,
                    color: "#fff",
                    display: "block",
                    lineHeight: 1,
                  }}
                >
                  {value}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 10,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(255,255,255,0.48)",
                    display: "block",
                    marginTop: 6,
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters + grid */}
      <section
        style={{
          background: "var(--ivory)",
          minHeight: "60vh",
          padding: "60px 0 100px",
        }}
      >
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 56px" }}>
          {/* Filter row */}
          <div
            style={{
              display: "flex",
              gap: 28,
              marginBottom: 48,
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", gap: 8 }}>
              <Chip label="Todos" active={typeFilter === "all"} onClick={() => setTypeFilter("all")} />
              <Chip
                label={`Lotes (${lotesCount})`}
                active={typeFilter === "lotes"}
                onClick={() => setTypeFilter("lotes")}
              />
              <Chip
                label={`Terreno (${terrenoCount})`}
                active={typeFilter === "terreno"}
                onClick={() => setTypeFilter("terreno")}
              />
            </div>

            <div
              style={{
                width: 1,
                height: 24,
                background: "var(--taupe)",
              }}
            />

            <div style={{ display: "flex", gap: 8 }}>
              <Chip
                label="Venta"
                active={txFilter === "venta"}
                onClick={() => setTxFilter(txFilter === "venta" ? "all" : "venta")}
              />
              <Chip
                label="Renta"
                active={txFilter === "renta"}
                onClick={() => setTxFilter(txFilter === "renta" ? "all" : "renta")}
              />
            </div>

            <span
              style={{
                marginLeft: "auto",
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                color: "var(--stone-ink)",
                letterSpacing: "0.08em",
              }}
            >
              {filtered.length} de {properties.length} propiedades
            </span>
          </div>

          {/* Grid */}
          {filtered.length === 0 ? (
            <div
              style={{
                textAlign: "center",
                padding: "80px 0",
                color: "var(--stone-ink)",
                fontFamily: "var(--font-body)",
                fontSize: 16,
              }}
            >
              No hay propiedades con los filtros seleccionados.
            </div>
          ) : (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: 24,
              }}
            >
              {filtered.map((p) => (
                <PropertyCard key={p.id} p={p} />
              ))}
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
