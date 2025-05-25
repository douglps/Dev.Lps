// src/app/layout.tsx
// SEM "use client" AQUI! Este é um Server Component por padrão.

import type { Metadata } from "next"; // Importe Metadata
import { Lato } from "next/font/google"; // Importe a fonte
import GlobalStyle from "@/src/styles/GlobalStyle";
import { Header } from "@/src/components/Header";
import { Control } from "@/src/components/Control";
import { Footer } from "@/src/components/Footer";

import { ThemeProvider } from "@/src/contexts/ThemeContext";

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";

import StyledComponentsRegistry from "./registry";

// IMPORTAÇÃO DO COMPONENTE SCRIPT AQUI
import Script from "next/script";

const lato = Lato({
  weight: ["100", "400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-lato",
  subsets: ["latin"],
});

// A exportação 'metadata' permanece aqui, pois este é um Server Component
export const metadata: Metadata = {
  title: "DevLps | Portifólio de Douglas Lopes",
  description:
    "Explore o portifólio digital de Douglas Lopes — desenvolvedor web focado em design funcional, performance e criatividade.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={lato.variable}>
      <body>
        <StyledComponentsRegistry>
          <ThemeProvider>
            {/* SCRIPTS DO GOOGLE ANALYTICS INSERIDOS AQUI USANDO next/script
              A estratégia "afterInteractive" é comum para GA e garante que o script
              seja carregado e executado após a hidratação da página.
            */}
            <Script
              src="https://www.googletagmanager.com/gtag/js?id=G-L7QMN988BD"
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());

                gtag('config', 'G-L7QMN988BD');
              `}
            </Script>

            <GlobalStyle />
            <Header />
            <Control />
            {children}
            <Footer />
            <SpeedInsights />
            <Analytics />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}