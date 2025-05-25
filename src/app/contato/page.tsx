"use client";

import React from "react";

import { useTheme } from "@/src/contexts/ThemeContext";

import { FormularioContato } from "@/src/components/FormularioContato";
import { EmailPopup } from "@/src/components/EmailPopup";

// Importar TODOS os Styled Components do arquivo de estilos centralizado
import {
  StyledContatoSection,
  StyledContatar,
  StyledMsgContato,
  StyledContateMe,
  StyledVias,
  StyledViasContato,
  StyledSocialsContato,
  StyledMaps, // Agora está incluído!
} from "@/src/styles/ContatoStyled"; // Verifique o caminho real da importação

import whatsappIcon from "@/images/socials/whatsapp.svg";
import emailIconDark from "@/images/socials/email-pr.svg";
import emailIconLight from "@/images/socials/email-br.svg";

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
};

export default function ContatoInfo() {
  const { theme } = useTheme();

  return (
    <StyledContatoSection>
      <StyledContatar>
        <StyledMsgContato>
          <p>Deixe seu recado aqui!</p>
          <p>Seu retorno chegará em seguida.</p>
          <FormularioContato />
        </StyledMsgContato>
      </StyledContatar>

      <StyledContateMe>
        <StyledVias>
          <StyledViasContato>
            <a
              href="https://wa.me/5551935050865?text=Olá,%20quero%20saber%20mais%20sobre%20seus%20serviços"
              target="_blank"
              rel="noopener noreferrer"
            >
              <StyledSocialsContato
                src={whatsappIcon}
                alt="WhatsApp"
                title="WhatsApp"
                width={32}
                height={32}
              />
            </a>
          </StyledViasContato>

          <EmailPopup
            icon={theme === "dark" ? emailIconDark : emailIconLight}
            tipo="contato"
          />
        </StyledVias>

        <StyledMaps>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220896.07344905447!2d-51.34195636499523!3d-30.10847014460951!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95199cd2566acb1d%3A0x603111a89f87e91f!2sPorto%20Alegre%2C%20RS!5e0!3m2!1spt-BR!2sbr!4v1746813056626!5m2!1spt-BR!2sbr"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </StyledMaps>
      </StyledContateMe>
    </StyledContatoSection>
  );
}
