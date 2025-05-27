// components/Footer/index.tsx
"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

import { EmailPopup } from "@/src/components/EmailPopup"; // Ajuste o alias
import {
  FooterSection,
  RodapeContainer,
  SocialContainer,
  SocialsLink,
  ImgFooter,
  LinkPrivacidade,
  Version,
  Copyright,
  StyledLink,
} from "@/src/styles/FooterStyled"; // Importe os componentes estilizados

import emailIconDark from "@/images/socials/email-br.svg";
import emailIconLight from "@/images/socials/email-pr.svg";
import githubIconDark from "@/images/utils/github-br.svg";
import githubIconLight from "@/images/utils/github-pr.svg";
import spotifyIcon from "@/images/utils/spotify.svg";

export function Footer() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentTheme = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
      setTheme(currentTheme);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new MutationObserver(() => {
      const updatedTheme = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
      setTheme(updatedTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <FooterSection>
      <RodapeContainer>
        <SocialContainer>
          <EmailPopup
            icon={theme === "dark" ? emailIconDark : emailIconLight}
            tipo="footer"
          />

          <SocialsLink>
            <StyledLink
              href="https://github.com/douglps"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImgFooter>
                <Image
                  src={theme === "dark" ? githubIconDark : githubIconLight}
                  alt="GitHub Profile DougLps"
                  width={24}
                  height={24}
                />
              </ImgFooter>
              GitHub
            </StyledLink>
          </SocialsLink>

          <SocialsLink>
            <StyledLink
              href="https://open.spotify.com/playlist/1UTHJKc5Ng3XdPD69vy5UD?si=l5uilHM5QmilTjDgVlgpJQ"
              target="_blank"
              rel="noopener noreferrer"
            >
              <ImgFooter>
                <Image
                  src={spotifyIcon}
                  alt="Playlist Spotify"
                  width={24}
                  height={24}
                />
              </ImgFooter>
              Spotify
            </StyledLink>
          </SocialsLink>
        </SocialContainer>

        <Copyright>
          <div>
            <p>
              Todos os direitos reservados. © {new Date().getFullYear()} -
              Douglas Lopes
            </p>
          </div>

          <LinkPrivacidade>
            <Link href="/privacidade">Política de Privacidade</Link>
            <Link href="/termos">Termos de Uso</Link>
          </LinkPrivacidade>
          <Version>V.2.10.4</Version>
        </Copyright>
      </RodapeContainer>
    </FooterSection>
  );
}
