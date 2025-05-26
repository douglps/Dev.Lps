// src/components/VoltarBotao.tsx
"use client"; // Isso marca o componente como um Componente de Cliente

import { useRouter } from 'next/navigation'; // Importe useRouter de 'next/navigation' para o App Router
import styled from 'styled-components';

// Aqui, você pode reutilizar os estilos do seu BotaoClassicoVd
// Ou, se os estilos forem específicos desse botão, defini-los aqui.
// Para manter a consistência, você pode copiar os estilos que definiu para BotaoClassicoVd
// em seu not-found.tsx ou em um arquivo de estilos compartilhado.

const BotaoClassicoVd = styled.button`
  background-color: ${(props) => props.theme.colors.botao};
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 600;
  border-radius: 3rem;
  transition: 0.15s ease-in-out;
  border: 0.2rem solid ${(props) => props.theme.colors.botaoHover};
  padding: 0.5rem 1.5rem;
  margin: 0 1rem;
  text-align: center;
  user-select: none;
  font-size: 1.6rem;
  margin-top: 2rem;

  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.botaoHover};
    color: black;
    box-shadow: ${(props) => props.theme.shadows.letrasShadow};
    transform: translate(-0.1rem, -0.1rem);
  }

  &:active {
    background: linear-gradient(var(--citado), #cf6b00);
    transform: translate(0rem, 0.1rem);
    box-shadow: 0rem 0.2rem 0.2rem 0.1rem var(--btn-shadow-active) !important;
    transition: 0.05s ease-in-out;
  }

  &:focus {
    outline: none;
    box-shadow: 0rem 0.5rem 0.5rem 0.1rem var(--btn-shadow-focus);
  }

  @media (max-width: 370px) {
    font-size: 1.4rem;
  }
`;


export function VoltarBotao() {
  const router = useRouter(); // Agora, useRouter pode ser usado aqui

  const handleGoBack = () => {
    router.back(); // Volta para a página anterior no histórico
  };

  return (
    <BotaoClassicoVd onClick={handleGoBack}>
      Voltar
    </BotaoClassicoVd>
  );
}