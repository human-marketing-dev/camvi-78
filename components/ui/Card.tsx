"use client";

import { useState } from "react";

interface CardProps {
  children: React.ReactNode;
  padding?: "none" | "sm" | "md" | "lg";
  elevation?: "none" | "xs" | "sm" | "md" | "lg";
  interactive?: boolean;
  accent?: boolean;
  style?: React.CSSProperties;
}

export function Card({ children, padding = "md", elevation = "sm", interactive = false, accent = false, style = {} }: CardProps) {
  const pads: Record<string, string | number> = { none: 0, sm: "var(--space-4)", md: "var(--space-5)", lg: "var(--space-6)" };
  const shadows: Record<string, string> = { none: "none", xs: "var(--shadow-xs)", sm: "var(--shadow-sm)", md: "var(--shadow-md)", lg: "var(--shadow-lg)" };
  const [hover, setHover] = useState(false);

  return (
    <div
      onMouseEnter={() => interactive && setHover(true)}
      onMouseLeave={() => interactive && setHover(false)}
      style={{
        position: "relative",
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        padding: pads[padding] ?? pads.md,
        boxShadow: hover ? "var(--shadow-md)" : (shadows[elevation] ?? shadows.sm),
        transform: hover ? "translateY(-2px)" : "none",
        transition: "box-shadow var(--duration-base) var(--ease-standard), transform var(--duration-base) var(--ease-standard)",
        cursor: interactive ? "pointer" : "default",
        overflow: "hidden",
        ...style,
      }}
    >
      {accent && (
        <span style={{
          position: "absolute", top: 0, left: 0, right: 0, height: 4,
          background: "linear-gradient(90deg, var(--navy-700) 0%, var(--teal-500) 50%, var(--green-500) 100%)",
        }} />
      )}
      {children}
    </div>
  );
}
