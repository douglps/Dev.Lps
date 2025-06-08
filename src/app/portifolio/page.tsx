"use client"; // Indica que este é um componente cliente, pois usa hooks de estado e interage com o DOM
import Script from "next/script";
import { MeuPortfolio } from "@/src/components/MeuPortifolio";

export default function Portfolio() {
  return (
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
      <MeuPortfolio />
    </>
  );
}
