import Head from "next/head";
import "@/src/styles/globals.css";

import type { Metadata } from "next";

// Opcional: Se você quiser um título de seção para toda a rota /contato
export const metadata: Metadata = {
  title: "Contato | DevLps",
  description:
    "Vamos conversar para desenvolver seu projeto. Dê o primeiro passo para iniciar sua vitrine online, para expor seu trabalho, arte, hobby ou conteúdo, fale diretamente com Douglas Lopes.",
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
