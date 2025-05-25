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


// Componente ThemeInitializer
function ThemeInitializer() {
  useEffect(() => {
    initTheme();
  }, []);
  return null;
}


export default function Home({
}: Readonly<{
  children: React.ReactNode;
}>) {
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
