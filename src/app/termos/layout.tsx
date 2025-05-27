import "@/src/styles/globals.css";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Termos de Uso | DevLps",
  description:
    "Leia os termos de uso para navegar e interagir com o site DevLps.",
  openGraph: {
    title: "Termos de Uso | DevLps",
    description:
      "Leia os termos de uso para navegar e interagir com o site DevLps.",
    url: "https://devlps.vercel.app/termos",
    images: [
      {
        url: "https://devlps.vercel.app/og-images/thumbTermos.avif", // Substitua pela imagem de termos
        width: 1200,
        height: 630,
        alt: "Termos de Uso",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Termos de Uso | DevLps",
    description:
      "Leia os termos de uso para navegar e interagir com o site DevLps.",
    images: ["https://devlps.vercel.app/og-images/thumbTermos.avif"], // Substitua pela imagem de termos
  },
  alternates: {
    canonical: "https://devlps.vercel.app/termos",
  },
   other: {
    "fb:app_id": "1647306825939965", 
  },
};

export default function TermosLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="termos-layout">
      {children} {/* Aqui vai o conteúdo das páginas dentro de /termos */}
    </main>
  );
}
