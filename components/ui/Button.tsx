"use client";

import { useState } from "react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "accent" | "secondary" | "ghost" | "on-dark";
  size?: "sm" | "md" | "lg";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  style?: React.CSSProperties;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  iconLeft,
  iconRight,
  fullWidth = false,
  disabled = false,
  type = "button",
  onClick,
  style = {},
}: ButtonProps) {
  const sizes = {
    sm: { padding: "0 14px", height: 36, fontSize: 13, gap: 7, radius: "var(--radius-sm)" },
    md: { padding: "0 20px", height: 44, fontSize: 14.5, gap: 8, radius: "var(--radius-md)" },
    lg: { padding: "0 28px", height: 54, fontSize: 16, gap: 10, radius: "var(--radius-md)" },
  };
  const s = sizes[size];

  const variants = {
    primary: {
      background: "var(--navy-700)", color: "#fff",
      border: "1.5px solid var(--navy-700)",
      hoverBg: "var(--navy-800)", activeBg: "var(--navy-900)",
    },
    accent: {
      background: "var(--green-500)", color: "#fff",
      border: "1.5px solid var(--green-500)",
      hoverBg: "var(--green-600)", activeBg: "var(--green-700)",
    },
    secondary: {
      background: "var(--surface)", color: "var(--navy-700)",
      border: "1.5px solid var(--navy-300)",
      hoverBg: "var(--navy-50)", activeBg: "var(--navy-100)",
    },
    ghost: {
      background: "transparent", color: "var(--navy-700)",
      border: "1.5px solid transparent",
      hoverBg: "var(--navy-50)", activeBg: "var(--navy-100)",
    },
    "on-dark": {
      background: "#fff", color: "var(--navy-700)",
      border: "1.5px solid #fff",
      hoverBg: "var(--navy-50)", activeBg: "var(--navy-100)",
    },
  };
  const v = variants[variant];

  const [hover, setHover] = useState(false);
  const [active, setActive] = useState(false);

  const bg = disabled ? undefined
    : active ? v.activeBg
    : hover ? v.hoverBg : v.background;

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center",
        gap: s.gap, height: s.height, padding: s.padding,
        width: fullWidth ? "100%" : "auto",
        fontFamily: "var(--font-display)", fontWeight: 600, fontSize: s.fontSize,
        letterSpacing: "0.005em", lineHeight: 1, whiteSpace: "nowrap",
        borderRadius: s.radius, cursor: disabled ? "not-allowed" : "pointer",
        background: bg, color: v.color, border: v.border,
        opacity: disabled ? 0.45 : 1,
        transform: active && !disabled ? "translateY(0.5px)" : "none",
        transition: "background var(--duration-fast) var(--ease-standard), transform var(--duration-fast) var(--ease-standard)",
        ...style,
      }}
    >
      {iconLeft && <span style={{ display: "inline-flex" }}>{iconLeft}</span>}
      {children}
      {iconRight && <span style={{ display: "inline-flex" }}>{iconRight}</span>}
    </button>
  );
}
