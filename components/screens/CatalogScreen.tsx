"use client";

import { useState } from "react";
import { LotCard } from "@/components/property/LotCard";

interface CatalogScreenProps {
  onNav: (id: string) => void;
}

const wrap = { maxWidth: 1240, margin: "0 auto", padding: "0 32px" };

const CATALOG_LOTS = [
  { development: "Fracc. Las Lomas", name: "Lote A-12", status: "disponible" as const, price: "$1,850,000", priceNote: "o desde $24,500 / mes", dev: "lomas", specs: [{ value: "1,024 m²", label: "Superficie" }, { value: "22 m", label: "Frente" }, { value: "Esquina", label: "Ubicación" }] },
  { development: "Valle Sereno", name: "Lote C-04", status: "ultimos" as const, price: "$2,310,000", priceNote: "Enganche 20%", dev: "valle", specs: [{ value: "1,400 m²", label: "Superficie" }, { value: "28 m", label: "Frente" }, { value: "Vista", label: "Premium" }] },
  { development: "Altavista", name: "Lote B-21", status: "disponible" as const, price: "$1,420,000", priceNote: "Preventa", dev: "alta", specs: [{ value: "860 m²", label: "Superficie" }, { value: "20 m", label: "Frente" }, { value: "Plano", label: "Topografía" }] },
  { development: "Fracc. Las Lomas", name: "Lote A-18", status: "disponible" as const, price: "$1,690,000", priceNote: "o desde $22,400 / mes", dev: "lomas", specs: [{ value: "940 m²", label: "Superficie" }, { value: "20 m", label: "Frente" }, { value: "Centro", label: "Ubicación" }] },
  { development: "Valle Sereno", name: "Lote C-09", status: "apartado" as const, price: "$2,050,000", priceNote: "Apartado", dev: "valle", specs: [{ value: "1,260 m²", label: "Superficie" }, { value: "26 m", label: "Frente" }, { value: "Arbolado", label: "Entorno" }] },
  { development: "Altavista", name: "Lote B-07", status: "vendido" as const, price: "$1,380,000", priceNote: "Vendido", dev: "alta", specs: [{ value: "820 m²", label: "Superficie" }, { value: "18 m", label: "Frente" }, { value: "Plano", label: "Topografía" }] },
];

const devs = [["todos", "Todos los desarrollos"], ["lomas", "Las Lomas"], ["valle", "Valle Sereno"], ["alta", "Altavista"]] as const;
const states = [["todos", "Todos"], ["disponible", "Disponibles"], ["ultimos", "Últimos"], ["apartado", "Apartados"]] as const;

function Chip({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button onClick={onClick} style={{
      height: 38, padding: "0 16px", borderRadius: "var(--radius-pill)", cursor: "pointer",
      fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13.5,
      background: active ? "var(--navy-700)" : "var(--surface)",
      color: active ? "#fff" : "var(--navy-700)",
      border: `1.5px solid ${active ? "var(--navy-700)" : "var(--border-strong)"}`,
      transition: "all .15s",
    }}>{label}</button>
  );
}

export function CatalogScreen({ onNav }: CatalogScreenProps) {
  const [dev, setDev] = useState("todos");
  const [status, setStatus] = useState("todos");

  const filtered = CATALOG_LOTS.filter((l) =>
    (dev === "todos" || l.dev === dev) && (status === "todos" || l.status === status)
  );

  return (
    <div style={{ background: "var(--neutral-50)", minHeight: "70vh" }}>
      {/* Page head */}
      <div style={{ position: "relative", background: "var(--navy-800)", color: "#fff", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(115deg, var(--navy-900), var(--navy-700) 70%, var(--teal-700) 140%)" }} />
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "url(/assets/patterns/contour-lines.svg)",
          backgroundSize: "760px", backgroundPosition: "right -40px center", opacity: 0.7,
        }} />
        <div style={{ ...wrap, position: "relative", padding: "64px 32px 56px" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 12.5, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--green-400)" }}>Catálogo de lotes</span>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 46, color: "#fff", margin: "12px 0 10px", letterSpacing: "-0.02em" }}>Encuentra tu lote campestre</h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "var(--navy-100)", maxWidth: 560, margin: 0 }}>Filtra por desarrollo y disponibilidad. Precios de preventa con esquemas de pago a meses sin intereses.</p>
        </div>
      </div>

      {/* Filters */}
      <div style={{ position: "sticky", top: 76, zIndex: 20, background: "rgba(255,255,255,0.9)", backdropFilter: "blur(10px)", borderBottom: "1px solid var(--border)" }}>
        <div style={{ ...wrap, display: "flex", gap: 24, alignItems: "center", padding: "16px 32px", flexWrap: "wrap" }}>
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {devs.map(([id, l]) => <Chip key={id} active={dev === id} label={l} onClick={() => setDev(id)} />)}
          </div>
          <div style={{ width: 1, height: 28, background: "var(--border-strong)" }} />
          <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
            {states.map(([id, l]) => <Chip key={id} active={status === id} label={l} onClick={() => setStatus(id)} />)}
          </div>
          <span style={{ marginLeft: "auto", fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--text-muted)" }}>{filtered.length} lotes</span>
        </div>
      </div>

      {/* Grid */}
      <div style={{ ...wrap, padding: "44px 32px 88px" }}>
        {filtered.length ? (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {filtered.map((l, i) => <LotCard key={i} {...l} onAction={() => onNav("contact")} />)}
          </div>
        ) : (
          <div style={{ textAlign: "center", padding: "80px 0", color: "var(--text-muted)", fontFamily: "var(--font-body)" }}>
            No hay lotes con estos filtros.{" "}
            <a href="#" onClick={(e) => { e.preventDefault(); setDev("todos"); setStatus("todos"); }} style={{ color: "var(--teal-600)" }}>
              Limpiar filtros
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
