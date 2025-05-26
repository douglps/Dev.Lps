// src/pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="pt-BR">
      <Head>
        {/* Favicon principal para navegadores mais antigos e fallback */}
        <link rel="icon" href="/favicon.ico" />

        {/* Ícones PNG de diferentes tamanhos para navegadores modernos */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />

        {/* Ícone para telas sensíveis ao toque da Apple (iOS) */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />

        {/* Ícones para Android Chrome */}
        <link rel="icon" type="image/png" sizes="192x192" href="/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/android-chrome-512x512.png" />

        <link rel="manifest" href="/site.webmanifest" />

         <meta name="theme-color" content="#11f041" />

        {/* Google Analytics tag - Mantenha ele aqui no Head */}
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-L7QMN988BD"></Script>
        <Script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L7QMN988BD');
            `,
          }}
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}