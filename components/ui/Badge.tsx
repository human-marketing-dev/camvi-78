"use client";

interface BadgeProps {
  children: React.ReactNode;
  tone?: "neutral" | "navy" | "teal" | "green" | "success" | "warning" | "danger";
  variant?: "soft" | "solid";
  size?: "sm" | "md" | "lg";
  dot?: boolean;
  style?: React.CSSProperties;
}

export function Badge({ children, tone = "neutral", variant = "soft", size = "md", dot = false, style = {} }: BadgeProps) {
  const tones = {
    neutral: { soft: ["var(--neutral-100)", "var(--neutral-700)"], solid: ["var(--neutral-700)", "#fff"], dot: "var(--neutral-500)" },
    navy:    { soft: ["var(--navy-100)", "var(--navy-700)"],       solid: ["var(--navy-700)", "#fff"],     dot: "var(--navy-600)" },
    teal:    { soft: ["var(--teal-100)", "var(--teal-700)"],       solid: ["var(--teal-500)", "#fff"],     dot: "var(--teal-500)" },
    green:   { soft: ["var(--green-100)", "var(--green-700)"],     solid: ["var(--green-600)", "#fff"],    dot: "var(--green-500)" },
    success: { soft: ["var(--success-100)", "var(--success-600)"], solid: ["var(--success-500)", "#fff"],  dot: "var(--success-500)" },
    warning: { soft: ["var(--warning-100)", "var(--warning-600)"], solid: ["var(--warning-500)", "#fff"],  dot: "var(--warning-600)" },
    danger:  { soft: ["var(--danger-100)", "var(--danger-600)"],   solid: ["var(--danger-500)", "#fff"],   dot: "var(--danger-500)" },
  };
  const t = tones[tone];
  const [bg, fg] = t[variant];
  const sizes = {
    sm: { fontSize: 10.5, padding: "2px 8px", height: 20 },
    md: { fontSize: 11.5, padding: "3px 11px", height: 24 },
    lg: { fontSize: 13, padding: "5px 14px", height: 30 },
  };
  const s = sizes[size];

  return (
    <span style={{
      display: "inline-flex", alignItems: "center", gap: 6,
      height: s.height, padding: s.padding,
      background: bg, color: fg,
      fontFamily: "var(--font-display)", fontWeight: 600, fontSize: s.fontSize,
      letterSpacing: "0.04em", textTransform: "uppercase",
      borderRadius: "var(--radius-pill)", whiteSpace: "nowrap", lineHeight: 1,
      ...style,
    }}>
      {dot && <span style={{ width: 6, height: 6, borderRadius: "50%", background: variant === "solid" ? "currentColor" : t.dot, flex: "none" }} />}
      {children}
    </span>
  );
}
