import Head from "next/head";
import type { Metadata } from "next";
import "@/src/styles/globals.css";

export const metadata: Metadata = {
  title: "Contato - DevLps | Portifólio de Douglas Lopes",
  description:
    "Explore o portifólio digital de Douglas Lopes — desenvolvedor web focado em design funcional, performance e criatividade.",
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
