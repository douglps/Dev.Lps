"use client";

import React from "react"; // Removido useState e useEffect
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "@/src/contexts/ThemeContext";

// Importe os componentes estilizados
import {
  MeuPortfolioContainer,
  ContainerWrapper,
  PortfolioSection,
  Overlay,
  GridContainer,
} from "../styles/PortifolioStyled";

// Importe as imagens
import thumbPortfolioImage from "@/images/use/thumb-portfolio.avif";
import html5Icon from "@/images/skills/html5.svg";
import cssIcon from "@/images/skills/css.svg";
import sassIcon from "@/images/skills/sass.svg";
import javascriptIcon from "@/images/skills/javascript.svg";
import typescriptIcon from "@/images/skills/typescript.svg";
import reactIcon from "@/images/skills/react.svg";
import gitIcon from "@/images/skills/git.svg";
import windowsIcon from "@/images/skills/windows.svg";
import vscodeIcon from "@/images/skills/vs-code.svg";
import vercelIconDark from "@/images/skills/vercel-br.svg";
import vercelIconLight from "@/images/skills/vercel-pr.svg";

export function MeuPortfolio() {
  const { theme } = useTheme();

  return (
    <PortfolioSection id="Portifolio">
      <MeuPortfolioContainer>Portifólio</MeuPortfolioContainer>
      <ContainerWrapper>
        <Overlay />
        <GridContainer>
          <div className="grid--portfolio">
            <div className="portfolio--img">
              <Link href="/">
                <Image
                  src={thumbPortfolioImage}
                  alt="Miniatura de Dev.Lps"
                  width={700}
                  height={400}
                />
              </Link>
            </div>
            <div className="portfolio--texto">
              <p className="portfolio--titulo">Dev.Lps</p>
              <p>
                De layout simples a portfólio completo. O Dev.Lps começou como
                um pequeno projeto de layout para testar ideias de design. Com o
                tempo, fui aprimorando a estrutura, aplicando boas práticas de
                UI/UX e incluindo recursos modernos. O que era apenas um
                experimento acabou se tornando meu portfólio principal —
                funcional, responsivo e alinhado com meu estilo profissional.
              </p>
              <div className="container__skills">
                <div className="cabecalho__skills">
                  Principais Tecnologias Utilizadas:
                </div>
                <div className="grid__portfolio--skills">
                  <div className="skill-portfolio">
                    <Image src={html5Icon} alt="HTML5" width={48} height={48} />
                  </div>
                  <div className="skill-portfolio">
                    <Image src={cssIcon} alt="CSS" width={48} height={48} />
                  </div>
                  <div className="skill-portfolio">
                    <Image src={sassIcon} alt="SASS" width={48} height={48} />
                  </div>
                  <div className="skill-portfolio">
                    <Image
                      src={javascriptIcon}
                      alt="JavaScript"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="skill-portfolio">
                    <Image
                      src={typescriptIcon}
                      alt="TypeScript"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="skill-portfolio">
                    <Image src={reactIcon} alt="React" width={48} height={48} />
                  </div>
                  <div className="skill-portfolio">
                    <Image src={gitIcon} alt="Git" width={48} height={48} />
                  </div>
                  <div className="skill-portfolio">
                    <Image
                      src={windowsIcon}
                      alt="Windows"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="skill-portfolio">
                    <Image
                      src={vscodeIcon}
                      alt="Visual Studio Code"
                      width={48}
                      height={48}
                    />
                  </div>
                  <div className="skill-portfolio">
                    <Image
                      src={theme === "dark" ? vercelIconDark : vercelIconLight}
                      alt="Vercel Hospedagem"
                      width={48}
                      height={48}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </GridContainer>
      </ContainerWrapper>
    </PortfolioSection>
  );
}
