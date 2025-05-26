"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Scrollbar, A11y } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";

// Importe todos os ícones de skills individualmente
// Certifique-se de que os caminhos e extensões estão corretos
import html5Icon from "@/images/skills/html5.svg";
import cssIcon from "@/images/skills/css.svg";
import javascriptIcon from "@/images/skills/javascript.svg";
import reactIcon from "@/images/skills/react.svg";
import tailwindIcon from "@/images/skills/tailwind.svg";
import bootstrapIcon from "@/images/skills/bootstrap.svg";
import pythonIcon from "@/images/skills/python.svg";
import typeIcon from "@/images/skills/typescript.svg";
import nodejsIcon from "@/images/skills/nodejs.svg";
import nextjsIcon from "@/images/skills/nextjs-br.svg";
import jsonIcon from "@/images/skills/json.svg";
import figmaIcon from "@/images/skills/figma.svg";
import canvaIcon from "@/images/skills/canva.svg";
import kritaIcon from "@/images/skills/krita.svg";
import gitIcon from "@/images/skills/git.svg";
import githubIcon from "@/images/skills/github.svg";
import windowsIcon from "@/images/skills/windows.svg";
import npmIcon from "@/images/skills/npm.svg";
import viteIcon from "@/images/skills/vite.svg";
import firebaseIcon from "@/images/skills/firebase.avif";

// Importe os componentes estilizados
import {
  SkillsSection,
  AbasMore,
  AbasContainer,
  Citacao,
  SkillsSwiperContainer,
  SkillCardContent,
  SkillIconAnimatedBackground,
  SkillIconBackground,
  SkillWrapper,
  SkillName,
} from "@/src/styles/SkillsStyled";

const SKILL_ICON_WIDTH = 64;
const SKILL_ICON_HEIGHT = 64;

interface Skill {
  src: string;
  alt: string;
  name: string;
}

export function Skills() {
  const [openDiv, setOpenDiv] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  const handleButtonClick = (divName: number) => {
    setOpenDiv(openDiv === divName ? null : divName);
  };

  const abasTextContent = {
    1: { long: "BACK-END", short: "BACK" },
    2: { long: "FRONT-END", short: "FRONT" },
    3: { long: "UI/UX - DESIGN", short: "DESIGN" },
    4: { long: "FERRAMENTAS", short: "FERRAM." },
  };

  const isSmallScreen = windowWidth <= 710;

  const skills: Skill[] = [
    { src: html5Icon.src, alt: "HTML 5", name: "HTML 5" },
    { src: cssIcon.src, alt: "CSS 3", name: "CSS 3" },
    { src: javascriptIcon.src, alt: "JavaScript", name: "JavaScript" },
    { src: reactIcon.src, alt: "React", name: "React" },
    { src: tailwindIcon.src, alt: "Tailwind CSS", name: "Tailwind CSS" },
    { src: bootstrapIcon.src, alt: "Bootstrap", name: "Bootstrap" },
    { src: pythonIcon.src, alt: "Python", name: "Python" },
    { src: typeIcon.src, alt: "TypeScript", name: "TypeScript" },
    { src: nodejsIcon.src, alt: "Node.Js", name: "Node.Js" },
    { src: nextjsIcon.src, alt: "Next.Js", name: "Next.Js" },
    { src: jsonIcon.src, alt: "JSON", name: "JSON" },
    { src: figmaIcon.src, alt: "Figma", name: "Figma" },
    { src: canvaIcon.src, alt: "Canva", name: "Canva" },
    { src: kritaIcon.src, alt: "Krita", name: "Krita" },
    { src: gitIcon.src, alt: "Git", name: "Git" },
    { src: githubIcon.src, alt: "GitHub", name: "GitHub" },
    { src: windowsIcon.src, alt: "Windows", name: "Windows" },
    { src: npmIcon.src, alt: "npm", name: "npm" },
    { src: viteIcon.src, alt: "Vite", name: "Vite" },
    { src: firebaseIcon.src, alt: "Firebase", name: "Firebase" },
  ];

  return (
    <SkillsSection id="Skills">
      <AbasContainer>
        <div
          className={openDiv === 1 ? "is-active" : ""}
          onClick={() => handleButtonClick(1)}
        >
          {isSmallScreen ? abasTextContent[1].short : abasTextContent[1].long}
        </div>
        <div
          className={openDiv === 2 ? "is-active" : ""}
          onClick={() => handleButtonClick(2)}
        >
          {isSmallScreen ? abasTextContent[2].short : abasTextContent[2].long}
        </div>
        <div
          className={openDiv === 3 ? "is-active" : ""}
          onClick={() => handleButtonClick(3)}
        >
          {isSmallScreen ? abasTextContent[3].short : abasTextContent[3].long}
        </div>
        <div
          className={openDiv === 4 ? "is-active" : ""}
          onClick={() => handleButtonClick(4)}
        >
          {isSmallScreen ? abasTextContent[4].short : abasTextContent[4].long}
        </div>
      </AbasContainer>

      <AbasMore $isOpen={openDiv === 1}>
        <p>
          Aqui reside a inteligência e a estrutura que opera nos bastidores. É o
          motor que processa dados, gerencia informações e garante que tudo
          funcione de forma segura e confiável. A essência de todo o
          funcionamento de qualquer aplicação está no Back-End.{" "}
        </p>
        <Citacao>
          &quot;A arte de programar consiste em organizar e dominar a
          complexidade.&quot;
          <br /> -Edsger W. Dijkstra
        </Citacao>
      </AbasMore>

      <AbasMore $isOpen={openDiv === 2}>
        <p>
          É a camada que ganha vida nos navegadores, a interface onde todos
          usuários, assim como você neste momento, se conectam diretamente com o
          conteúdo. O Front-End é incrivelmente a vitrine, o ambiente e o elo de
          toda a interação do site com o utilizador.
        </p>
        <Citacao>
          &quot;Você nunca terá uma segunda chance de causar uma primeira
          impressão forte.&quot;
          <br />- Will Rogers
        </Citacao>
      </AbasMore>

      <AbasMore $isOpen={openDiv === 3}>
        <p>
          Da prancheta digital à implementação final, esta área é sobre a
          harmonia entre estética, usabilidade e a identidade da sua marca. a UI
          (<i>User Interface</i>) e a UX (<i>User Experience</i>) sintetizam a
          percepção do usuário no front-end junto a inteligência do back-end
          para proporcionar experiências agradáveis.
        </p>
        <Citacao>
          &quot;Design não é apenas o que parece e o que se sente. Design é como
          funciona.&quot;
          <br />
          -Steve Jobs
        </Citacao>
      </AbasMore>

      <AbasMore $isOpen={openDiv === 4}>
        <p>
          Construir projetos digitais exige mais do que apenas linguagens de
          programação. O uso estratégico destas ferramentas não é opcional; são
          requisitos fundamentais que garantem a construção sólida, a manutenção
          eficiente, o controle e a organização impecável dos projetos desde o
          primeiro clique até a entrega e além.
        </p>
        <Citacao>
          &quot;A estratégia sem tática é o caminho mais lento para a vitória.
          Tática sem estratégia é o ruído antes da derrota.&quot;
          <br />- Sun Tzu
        </Citacao>
      </AbasMore>

      <SkillsSwiperContainer>
        <Swiper
          modules={[Autoplay, Navigation, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={6}
          navigation
          scrollbar={{ draggable: true }}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: true }}
          className="skills-swiper"
          breakpoints={{
            300: {
              slidesPerView: 3,
              spaceBetween: 80,
            },
            481: {
              slidesPerView: 4,
              spaceBetween: 120,
            },
            768: {
              slidesPerView: 6,
              spaceBetween: 80,
            },
            1024: {
              slidesPerView: 8,
              spaceBetween: 60,
            },
          }}
        >
          {skills.map((skill, index) => (
            <SwiperSlide key={index}>
              <SkillCardContent>
                {" "}
                {/* Componente para .skills__container--content */}
                <SkillWrapper>
                  {" "}
                  {/* Componente para .skill */}
                  <SkillIconAnimatedBackground>
                    <SkillIconBackground>
                      <Image
                        className="skills-icon" // Se houver estilos específicos para a imagem dentro do background
                        src={skill.src}
                        alt={skill.alt}
                        width={SKILL_ICON_WIDTH}
                        height={SKILL_ICON_HEIGHT}
                        loading="lazy"
                      />
                    </SkillIconBackground>
                  </SkillIconAnimatedBackground>
                  <SkillName>{skill.name}</SkillName>{" "}
                  {/* Componente para .skill--nome */}
                </SkillWrapper>
              </SkillCardContent>
            </SwiperSlide>
          ))}
        </Swiper>
      </SkillsSwiperContainer>
    </SkillsSection>
  );
}
