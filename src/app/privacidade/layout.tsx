import "@/src/styles/globals.css";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Política de Privacidade | DevLps",
  description: "Conheça a política de privacidade e como seus dados são tratados no site DevLps.",
  openGraph: {
    title: "Política de Privacidade | DevLps",
    description: "Conheça a política de privacidade e como seus dados são tratados no site DevLps.",
    url: "https://devlps.vercel.app/privacidade",
    images: [
      {
        url: "https://devlps.vercel.app/og-images/thumbPrivacidade.avif", // Substitua pela imagem de privacidade
        width: 1200,
        height: 630,
        alt: "Política de Privacidade",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Política de Privacidade | DevLps",
    description: "Conheça a política de privacidade e como seus dados são tratados no site DevLps.",
    images: ["https://devlps.vercel.app/og-images/thumbPrivacidade.avif"], // Substitua pela imagem de privacidade
  },
  alternates: {
    canonical: "https://devlps.vercel.app/privacidade",
  },
};

export default function PrivacidadeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="privacidade-layout">
      {children} {/* Aqui vai o conteúdo das páginas dentro de /privacidade */}
    </main>
  );
}