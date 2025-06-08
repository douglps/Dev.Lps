// src/components/ControlStyled.ts
import styled, { css, keyframes } from "styled-components";

export const Container = styled.div`
  .acima {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #ffffff;
    position: fixed;
    width: 3rem;
    height: 3rem;
    bottom: -2rem;
    right: 12rem;
    margin: 1rem;
    z-index: 999;
    border-radius: 0.4rem;
  }
`;

export const Aside = styled.div<{ $isOpen: boolean }>`
  position: fixed;
  right: 0rem;
  top: -1rem;
  display: flex;
  flex-direction: column;
  width: 5rem;
  height: auto;
  align-items: flex-end;
  gap: 2rem;
  padding: 1.5rem 0;
  z-index: 500;

  // Estado inicial (menu fechado)
  > div:not(.botao-plus) {
    opacity: 0;
    transform: translateX(50px);
    transition: opacity 0.3s ease-out, transform 0.3s ease-out;
  }

  // Quando menu aberto
  ${({ $isOpen }) =>
    $isOpen &&
    css`
      > div:not(.botao-plus) {
        opacity: 1;
        transform: translateX(0rem);

        &:nth-child(2) {
          transition-delay: 0.1s;
        }
        &:nth-child(3) {
          transition-delay: 0.3s;
        }
        &:nth-child(4) {
          transition-delay: 0.5s;
        }
        &:nth-child(5) {
          transition-delay: 0.7s;
        }
      }
    `}
`;

const iconHover = css`
  &:hover {
    transform: scale(1.2);
    cursor: pointer;
  }

  &:active {
    background-color: var(--green-primary, #00aa55);
  }
`;

export const BotaoPlus = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  align-self: flex-start;
  border-radius: 5rem 0 0 5rem;
  width: 10rem;
  height: 5rem;
  padding-left: 0.5rem;
  box-shadow: inset 0 0 9rem 30rem #00000080;

  img {
    background-color: ${props => props.theme.colors.letrasSkills};
    border-radius: 50%;
    width: 3.6rem;
    transition: all 0.2s ease-in-out;

    &:hover {
      transform: scale(1.3);
    }

    &:active {
      background-color: #00994d;
      transform: scale(1.2);
    }
  }
`;

export const IconButton = styled.div`
  display: flex;
  box-shadow: inset 0 0 9rem 30rem #00000080;
  height: 4rem;
  width: 4rem;
  align-items: center;
  justify-content: center;
  border-radius: 50% 0 0 50%;
  transform: translateX(1rem);
  
  
  img {
    background-color: ${props => props.theme.colors.letrasSkills};
    border-radius: 50%;
    padding: 0.3rem;
    transition: transform 0.5s ease-in-out;
    ${iconHover}
  }
  a {
    display: flex;
  }
`;

const ripple = keyframes`
  0% {
    transform: scale(1);
    opacity: 0.7;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
`;

const shake = keyframes`
  0%, 100% {
    transform: translateX(0rem) rotate(0deg);
  }
  20% {
    transform: translateX(0rem) rotate(-10deg);
  }
  40% {
    transform: translateX(0rem) rotate(10deg);
  }
  60% {
    transform: translateX(0rem) rotate(-6deg);
  }
  80% {
    transform: translateX(0rem) rotate(6deg);
  }
`;

export const IconCoffee = styled.div`
  position: relative;
  display: flex;
  box-shadow: inset 0 0 9rem 30rem #00000080;
  height: 4rem;
  width: 4rem;
  align-items: center;
  justify-content: center;
  border-radius: 50% 0 0 50%;
  transform: translateX(1rem);
  overflow: hidden;
  cursor: pointer;

 

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #11f041;
    animation: ${ripple} 2s infinite;
    pointer-events: none;
  }

  img {
    background-color: ${props => props.theme.colors.letrasSkills};
    border-radius: 50%;
    padding: 0.3rem;
    transition: transform 0.5s ease-in-out;
    z-index: 1;
     &:hover {
    animation: ${shake} 0.6s;
  }
  }

  a {
    display: flex;
    z-index: 1;
  }
`;

export const TemaButton = styled(IconButton)`
  img {
    transition: transform 3s ease-in-out;

    &:hover {
      transform: rotate(720deg) scale(1.2);
    }
  }
`;
