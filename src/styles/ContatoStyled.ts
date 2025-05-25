// src/components/ContatoStyled.ts (ou src/styles/ContatoStyled.ts)
import styled, { css, keyframes } from "styled-components";
import Image from "next/image"; // Importar Image para StyledSocialsContato e StyledCopyIcon

// --- Animações ---
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

const fadeInMessage = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// Mixin de exemplo (adaptado para ter algum estilo)
const FundoTransparenteBr = css`
  background-color: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(5px);
  border-radius: 8px;
`;

// --- Styled Components da Seção de Contato (Movidos e Exportados) ---
export const StyledContatoSection = styled.section`
  display: grid;
  grid-template-columns: 1fr 0.4fr;
  justify-content: center;
  align-items: end;
  margin-top: 6.5rem;
  width: 90%;
  gap: 2rem;
  @media (max-width: 800px) {
    display: block;
  }
`;

export const StyledContatar = styled.div`
  width: 100%;
  height: auto;
  overflow: hidden;
  position: relative;
  background-size: cover;

  @media (max-width: 768px) {
    width: 100%; /* Ajuste para responsividade */
    height: auto; /* Altura menor em telas menores */
  }
`;

export const StyledMsgContato = styled.div`
  box-shadow: ${(props) => props.theme.shadows.fundoShadow};
  backdrop-filter: ${(props) => props.theme.filters.fundoBlur};
  transition: box-shadow 0.5s ease, backdrop-filter 0.5s ease;

  p:nth-child(odd) {
    color: ${(props) => props.theme.colors.citado};
    text-indent: 3rem;
    font-size: 1.6rem;
    font-weight: 600;
  }
  p:nth-child(even) {
    color: ${(props) => props.theme.colors.letras};
    text-indent: 3rem;
    margin-bottom: 1rem;
  }
`;

export const StyledContateMe = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-wrap: wrap;
  margin-top: 5rem;
  align-items: center;
  justify-content: flex-start;
`;

export const StyledVias = styled.div`
  display: flex;
  align-items: center;
  border-radius: 2rem 2rem 0 0;
  padding-bottom: 0.7rem;
  background-color: ${(props) => props.theme.colors.background2 || "#fff"};
  width: 100%;
  justify-content: space-evenly;
  transition: background-color 0.5s ease;
`;

export const StyledViasContato = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.background};
  width: 5.5rem;
  height: 5.5rem;
  border-radius: 50%;
  transition: background-color 0.5s ease;
  margin-top: 0.5rem;
`;

// Usando o componente Image do Next.js para otimização de imagens
export const StyledSocialsContato = styled(Image)`
  width: 100%;
  height: 100%;
  padding: 1.2rem;
  border-radius: 0.5rem;
  cursor: pointer;
`;

export const StyledMaps = styled.div`
  display: flex;
  width: 100%;
  height: auto;

  iframe {
    width: 100%; /* Considere tornar responsivo com 100% ou max-width */
    height: 400px;
    /* Adicione transições se as propriedades do iframe mudarem com o tema */
  }
`;

// --- Styled Components do Formulário de Contato ---

export const StyledDivForm = styled.div`
  margin: 2rem;
`;

export const StyledContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  min-width: 22rem;
  color: ${(props) => props.theme.colors.letras};
`;

export const StyledInfoForm = styled.div<{ $noMargin?: boolean }>`
  display: flex;
  font-size: 1.4rem;
  justify-content: flex-end;
  padding: 0.5rem 1rem 0.5rem 0;
  width: 100%;
  background-color: ${(props) => props.theme.colors.background2};
  color: ${(props) => props.theme.colors.letrasSkills};
  transition: background-color 0.5s ease, color 0.5s ease;

  ${(props) =>
    props.$noMargin &&
    css`
      margin-top: 0 !important;
    `}
`;

export const StyledFormContato = styled.form`
  display: grid;
  grid-template-columns: 0.5fr 1.5fr;
  justify-items: flex-start;
  padding: 2rem;
  height: auto;
  width: 100%;
  row-gap: 1rem;
  column-gap: 1rem;
  border-radius: 0 0 1rem 1rem;
  border: 1px solid #4CAF50;
  position: relative;
  overflow: hidden;

  background: radial-gradient(
    800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(2, 109, 109, 0.3),
    transparent 30%
  );
  transition: background 0.3s ease, filter 0.3s ease;

  &:hover {
    filter: brightness(1.2);
  }

  label {
    display: flex;
    justify-content: flex-end;
    @media (max-width: 700px) {
      justify-content: flex-start;
    }
  }

  & > div {
    width: 100%;
  }

  .input-form {
    display: contents;
  }

  input.input-default,
  textarea.input-default {
    font-weight: 700;
    box-shadow: ${(props) => props.theme.shadows.fundoShadow};
    color: black;
    padding: 0.75rem 1rem;
    font-size: 1.4rem;
    border: 0.1rem solid #00ff80;
    border-radius: 0.5rem;
    width: 100%;
    transition: all 0.3s ease-in-out;

    &:focus {
      outline: none;
      border-color: #00e676;
      box-shadow: 0 0 0 0.2rem rgba(0, 230, 118, 0.25);
    }
  }

  input.input-error,
  textarea.input-error {
    border: 1px solid red;
  }

  input:disabled {
    background-color:#e9e9e921;
    border-color: #cccccc17;
    color:  #d6d6d6;
  }

  input.input-valid,
  textarea.input-valid {
    border: 0.1rem solid #00ff80;
    background-image: url("/images/utils/checked.svg"); /* Verifique o caminho real da imagem */
    background-repeat: no-repeat;
    background-position: right 8px center;
    background-size: 16px 16px;
    padding-right: 30px;
  }

  .error-message {
    width: 100%;
    white-space: normal;
    word-wrap: break-word;
    font-size: 1.4rem;
    font-weight: 600;
    padding: 0.2rem 2rem;
    color: red;
    margin-top: 0.5rem;
    text-align: right;
    grid-column: 1 / -1;
    ${FundoTransparenteBr};
  }

  textarea.mensagem {
    resize: vertical;
    grid-column: 1 / span 2;
    height: 10rem;
  }

  .info-msg {
    width: 100%;
    grid-column: 1 / span 2;
    text-align: right;
    font-size: 1.2rem;
    color: ${(props) => props.theme.colors.letras};
  }

  & > div:nth-child(odd) {
    grid-column: 1;
    align-self: center;
  }

  & > div:nth-child(even) {
    grid-column: 2;
  }

  .client-contact {
    max-width: 28rem;
    input {
      width: 100%;
    }
  }

  .enviar {
    display: flex;
    width: 100%;
    justify-content: center;
    grid-column: 1 / -1;
  }

  .btn-enviar {
    width: 100%;
    border-radius: 5rem;
    font-size: 1.4rem;
    font-weight: 600;
    border: 0.1rem solid #00e676;
    background-color: #00c853;
    color: ${(props) => props.theme.colors.letras};
    padding: 0.2rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      background-color: #00a041;
      color: #fff;
      cursor: pointer;
      box-shadow: 0.1rem 0.2rem 0.5rem 0.1rem rgba(99, 99, 99, 0.507);
    }
    &:active {
      background-color: #00e676;
      color: black;
      box-shadow: 0.1rem 0rem 0.1rem 0.1rem rgb(99, 99, 99);
    }
  }

  .success-message {
    background-color: #d4edda
    color: #155724;
    border: 1px solid #c3e6cb;
    padding: 10px;
    margin-top: 15px;
    border-radius: 5px;
    text-align: center;
    grid-column: 1 / span 2;
    opacity: 0;
    animation: ${fadeInMessage} 2s forwards;
  }
  @media (max-width: 700px) {
    display: flex;
    flex-direction: column;
    gap: 0.3rem;
  }
`;

// --- Styled Components do EmailPopup ---

export const StyledEmailPopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  transition: background 0.3s ease;
`;

export const StyledEmailPopupModal = styled.div`
  background-color: #f9f9f9;
  padding: 2rem;
  border-radius: 1.2rem;
  text-align: center;
  position: relative;
  width: 40rem;
  max-width: 90vw;
  box-shadow: 0 0.4rem 1rem rgba(0, 0, 0, 0.25);
  animation: ${fadeIn} 0.3s ease-in-out;
  margin: 1rem;
  min-width: 30rem;
  transition: background-color 0.5s ease, box-shadow 0.5s ease;
`;

export const StyledEmailPopupClose = styled.button`
  position: absolute;
  top: 1rem;
  right: 1.5rem;
  background: transparent;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  line-height: 1;
  color: ${(props) => props.theme.colors.letras || "#333"};
  transition: color 0.3s ease;
`;

export const StyledBgEmail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: auto;
  padding: 0.5rem;
`;

export const StyledEmailPopupCopyBtn = styled.button`
  padding: 0.75rem 1.2rem;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  cursor: pointer;
  background-color: #00a041;
  color: white;
  border: none;
  border-radius: 0.8rem;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #00e676;
  }
`;

// Usando o componente Image do Next.js para otimização de imagens
export const StyledCopyIcon = styled(Image)`
  margin-left: 2rem;
  height: 1.5rem;
`;

export const StyledEmailPopupEmailBox = styled.div`
  padding: 0.75rem;
  background-color: ${(props) => props.theme.colors.background2 || "#f0f0f0"};
  border-radius: 0.6rem;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  word-break: break-word;
  color: ${(props) => props.theme.colors.letrasSkills || "#222"};
  transition: background-color 0.5s ease, color 0.5s ease;
`;

export const StyledEmailPopupMailto = styled.a`
  color: ${(props) => props.theme.colors.letras};
  text-decoration: none;
  font-size: 1.4rem;
  transition: color 0.3s ease;

  &:hover {
    text-decoration: underline;
  }
`;
