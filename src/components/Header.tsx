"use client";

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import styled, { css } from "styled-components"; // Importe 'css' para mixins

// Importe a imagem do logotipo
import logoImage from "@/images/logo_bgoff_pq.avif";

import { Audiowide } from "next/font/google";
import { Unbounded } from "next/font/google";
const audiowide = Audiowide({
  weight: ["400"],
  display: "swap",
  subsets: ["latin"],
});
const unbounded = Unbounded({
  weight: ["400", "600"],
  display: "swap",
  subsets: ["latin"],
});

// --- Componentes Estilizados ---

// Container principal do Header
const StyledHeaderContainer = styled.section`
  /* Estilos que pertencem ao container principal */
  position: fixed;
  display: flex;
  flex-direction: row;
  user-select: none;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 101;
  transition: transform 0.4s ease;
  will-change: transform;

  &.cabecalho--hidden {
    transform: translateY(-100%);
  }

  &.cabecalho--visible {
    transform: translateY(0);
  }
`;

// Navegação (o fundo com sombra e blur)
const StyledNavigation = styled.div`
  background-color: ${(props) =>
    props.theme.colors.background}; /* Acessando a cor do tema */
  box-shadow: ${(props) =>
    props.theme.shadows.fundoShadow}; /* Acessando a sombra do tema */
  backdrop-filter: ${(props) =>
    props.theme.filters.fundoBlur}; /* Acessando o blur do tema */
  display: flex;
  height: auto;
  justify-content: space-between;
  align-items: center;
  border-radius: 0 0 0.6rem 0.6rem;
  width: 100%;
  z-index: 1; /* Z-index menor que o do container do header */
`;

// Logo
const StyledLogoWrapper = styled.div`
  box-shadow: inset 0 0 9rem 30rem #00000080;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  will-change: filter;
  align-items: stretch;
  justify-content: center;
  padding: 0;
  margin: 0.5rem;
  z-index: 100;
  transition: 4s ease-in-out;
  display: flex;

  img {
    width: 5rem;
    height: 5rem;
    filter: hue-rotate(1340deg);
    transition: filter 0.4s ease-in-out;
  }

  &:hover {
    filter: drop-shadow(0 0 1.5rem #bac518) hue-rotate(750deg);
  }
`;

// identificador do logotipo
const Logo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  width: max-content;
  border-radius: 0.6rem;
  font-weight: 700;
  color: #fff; /* Ou variável CSS */
`;

// Estilos para o texto do logotipo
const DevLpsText = styled.div`
  & > a {
    text-decoration: none;
    font-family: ${audiowide.style.fontFamily};
    font-size: 2.5rem;
    margin-left: 0.5rem;
    letter-spacing: 0rem;
    color: ${(props) => props.theme.colors.letras};
  }

  @media (max-width: 480px) {
    display: none;
  }
`;

// Ícone Hambúrguer
const StyledHamburgerIcon = styled.div<{ $isActive: boolean }>`
  display: none;
  cursor: pointer;
  z-index: 1000;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 1.5rem;

  @media (max-width: 920px) {
    display: block;
  }

  .bar {
    display: block;
    width: 3.5rem;
    height: 0.5rem;
    margin: 5px auto;
    border-radius: 1rem;
    background-color: ${(props) => props.theme.colors.letras};
    transition: all 0.3s ease-in-out;
  }

  ${(props) =>
    props.$isActive &&
    css`
      .bar:nth-child(1) {
        transform: translateY(10px) rotate(45deg);
      }
      .bar:nth-child(2) {
        opacity: 0;
      }
      .bar:nth-child(3) {
        transform: translateY(-10px) rotate(-45deg);
      }
    `}
`;

// Menu de Navegação
const StyledMenu = styled.div<{ $isMobile: boolean; $isOpen: boolean }>`
  position: absolute;
  background-color: ${(props) => props.theme.colors.background2};
  border-radius: 5rem;
  border: 0.1rem solid rgba(255, 255, 255, 0.15);
  left: 50%;
  transform: translateX(-50%);
  z-index: 999;

  ${(props) =>
    props.$isMobile &&
    css`
      top: calc(100%); // abaixo do hambúrguer
      width: max-content;
      padding: 0rem 2rem;
      border-radius: 0 0 1rem 1rem;
      flex-direction: column;
      align-items: center;
      height: 0;
      overflow: hidden;
      opacity: 0;
      transition: height 0.3s ease, opacity 0.3s ease;
      box-shadow: ${(props) => props.theme.shadows.fundoMenu};
      display: ${props.$isOpen ? "flex" : "none"};
      opacity: ${props.$isOpen ? 1 : 0};
      height: ${props.$isOpen ? "auto" : "0"};
    `}

  ${(props) =>
    !props.$isMobile &&
    css`
      display: flex;
      align-items: center;
      height: 75%;
    `}
`;

// Lista de itens do menu
const StyledMenuUp = styled.ul`
  list-style: none;
  padding: 0.2rem 2rem;
  height: auto;
  align-items: center;
  margin: 0;
  display: flex;
  gap: 2rem;

  @media (max-width: 620px) {
    flex-direction: column;
    text-align: center;
    padding: 20px 0;
    gap: 0.5rem
  }

  li {
    margin: 0;
  }

  a {
  font-size: 1.4rem;
  font-weight: 600;
  white-space: nowrap;
  font-family: ${unbounded.style.fontFamily};
  position: relative;
  text-decoration: underline;
  text-decoration-color: var(--cor-roxa-secundaria);
  text-decoration-thickness: 0.1rem;
  text-underline-offset: 0.6rem;
  color: ${(props) => props.theme.colors.linkMenu};
  height: 4rem;
  align-items: center;
  padding: 0 1rem;
  display: flex;
  flex-wrap: nowrap;
  border-radius: 6rem;
  overflow: hidden;
  transition: all 0.3s ease-in;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    width: 1rem;
    height: 1rem;
    background-color:rgba(0, 241, 64, 0.41);
    border-radius: 50%;
    transform: translate(-50%, -50%) scale(0);
    opacity: 0.5;
    z-index: 0;
    transition: transform 0.8s ease-out, opacity 0.6s ease-out;
  }

  &:hover::before {
    transform: translate(-50%, -50%) scale(15); // Escala alta para garantir cobertura
    opacity: 0;
  }

  &:hover {
  transform: scale(0.95);
    text-decoration: none;
  }

  span {
    position: relative;
    z-index: -1;
  }
}

  }
`;

export function Header() {
  const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
  const [lastScrollY, setLastScrollY] = useState(0);

  const [windowWidth, setWindowWidth] = useState(0);
  const MOBILE_BREAKPOINT = 920;

  useEffect(() => {
    // Inicializa windowWidth no cliente
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  const handleResize = useCallback(() => {
    if (typeof window !== "undefined") {
      setWindowWidth(window.innerWidth);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
    }
    return () => {
      if (typeof window !== "undefined") {
        window.removeEventListener("resize", handleResize);
      }
    };
  }, [handleResize]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScrollCloseMenu = () => {
      if (windowWidth <= MOBILE_BREAKPOINT && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScrollCloseMenu);

    return () => {
      window.removeEventListener("scroll", handleScrollCloseMenu);
    };
  }, [windowWidth, isMenuOpen]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleScrollDirection = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScrollDirection);

    return () => {
      window.removeEventListener("scroll", handleScrollDirection);
    };
  }, [lastScrollY]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleShowHeader = () => {
      setScrollDirection("up");
    };

    window.addEventListener("showHeader", handleShowHeader);
    return () => {
      window.removeEventListener("showHeader", handleShowHeader);
    };
  }, []);

  const isMobile = windowWidth <= MOBILE_BREAKPOINT;
  return (
    <StyledHeaderContainer
      className={`header ${
        scrollDirection === "down" && !isMenuOpen
          ? "cabecalho--hidden"
          : "cabecalho--visible"
      }`}
    >
      <StyledNavigation>
        <Logo>
          <StyledLogoWrapper>
            <Link href="/" onClick={closeMenu}>
              <Image src={logoImage} alt="Logotipo" />
            </Link>
          </StyledLogoWrapper>
          <DevLpsText>
            <Link href="/">Dev.Lps</Link>
          </DevLpsText>
        </Logo>

        {isMobile && (
          <StyledHamburgerIcon
            $isActive={isMenuOpen} // Passando prop para o styled-component
            onClick={toggleMenu}
            aria-controls="mobile-menu"
            aria-expanded={isMenuOpen}
            aria-label="Abrir/Fechar Menu de Navegação"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </StyledHamburgerIcon>
        )}

        {(isMobile && isMenuOpen) || !isMobile ? (
          <StyledMenu $isMobile={isMobile} $isOpen={isMenuOpen}>
            <nav>
              <StyledMenuUp>
                <li>
                  <Link href="/" onClick={closeMenu}>
                    {" "}
                    {/* Exemplo de link para âncora */}
                    Sobre Mim
                  </Link>
                </li>
                <li>
                  <Link href="/portifolio" onClick={closeMenu}>
                    Portifólio
                  </Link>
                </li>
                {/*
                <li>
                  <Link href="/lab" onClick={closeMenu}>
                    LAB
                  </Link>
                </li>
                */}
                <li>
                  <Link href="/contato" onClick={closeMenu}>
                    Contato
                  </Link>
                </li>
              </StyledMenuUp>
            </nav>
          </StyledMenu>
        ) : null}
      </StyledNavigation>
    </StyledHeaderContainer>
  );
}
