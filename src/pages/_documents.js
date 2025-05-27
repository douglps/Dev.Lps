// src/pages/_document.js
import { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script';

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
        <Script id="google-analytics-script" strategy="afterInteractive" async src="https://www.googletagmanager.com/gtag/js?id=G-L7QMN988BD"></Script>
        <Script
          id="google-analytics-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-L7QMN988BD');
            `,
          }}
        />
<Script
  id="facebook-pixel-base"
  strategy="afterInteractive" // Carrega após a hidratação, geralmente adequado para pixels de rastreamento
  dangerouslySetInnerHTML={{
    __html: `
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}');
      fbq('track', 'PageView');
    `,
  }}
/>
<noscript
  dangerouslySetInnerHTML={{
    __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=${process.env.NEXT_PUBLIC_FACEBOOK_PIXEL_ID}&ev=PageView&noscript=1"/>`, // <-- Usando a variável de ambiente
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