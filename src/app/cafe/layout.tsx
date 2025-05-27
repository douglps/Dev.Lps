// src/app/cafe/layout.tsx
import type { Metadata } from "next";
import "@/src/styles/globals.css"; // Se você usa globals.css aqui, ok.

export const metadata: Metadata = {
  title: "Contribua com um café ☕ | DevLps", // Este título final será usado para /cafe
  description: "Ajude com um café e apoie novos projetos.", // Esta descrição final será usada para /cafe
  openGraph: {
    title: "Contribua com um café ☕ | DevLps",
    description: "Ajude com um café e apoie novos projetos.",
    url: "https://devlps.vercel.app/cafe",
    images: [
      {
        url: "https://devlps.vercel.app/og-images/thumbCafe.avif",
        width: 1200,
        height: 630,
        alt: "Imagem de compartilhamento para a página de café",
      },
    ],
    type: "website",
    siteName: "DevLps", // Se quiser o nome do site aqui
  },
  twitter: {
    card: "summary_large_image",
    title: "Contribua com um café ☕ | DevLps",
    description: "Ajude com um café e apoie novos projetos.",
    images: ["https://devlps.vercel.app/og-images/thumbCafe.avif"],
    // creator: "@seu_usuario_twitter",
  },
  alternates: {
    canonical: "https://devlps.vercel.app/cafe",
  },
   other: {
    "fb:app_id": "1647306825939965", 
  },
};

export default function CafeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="cafe-layout">
      {children} {/* Aqui vai o conteúdo das páginas dentro de /cafe */}
    </main>
  );
}
