"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function SiteHeader() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    function onScroll() {
      setSolid(window.scrollY > window.innerHeight * 0.7);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const linkStyle: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    fontSize: 12,
    letterSpacing: "0.18em",
    textTransform: "uppercase",
    textDecoration: "none",
    color: solid ? "var(--stone-ink)" : "rgba(255,255,255,0.82)",
    transition: "color .25s",
  };

  const ctaStyle: React.CSSProperties = {
    fontFamily: "var(--font-display)",
    fontWeight: 500,
    fontSize: 12,
    letterSpacing: "0.16em",
    textTransform: "uppercase",
    textDecoration: "none",
    color: solid ? "var(--navy-700)" : "#fff",
    paddingBottom: 4,
    borderBottom: `1px solid ${solid ? "var(--navy-300)" : "rgba(255,255,255,0.45)"}`,
    transition: "color .25s, border-color .25s",
  };

  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: solid ? "rgba(247,244,238,0.92)" : "transparent",
        backdropFilter: solid ? "blur(14px)" : "none",
        borderBottom: solid ? "1px solid var(--taupe)" : "1px solid transparent",
        transition: "background .4s ease, box-shadow .4s ease, border-color .4s ease",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "22px 56px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 32,
        }}
      >
        <a href="#top" style={{ display: "flex", position: "relative", alignItems: "center" }}>
          <Image
            src="/assets/logo/camvi78-logo-white.png"
            alt="Camvi 78"
            width={220}
            height={72}
            style={{
              height: 72,
              width: "auto",
              display: "block",
              opacity: solid ? 0 : 1,
              transition: "opacity .3s",
              position: solid ? "absolute" : "relative",
            }}
            priority
          />
          <Image
            src="/assets/logo/camvi78-logo-navy.png"
            alt="Camvi 78"
            width={220}
            height={72}
            style={{
              height: 72,
              width: "auto",
              display: "block",
              opacity: solid ? 1 : 0,
              transition: "opacity .3s",
              position: solid ? "relative" : "absolute",
            }}
          />
        </a>

        <nav style={{ display: "flex", gap: 38, alignItems: "center" }}>
          {[
            ["#desarrollos", "Desarrollos"],
            ["#filosofia", "Filosofía"],
            ["#valores", "Valores"],
            ["#contacto", "Contacto"],
          ].map(([href, label]) => (
            <a key={href} href={href} style={linkStyle}>
              {label}
            </a>
          ))}
        </nav>

        <a href="#contacto" style={ctaStyle}>
          Agendar una cita
        </a>
      </div>
    </header>
  );
}
