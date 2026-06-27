import Image from "next/image";

export function SiteFooter() {
  return (
    <footer
      style={{
        position: "relative",
        background: "var(--navy-900)",
        color: "#fff",
        padding: "80px 0 40px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url(/assets/patterns/contour-lines.svg)",
          backgroundSize: "820px",
          backgroundPosition: "right -80px top -60px",
          backgroundRepeat: "no-repeat",
          opacity: 0.32,
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 56px", position: "relative", zIndex: 2 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.6fr 1fr 1fr 1fr",
            gap: 48,
            paddingBottom: 56,
            borderBottom: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <div>
            <Image
              src="/assets/logo/camvi78-logo-white.png"
              alt="Camvi 78"
              width={280}
              height={96}
              style={{ height: 96, width: "auto", marginBottom: 24 }}
            />
            <p
              style={{
                color: "rgba(255,255,255,0.66)",
                fontSize: 14.5,
                lineHeight: 1.75,
                maxWidth: "32ch",
                margin: 0,
                fontFamily: "var(--font-body)",
              }}
            >
              Desarrollo y comercialización de lotes campestres con accesibilidad, plusvalía y visión a futuro. Monterrey, Nuevo León.
            </p>
            <div style={{ display: "flex", gap: 12, marginTop: 26 }}>
              {[
                <svg key="ig" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width={18} height={18}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" /></svg>,
                <svg key="fb" viewBox="0 0 24 24" fill="currentColor" width={18} height={18}><path d="M14 8.5h2.2V5.6c-.4-.05-1.3-.15-2.4-.15-2.4 0-4 1.45-4 4.1V11.9H7v3.1h2.8V23h3.4v-8h2.7l.45-3.1H13.2V9.9c0-.9.25-1.4 1.6-1.4z" /></svg>,
                <svg key="wa" viewBox="0 0 24 24" fill="currentColor" width={18} height={18}><path d="M12 2a10 10 0 0 0-8.6 15.05L2 22l5.1-1.34A10 10 0 1 0 12 2zm0 1.8a8.2 8.2 0 0 1 6.93 12.6c-.2.32-.27.55-.16.9l.6 2.2-2.27-.6c-.32-.09-.55-.05-.83.12A8.2 8.2 0 1 1 12 3.8zm-2.55 3.6c-.18 0-.46.07-.7.33-.24.26-.92.9-.92 2.2s.94 2.55 1.07 2.73c.13.18 1.85 2.96 4.6 4.04 2.28.9 2.74.72 3.24.67.5-.04 1.6-.65 1.83-1.28.22-.63.22-1.17.16-1.28-.07-.11-.24-.18-.5-.31-.27-.13-1.6-.79-1.84-.88-.25-.09-.43-.13-.61.14-.18.26-.7.87-.86 1.05-.16.18-.31.2-.58.07-.27-.13-1.13-.42-2.15-1.33-.8-.71-1.33-1.58-1.49-1.85-.16-.27-.02-.41.12-.54.12-.12.27-.31.4-.47.13-.16.18-.27.27-.45.09-.18.04-.34-.02-.47-.07-.13-.6-1.45-.82-1.99-.21-.51-.43-.44-.6-.45z" /></svg>,
              ].map((icon, i) => (
                <a
                  key={i}
                  href="#"
                  style={{
                    width: 42,
                    height: 42,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "1px solid rgba(255,255,255,0.2)",
                    borderRadius: "50%",
                    color: "rgba(255,255,255,0.8)",
                    textDecoration: "none",
                  }}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {[
            {
              title: "Desarrollo",
              links: [["#desarrollos", "Los Olivos"], ["#filosofia", "Filosofía"], ["#valores", "Valores"]],
            },
            {
              title: "Compañía",
              links: [["#filosofia", "Nosotros"], ["#contacto", "Contacto"], ["#", "Aviso de privacidad"]],
            },
            {
              title: "Contacto",
              links: [["tel:+528112345678", "81 1234 5678"], ["mailto:hola@camvi78.mx", "hola@camvi78.mx"], ["#contacto", "WhatsApp"]],
            },
          ].map((col) => (
            <div key={col.title}>
              <h5
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: 11,
                  letterSpacing: "0.16em",
                  textTransform: "uppercase",
                  color: "var(--green-300)",
                  margin: "0 0 18px",
                  fontWeight: 600,
                }}
              >
                {col.title}
              </h5>
              {col.links.map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    display: "block",
                    color: "rgba(255,255,255,0.78)",
                    textDecoration: "none",
                    fontSize: 14.5,
                    marginBottom: 12,
                    fontFamily: "var(--font-body)",
                  }}
                >
                  {label}
                </a>
              ))}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 28,
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
            © 2026 Camvi 78 · Desarrollo Inmobiliario
          </span>
          <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "rgba(255,255,255,0.5)" }}>
            Aviso de privacidad · Términos
          </span>
        </div>
      </div>
    </footer>
  );
}
