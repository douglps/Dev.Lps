"use client";

import { useEffect } from "react";
import Script from "next/script";

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

export default function Home() {
  return (
    // Note que <html> e <body> não estão aqui, pois estarão no layout do servidor.
    // Você não precisa repetir as classes da fonte aqui se elas estiverem no <html> do Server Component.
    <>
    <Script
            id="hotjar-script" // Um ID único é recomendado
            strategy="afterInteractive" // Carrega o script após a página ser interativa
          >
            {`
              (function(h,o,t,j,a,r){
                  h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
                  h._hjSettings={hjid:6428713,hjsv:6};
                  a=o.getElementsByTagName('head')[0];
                  r=o.createElement('script');r.async=1;
                  r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
                  a.appendChild(r);
              })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
            `}
          </Script>
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
