import styled, { css } from "styled-components";

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  ${flexCenter};
  z-index: 9999;
  padding: 7rem;
  overflow-y: auto;

  @media (max-width: 768px) {
    padding: 2rem; /* Ajuste para mobile se o padding original de 7rem for muito */
  }
`;

export const QRCodeContainer = styled.div`
  ${flexCenter};
  align-content: center;
  position: relative;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  color: ${(props) => props.theme.colors.letras};
  width: max-content;
  height: max-content;
  background-color: ${(props) => props.theme.colors.fundoModal};
  padding: 3rem;
  margin-top: 6rem;
  border: 0.1rem solid var(--cor-verde-primaria);
  border-radius: 0.5rem;
  gap: 3rem;
  box-shadow: ${(props) => props.theme.shadows.fundoShadow};

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    gap: 2rem;
    min-width: 30rem; /* Ajuste para mobile */
  }
`;

export const PixCopiaColaContainer = styled(QRCodeContainer)``;
export const ChavePixContainer = styled(QRCodeContainer)``;

export const PassoQR = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  align-items: flex-start;
  gap: 2rem;

  ol {
    padding-left: 1.5rem;

    li {
      margin-bottom: 0.5rem;
    }
  }

  @media (max-width: 768px) {
    gap: 1.5rem;
  }
`;

export const DadosQR = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

export const PixLogo = styled.div`
  width: 25rem;
  padding: 3rem;
  background-color: ${(props) => props.theme.colors.fundoSkills};

  @media (max-width: 768px) {
    width: 100%; /* Ajuste para mobile */
    text-align: center; /* Centraliza o conteúdo se a largura mudar */
  }
`;

// Novos Styled Components para as classes do seu SCSS
export const PixSection = styled.section`
  margin-top: 6rem;
`;

export const ContainerPix = styled.div`
  /* Adicione estilos para o container se necessário */
`;

export const FundoPix = styled.div`
  /* Adicione estilos para o fundo se necessário */
`;

export const QueroCafe = styled.div`
  color: ${(props) => props.theme.colors.letras};
  background-color: ${(props) => props.theme.colors.fundoModal};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem; /* Adicionado um padding padrão para o container */

  p {
    &:first-child {
      font-size: 2.5rem;
      margin-bottom: 1rem;
    }
    &:last-child {
      text-indent: 3rem;
      text-align: justify;
    }
    max-width: none;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    gap: 2rem; /* Ajuste para mobile */

    p {
      text-indent: 1rem;
      max-width: 100%;
    }
  }
`;

export const AvisoPix = styled.div`
  color: ${(props) => props.theme.colors.letras};
  background-color: ${(props) => props.theme.colors.fundoModal};
  padding: 2rem; /* Adicionado um padding padrão para o container */

  text-align: left;
  p {
    text-indent: 3rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem;
    gap: 2rem; /* Ajuste para mobile */
    text-align: center;
  }
`;

export const DadosPix = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  gap: 2rem; /* Usando gap para espaçamento */
  align-items: center; /* Alinhando os itens verticalmente */
  padding: 2rem; /* Adicionado um padding padrão para o container */

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    align-items: center; /* Estender os itens na largura */
  }
`;

export const PixOption = styled.div`
  // Componente genérico para .qr, .copia-cola, .chave
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.letras};
  cursor: pointer;
  padding: 1rem;
  border-radius: 0.3rem;
  background-color: ${(props) => props.theme.colors.fundoModal};
  transition: background-color 0.6s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.letrasSkills};
  }

  p {
    margin-bottom: 0.5rem;
  }
  width: auto;
  max-width: none;

  @media (max-width: 768px) {
    width: 100%; /* Ocupar toda a largura disponível */
    max-width: 25rem;
  }
`;

export const FecharButton = styled.div`
  ${flexCenter};
  align-content: center;
  position: absolute;
  width: 3rem;
  height: 3rem;
  right: -1rem;
  top: -1rem;
  background-color: #004d40; /* Cor fixa ou do tema */
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4caf50; /* Cor fixa ou do tema */
  }

  & img {
    width: 95%;
    height: 95%;
    z-index: 999;
  }
`;

export const CopiarButton = styled.div`
  // Ou styled.button se semanticamente for um botão
  ${flexCenter}; /* Certifique-se de que flexCenter está acessível */
  gap: 0.5rem;
  padding: 0.75rem 1.2rem;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  cursor: pointer;
  background-color: #004d40; /* Cor fixa ou do tema */
  color: white;
  border: none;
  border-radius: 0.8rem;
  transition: background 0.3s ease;

  &:hover {
    background-color: #4caf50; /* Cor fixa ou do tema */
  }
`;

export const CodCopia = styled.div`
  word-break: break-all;
  padding: 1rem;
  border: 0.1rem solid var(--cor-borda); /* Verifique se '--cor-borda' está no seu tema ou CSS global */
  border-radius: 0.3rem;
  background-color: ${(props) => props.theme.colors.background2};
  color: ${(props) => props.theme.colors.letrasSkills};
  font-size: 1.2rem;
`;

export const KeyPix = styled(CodCopia)``; // Reutiliza os estilos de CodCopia
