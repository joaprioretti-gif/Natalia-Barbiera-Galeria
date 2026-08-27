import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Natalia Barbiera — Colección privada",
  description:
    "Catorce obras originales de Natalia Barbiera. Descubrí la colección y consultá por cada pieza.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
