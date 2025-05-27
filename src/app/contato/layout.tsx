import Head from "next/head";
import "@/src/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fale Conosco | DevLps",
  description:
    "Entre em contato com Douglas Lopes para projetos, parcerias ou dúvidas.",
  openGraph: {
    title: "Fale Conosco | DevLps",
    description:
      "Entre em contato com Douglas Lopes para projetos, parcerias ou dúvidas.",
    url: "https://devlps.vercel.app/contato",
    images: [
      {
        url: "https://devlps.vercel.app/og-images/thumbContato.avif", // Substitua pela imagem de contato
        width: 1200,
        height: 630,
        alt: "Entre em contato com Douglas Lopes",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fale Conosco | DevLps",
    description:
      "Entre em contato com Douglas Lopes para projetos, parcerias ou dúvidas.",
    images: ["https://devlps.vercel.app/og-images/thumbContato.avif"], // Substitua pela imagem de contato
  },
  alternates: {
    canonical: "https://devlps.vercel.app/contato",
  },
   other: {
    "fb:app_id": "1647306825939965", 
  },
};

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="contato">
      <Head>
        <meta
          property="og:title"
          content="Contato DevLps | Portifólio de Douglas Lopes"
        />
        <meta
          property="og:description"
          content="Fale diretamente com Douglas Lopes."
        />
        <meta property="og:url" content="https://devlps.vercel.app/contato" />
        <meta
          property="og:image"
          content="https://devlps.vercel.app/og-images/thumbcompart.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contato - DevLps | Portifólio de Douglas Lopes"
        />
        <meta
          name="twitter:description"
          content="Fale diretamente com Douglas Lopes."
        />
        <meta
          name="twitter:image"
          content="https://devlps.vercel.app/og-images/thumbcompart.jpg"
        />

        <link rel="canonical" href="https://devlps.vercel.app/conttao" />

        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "ContactPage",
              "url": "https://devlps.vercel.app/contato",
              "name": "Contato - Douglas Lopes"
            }
          `}
        </script>
      </Head>
      {children}
    </section>
  );
}
