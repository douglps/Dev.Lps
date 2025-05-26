// src/components/CookieConsentBanner.tsx
"use client";

import CookieConsent from "react-cookie-consent";
import Script from "next/script"; // Importe o Script do Next.js aqui
import { useState, useEffect } from "react";

export default function CookieConsentBanner() {
  const [hasConsent, setHasConsent] = useState(false);

  // useEffect para inicializar o estado de consentimento ao montar o componente
  useEffect(() => {
    const consentCookie = document.cookie
      .split("; ")
      .find((row) => row.startsWith("myWebsiteCookieConsent="));
    if (consentCookie && consentCookie.includes("true")) {
      setHasConsent(true);
    } else {
      setHasConsent(false);
    }
  }, []); // Rodar apenas uma vez na montagem

  return (
    <>
      {/*
        SOMENTE RENDERIZE OS SCRIPTS DO GOOGLE ANALYTICS SE hasConsent FOR TRUE
      */}
      {hasConsent && (
        <>
          <Script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-L7QMN988BD"
            strategy="afterInteractive" // Carrega o script após a hidratação da página
          />
          <Script
            id="google-analytics"
            strategy="afterInteractive" // Carrega o script após a hidratação da página
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-L7QMN988BD', {
                  page_path: window.location.pathname,
                });
              `,
            }}
          />
        </>
      )}

      <CookieConsent
        location="bottom"
        buttonText="Aceitar Cookies"
        declineButtonText="Recusar"
        enableDeclineButton
        cookieName="myWebsiteCookieConsent"
        style={{ background: "#353535", zIndex: 1000 }}
        buttonStyle={{ color: "#00000", fontSize: "14px", fontWeight: "bold", borderRadius: "5rem"}}
        declineButtonStyle={{ color: "#ffffff", fontSize: "14px", borderRadius: "5rem"}}
        expires={365}
        debug={false} // Mantenha como 'false' em produção
        onAccept={(acceptedByScrolling) => {
          if (!acceptedByScrolling) {
            setHasConsent(true); // Atualiza o estado para carregar o GA
          }
        }}
        onDecline={() => {
          console.log("Usuário recusou os cookies. GA não será carregado.");
          setHasConsent(false); // Atualiza o estado para garantir que o GA não seja carregado
          // Opcional: Se quiser desativar o GA se ele já estivesse ativo (improvável com esta lógica)
          // if (window.gtag) {
          //   window.gtag('consent', 'update', {
          //     'ad_storage': 'denied',
          //     'analytics_storage': 'denied'
          //   });
          // }
        }}
      >
        Este site utiliza cookies para garantir a melhor experiência de
        navegação. Ao continuar a navegar, você concorda com o uso de cookies.{" "}
        <a
          href="/privacidade"
          style={{ color: "#ff8400", textDecoration: "underline"}}
        >
          Leia a Política de Privacidade.
        </a>
      </CookieConsent>
    </>
  );
}
