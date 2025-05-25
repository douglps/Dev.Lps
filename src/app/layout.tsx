// src/app/layout.tsx
// SEM "use client" AQUI! Este é um Server Component por padrão.

import type { Metadata } from "next"; // Importe Metadata
import { Lato } from "next/font/google"; // Importe a fonte
import GlobalStyle from '@/src/styles/GlobalStyle';
import { Header } from "@/src/components/Header";
import { Control } from "@/src/components/Control";
import { Footer } from "@/src/components/Footer";

import { ThemeProvider } from "@/src/contexts/ThemeContext";

import StyledComponentsRegistry from "./registry"; 
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
            <GlobalStyle />
              <Header />
              <Control />
              {children}
              <Footer />
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
