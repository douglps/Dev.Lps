import styled, { css } from "styled-components";


const fundoBlur = "blur(1rem)";
const corRoxaSecundaria = "#633e9b";
const fundoAbas = "rgba(106, 13, 173, 0.25)";
const pesoFonte = "600";

// --- Mixins ---
const caixaFlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;


const circuloFlexCenterB = css`
  ${caixaFlexCenter};
  border-radius: 50%;
  border: 0.1rem solid #313131;
`;

const fundoTransparentePr = css`
  box-shadow: rgba(0, 0, 0, 0.5) 0px 0px 9rem 30rem inset;
  backdrop-filter: blur(1.5rem);
`;

// --- Componentes Estilizados ---

export const SkillsSection = styled.section`
  margin-top: 5rem;
  width: 100%;
  height: auto;
`;

export const AbasMore = styled.div<{ $isOpen: boolean }>`
  background-color: ${(props) => props.theme.colors.abasMore};
  backdrop-filter: ${(props) => props.theme.filters.fundoBlur};
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  text-align: justify;
  text-indent: 2rem;
  padding: 2rem;

  max-height: 0;
  overflow: hidden;
  transition: max-height 0.6s ease-out, opacity 1s cubic-bezier(0.1, 0, 1, 1);
  opacity: 0;
  padding: 0 2rem;
  margin: 0;

  ${(props) =>
    props.$isOpen &&
    css`
      max-height: 100rem;
      opacity: 1;
      padding: 2rem;
    `}

  & p {
    width: 97%;
    transition: color 1s ease-out;

    ${(props) =>
      props.$isOpen &&
      css`
        color: ${(props) => props.theme.colors.letras};
      `}
  }
`;

export const AbasContainer = styled.div`
  ${caixaFlexCenter};
  gap: 2rem;
  width: 100%;
  justify-content: space-around;
  font-weight: 300;
  cursor: pointer;

  & > div {
  color: ${(props) => props.theme.colors.letras};
    border-radius: 2rem 2rem 0 0;
    padding: 10px 15px;
    box-shadow: ${(props) => props.theme.shadows.skillsShadow};
    backdrop-filter: ${(props) => props.theme.filters.fundoBlur};
    cursor: pointer;
    border: 1px solid ${corRoxaSecundaria};
    border-bottom: none;
    transition: background-color 0.3s ease;
    @media (max-width: 490px) {
      padding: 1rem 0.5rem;
      }
    @media (max-width: 410px) {
      padding: 1rem 0.1rem;
      font-size: 1.4rem;
    }

    &:hover {
      background-color: ${fundoAbas};
    }

    /* Estilo para as abas ativas */
    &.is-active {
        background-color: ${(props) => props.theme.colors.background3};
    }
    }
    @media (max-width: 490px) {
      gap: 1rem;
    }
    @media (max-width: 410px) {
      gap: 0rem;
    }
`;

export const Citacao = styled.div`
  color: ${(props) => props.theme.colors.citado};
  font-weight: ${pesoFonte};
  text-align: right;
  margin: 2rem 2rem 0 0;
`;

export const SkillsSwiperContainer = styled.div`
  background-color: ${(props) => props.theme.colors.abasMore};
  backdrop-filter: ${fundoBlur};
  display: flex;
  cursor: grabbing;
  height: 30rem;
  align-items: center;
  padding: 4rem 0;
`;

export const SkillCardContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  background-color: ${(props) => props.theme.colors.fundoSkills};
  padding: 3rem 1rem 1rem 1rem;
  margin: 2rem;
  border-radius: 0.5rem;
  box-shadow: 0.2rem 0.2rem 0.9rem 0.2rem ${corRoxaSecundaria};
  min-width: 12rem;
  min-height: 18rem;
`;

export const SkillIconAnimatedBackground = styled.div`
  ${circuloFlexCenterB};
  margin-bottom: 1rem;
  width: 6.8rem;
  height: 6.8rem;
  background-image: ${(props) => props.theme.colors.fundoSkillsIcons};
  transition: all 0.3s ease-out;

  &:hover {
    transform: scale(1.3);
  }
`;

export const SkillIconBackground = styled.div`
  ${circuloFlexCenterB};
  ${fundoTransparentePr};
  width: 6rem;
  height: 6rem;
  padding: 1.2rem;
  border-width: 0rem;
`;

export const SkillWrapper = styled.div`
  ${caixaFlexCenter};
  flex-direction: column;
`;

export const SkillName = styled.div`
  // Nova componente para .skill--nome
  display: flex;
  flex-wrap: wrap;
  width: min-content;
  text-align: center;
  color: ${(props) => props.theme.colors.letrasSkills};
`;

export const SkillsCategoryContainer = styled.div`
  ${caixaFlexCenter};
  flex-direction: column;
  padding: 2.5rem;

  &--content {
    // Seletor aninhado para o conteúdo DENTRO dessas categorias (se elas tivessem um)
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    background-color: rgba(255, 255, 255, 0.795);
    gap: 5rem;
    margin: 2rem;
    border-radius: 0.5rem;
    padding: 2rem;
    align-self: center;
    box-shadow: 0.3rem 0.3rem 1.5rem 0.2rem ${corRoxaSecundaria};
  }
`;
