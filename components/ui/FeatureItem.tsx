interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  children?: React.ReactNode;
  tone?: "navy" | "teal" | "green";
  layout?: "vertical" | "horizontal";
  style?: React.CSSProperties;
}

export function FeatureItem({ icon, title, children, tone = "teal", layout = "vertical", style = {} }: FeatureItemProps) {
  const tones: Record<string, [string, string]> = {
    navy:  ["var(--navy-100)", "var(--navy-700)"],
    teal:  ["var(--teal-100)", "var(--teal-600)"],
    green: ["var(--green-100)", "var(--green-600)"],
  };
  const [bg, fg] = tones[tone] ?? tones.teal;
  const row = layout === "horizontal";

  return (
    <div style={{ display: "flex", flexDirection: row ? "row" : "column", gap: row ? 16 : 14, alignItems: "flex-start", ...style }}>
      <div style={{
        flex: "none", width: 48, height: 48, borderRadius: "var(--radius-md)",
        background: bg, color: fg,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        {icon}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
        <h4 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16.5, color: "var(--navy-900)", margin: 0 }}>{title}</h4>
        {children && <p style={{ fontFamily: "var(--font-body)", fontSize: 14, lineHeight: 1.6, color: "var(--text-body)", margin: 0 }}>{children}</p>}
      </div>
    </div>
  );
}
