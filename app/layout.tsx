import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Camvi 78 — Desarrollo Inmobiliario",
  description: "Desarrollamos lotes campestres de alto valor en los corredores con mayor proyección de Monterrey. Espacios pensados para perdurar, crecer y heredarse.",
  keywords: ["lotes campestres", "Monterrey", "plusvalía", "desarrollo inmobiliario", "Camvi 78", "Los Olivos", "Allende"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
