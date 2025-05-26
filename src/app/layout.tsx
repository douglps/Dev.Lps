// src/app/layout.tsx
import { Lato } from "next/font/google";
import GlobalStyle from "@/src/styles/GlobalStyle";
import { Header } from "@/src/components/Header";
import { Control } from "@/src/components/Control";
import { Footer } from "@/src/components/Footer";
import CookieConsentBanner from '../components/CookieConsentBanner'; // Mantenha a importação

import { ThemeProvider } from "@/src/contexts/ThemeContext";

import { Analytics } from "@vercel/analytics/next"; // Mantenha Vercel Analytics
import { SpeedInsights } from "@vercel/speed-insights/next"; // Mantenha Vercel Speed Insights

import StyledComponentsRegistry from "./registry";

// REMOVA ESTA IMPORTAÇÃO DO SCRIPT AQUI, POIS ELA NÃO SERÁ NECESSÁRIA NO LAYOUT
// import Script from "next/script"; // <-- REMOVA ESTA LINHA

const lato = Lato({
  weight: ["100", "400", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-lato",
  subsets: ["latin"],
});

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
        url: "https://devlps.vercel.app/og-images/logo.avif",
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
    images: ["https://devlps.vercel.app/og-images/logo.avif"],
  },
  alternates: {
    canonical: "https://devlps.vercel.app",
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
            {/*
              ATENÇÃO! REMOVA OS SCRIPTS DO GOOGLE ANALYTICS DAQUI!
              Eles DEVEM estar APENAS dentro do CookieConsentBanner.tsx
            */}
            {/*
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
            */}

            <GlobalStyle />
            <Header />
            <Control />
            {children}
            <Footer />
            <CookieConsentBanner /> {/* Mantenha este aqui */}
            <SpeedInsights /> {/* Mantenha Vercel Speed Insights */}
            <Analytics /> {/* Mantenha Vercel Analytics */}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}