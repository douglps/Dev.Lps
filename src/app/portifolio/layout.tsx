import "@/src/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projetos e Trabalhos | DevLps",
  description:
    "Explore os projetos e trabalhos recentes de Douglas Lopes, com foco em desenvolvimento web e design.",
  openGraph: {
    title: "Projetos e Trabalhos | DevLps",
    description:
      "Explore os projetos e trabalhos recentes de Douglas Lopes, com foco em desenvolvimento web e design.",
    url: "https://devlps.vercel.app/portifolio",
    images: [
      {
        url: "https://devlps.vercel.app/og-images/thumbPortifolio.avif", // Substitua pela imagem do portfólio
        width: 1200,
        height: 630,
        alt: "Portfólio de Douglas Lopes",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projetos e Trabalhos | DevLps",
    description:
      "Explore os projetos e trabalhos recentes de Douglas Lopes, com foco em desenvolvimento web e design.",
    images: ["https://devlps.vercel.app/og-images/thumbPortifolio.avif"], // Substitua pela imagem do portfólio
  },
  alternates: {
    canonical: "https://devlps.vercel.app/portifolio",
  },
};
export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="portfolio-layout">
      {children} {/* Aqui vai o conteúdo das páginas dentro de /portifolio */}
    </main>
  );
}
