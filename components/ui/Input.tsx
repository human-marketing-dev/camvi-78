"use client";

import { useState } from "react";

interface InputProps {
  label?: string;
  hint?: string;
  error?: string;
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  type?: string;
  iconLeft?: React.ReactNode;
  disabled?: boolean;
  required?: boolean;
  id?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

export function Input({
  label, hint, error, value, defaultValue, placeholder,
  type = "text", iconLeft, disabled = false, required = false,
  id, onChange, style = {},
}: InputProps) {
  const [focus, setFocus] = useState(false);
  const inputId = id || `cv-in-${Math.random().toString(36).slice(2, 8)}`;
  const borderColor = error ? "var(--danger-500)" : focus ? "var(--teal-500)" : "var(--border-strong)";

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 7, ...style }}>
      {label && (
        <label htmlFor={inputId} style={{
          fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13,
          color: "var(--text-strong)", letterSpacing: "0.005em",
        }}>
          {label}{required && <span style={{ color: "var(--danger-500)", marginLeft: 3 }}>*</span>}
        </label>
      )}
      <div style={{
        display: "flex", alignItems: "center", gap: 9,
        height: 46, padding: "0 14px",
        background: disabled ? "var(--neutral-100)" : "var(--surface)",
        border: `1.5px solid ${borderColor}`, borderRadius: "var(--radius-md)",
        boxShadow: focus ? "var(--shadow-focus)" : "none",
        transition: "border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)",
      }}>
        {iconLeft && <span style={{ display: "inline-flex", color: "var(--text-muted)", flex: "none" }}>{iconLeft}</span>}
        <input
          id={inputId} type={type} value={value} defaultValue={defaultValue}
          placeholder={placeholder} disabled={disabled} onChange={onChange}
          onFocus={() => setFocus(true)} onBlur={() => setFocus(false)}
          required={required}
          style={{
            flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent",
            fontFamily: "var(--font-body)", fontSize: 15, color: "var(--text-strong)",
          }}
        />
      </div>
      {(hint || error) && (
        <span style={{
          fontFamily: "var(--font-body)", fontSize: 12.5,
          color: error ? "var(--danger-600)" : "var(--text-muted)",
        }}>
          {error || hint}
        </span>
      )}
    </div>
  );
}
