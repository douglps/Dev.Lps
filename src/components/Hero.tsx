"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Importe os componentes estilizados
import {
  Dobra,
  MeContainer,
  DevTitle,
  MaiorQue,
  HeroSection,
  HeroContentContainer,
  HighlightText,
  HeroContainer2,
  HeroTextContainer,
} from "../styles/HeroStyled"; // Ajuste o caminho conforme onde você salvou HeroStyles.ts/js

// Importe as imagens
import avatarImage from "@/images/use/avatar.avif";
import codeImage from "@/images/use/code-3maior-que.avif";

// Defina as dimensões das imagens. É CRUCIAL que você defina a largura e altura reais!
const AVATAR_WIDTH = 200; // Exemplo: ajuste para a largura real do avatar
const AVATAR_HEIGHT = 200; // Exemplo: ajuste para a altura real do avatar
const CODE_IMAGE_WIDTH = 100; // Exemplo: ajuste para a largura real da imagem de código
const CODE_IMAGE_HEIGHT = 100; // Exemplo: ajuste para a altura real da imagem de código

export function Hero() {
  return (
    <HeroSection id="SobreMim">
      <HeroContentContainer>
        <Dobra />
        <MeContainer>
          <div className="me__container--foto">
            {" "}
            {/* Mantendo a classe para o seletor aninhado */}
            <h1>Douglas Lopes</h1>
            <Image
              src={avatarImage}
              alt="Avatar de Douglas Lopes"
              width={AVATAR_WIDTH}
              height={AVATAR_HEIGHT}
              priority
            />
            <MaiorQue>
              <Image
                src={codeImage}
                alt="Símbolo de maior que, representando código"
                width={CODE_IMAGE_WIDTH}
                height={CODE_IMAGE_HEIGHT}
                priority
              />
            </MaiorQue>
          </div>
          <DevTitle>
            <h2>Desenvolvedor Front-End</h2>
          </DevTitle>
        </MeContainer>
        <HeroContainer2>
          {" "}
          {/* Componente estilizado para o antigo hero__container2 */}
          <HeroTextContainer>
            Sou{" "}
            <HighlightText>
              Desenvolvedor Full-Stack com foco em criar experiências Front-End
            </HighlightText>{" "}
            que unem lógica e beleza.
            <p>
              <HighlightText>
                Cada projeto é um convite à expressão
              </HighlightText>{" "}
              - onde a estética encontra a estrutura, e a interação ganha alma.
              Cores, formas, emoções e intenções se traduzem em telas que
              respondem, comunicam e provocam. Este é o espaço onde o código se
              transforma em sensação.{" "}
              <HighlightText>
                Continue e descubra até onde podemos ir.
              </HighlightText>
            </p>
          </HeroTextContainer>
        </HeroContainer2>
      </HeroContentContainer>
    </HeroSection>
  );
}
