interface StatProps {
  value: string;
  label: string;
  sub?: string;
  align?: "left" | "center";
  tone?: "navy" | "teal" | "green" | "light";
  style?: React.CSSProperties;
}

export function Stat({ value, label, sub, align = "left", tone = "navy", style = {} }: StatProps) {
  const tones: Record<string, string> = { navy: "var(--navy-700)", teal: "var(--teal-600)", green: "var(--green-600)", light: "#fff" };
  const color = tones[tone] ?? tones.navy;
  const subColor = tone === "light" ? "var(--navy-200)" : "var(--text-muted)";

  return (
    <div style={{
      display: "flex", flexDirection: "column", gap: 4, textAlign: align,
      alignItems: align === "center" ? "center" : "flex-start", ...style,
    }}>
      <div style={{
        fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 40,
        lineHeight: 1, letterSpacing: "-0.02em", color,
        fontVariantNumeric: "tabular-nums",
      }}>{value}</div>
      <div style={{
        fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13.5,
        color: tone === "light" ? "#fff" : "var(--text-strong)",
      }}>{label}</div>
      {sub && <div style={{ fontFamily: "var(--font-body)", fontSize: 13, color: subColor, lineHeight: 1.45 }}>{sub}</div>}
    </div>
  );
}
