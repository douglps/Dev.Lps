"use client"; // Indica que este é um componente cliente

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "@/src/contexts/ThemeContext";

import darkModeTheme from "@/images/utils/dark_mode.svg";
import lightModeTheme from "@/images/utils/light-mode.svg";
import lightGithub from "@/images/utils/github-pr.svg";
import darkGithub from "@/images/utils/github-br.svg";
import darkCoffee from "@/images/utils/coffee-br.svg";
import lightCoffee from "@/images/utils/coffee-pr.svg";
import lightChat from "@/images/utils/chat-pr.svg";
import darkChat from "@/images/utils/chat-br.svg";
import upIcon from "@/images/utils/up.svg";

import useMenuIcon from "@/src/app/hooks/UseMenuIcon"; // Ajuste o alias e a extensão para .ts ou .tsx
import Modal from "@/src/components/ModalCta"; // Ajuste o alias
import { FormularioContato } from "@/src/components/FormularioContato"; // Ajuste o alias

import {
  Container,
  Aside,
  BotaoPlus,
  IconButton,
  TemaButton,
  IconCoffee,
} from "../styles/ControlStyled";

// Defina as dimensões padrão para os ícones, ajuste conforme o tamanho real dos seus SVGs
const ICON_SIZE = 32;
const ICON_PLUS = 40;

export function Control() {
  const { theme, toggleTheme } = useTheme(); // Usa o hook para acessar o tema e a função de alternar
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const menuIcon = useMenuIcon(isOpen, theme);

  const handleToggle = () => {
    toggleTheme(); // Chama a função do contexto
  };

  const handlePlusClick = () => {
    setIsOpen((prev) => !prev); // Use o estado anterior para garantir a atualização correta

    // Verifica se window está definido antes de disparar o evento
    if (typeof window !== "undefined") {
      const showHeaderEvent = new CustomEvent("showHeader");
      window.dispatchEvent(showHeaderEvent);
    }
  };

  const closeMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <Container>
      <Aside $isOpen={isOpen}>
        <BotaoPlus onClick={handlePlusClick} className="botao-plus">
          <Image
            src={menuIcon}
            alt={isOpen ? "Fechar opções" : "Mais opções"}
            title={isOpen ? "Fechar opções" : "Mais opções"}
            width={ICON_PLUS}
            height={ICON_PLUS}
          />
        </BotaoPlus>

        <TemaButton>
          <Image
            src={theme === "dark" ? darkModeTheme : lightModeTheme}
            alt="Alternar tema"
            title="Alternar tema"
            onClick={handleToggle}
            width={ICON_SIZE}
            height={ICON_SIZE}
          />
        </TemaButton>

        <IconButton>
          <a
            href="https://github.com/douglps"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={theme === "dark" ? darkGithub : lightGithub}
              alt="GitHub Douglps"
              title="GitHub Douglps"
              width={ICON_SIZE}
              height={ICON_SIZE}
            />
          </a>
        </IconButton>

        <IconButton>
          <Image
            src={theme === "dark" ? darkChat : lightChat}
            alt="Vamos Conversar"
            title="Vamos Conversar"
            onClick={() => setIsModalOpen(true)}
            width={ICON_SIZE}
            height={ICON_SIZE}
          />
        </IconButton>

        <IconCoffee>
          <Link href="/cafe" onClick={closeMenu}>
            <Image
              src={theme === "dark" ? darkCoffee : lightCoffee}
              alt="Contribua com um café"
              title="Contribua com um café"
              width={ICON_SIZE}
              height={ICON_SIZE}
            />
          </Link>
        </IconCoffee>
      </Aside>

      <div
        className="acima"
      >
        <Link href="#">
          <Image
            src={upIcon}
            alt="Topo da página"
            title="Topo da página"
            width={ICON_SIZE}
            height={ICON_SIZE}
          />
        </Link>
      </div>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <FormularioContato semMargin={true} />
        </Modal>
      )}
    </Container>
  );
}
