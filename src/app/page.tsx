"use client";

import { useEffect } from "react";

import "@/src/styles/globals.css";

import { initTheme } from "@/src/utils/theme";

import { Hero } from "@/src/components/Hero";
import { Cta } from "@/src/components/Cta";
import { Terminal } from "@/src/components/Terminal";
import { Skills } from "@/src/components/Skills";
import { ElevatorPitch } from "@/src/components/ElevatorPitch";
import { MeuPortfolio } from "@/src/components/MeuPortifolio";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Projetos e Trabalhos | DevLps",
  description:
    "Explore os projetos e trabalhos recentes de Douglas Lopes, com foco em desenvolvimento web e design.",
  openGraph: {
    title: "Projetos e Trabalhos | DevLps",
    description:
      "Explore os projetos e trabalhos recentes de Douglas Lopes, com foco em desenvolvimento web e design.",
    url: "https://devlps.vercel.app",
    images: [
      {
        url: "https://devlps.vercel.app/og-images/logo.avif", // Substitua pela imagem do portfólio
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
    images: ["https://devlps.vercel.app/og-images/logo.avif"], // Substitua pela imagem do portfólio
  },
  alternates: {
    canonical: "https://devlps.vercel.app",
  },
};

// Componente ThemeInitializer
function ThemeInitializer() {
  useEffect(() => {
    initTheme();
  }, []);
  return null;
}

export default function Home() {
  return (
    // Note que <html> e <body> não estão aqui, pois estarão no layout do servidor.
    // Você não precisa repetir as classes da fonte aqui se elas estiverem no <html> do Server Component.
    <>
      <ThemeInitializer />
      <Hero />
      <Cta />
      <Terminal />
      <Skills />
      <ElevatorPitch />
      <MeuPortfolio />
      <Cta />
    </>
  );
}
