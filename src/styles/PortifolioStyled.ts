import styled, { css } from "styled-components";

// Defina seus mixins e variáveis, ou importe-as de um arquivo de configuração
// Para este exemplo, vamos simular mixins e variáveis diretamente aqui.

// Exemplo de mixin:
const caixaFlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const fundoPort = "rgba(0, 0, 0, 0.15)";
const fundoBlur = "blur(10px)";
const corVerdePrimaria = "#11f041";

export const MeuPortfolioContainer = styled.div`
  ${caixaFlexCenter};
  font-family: unbounded, sans-serif;
  box-shadow: ${(props) => props.theme.shadows.fundoPortifolio};
  color: ${(props) => props.theme.colors.letras};
  font-size: 2.5rem;
  font-weight: 600;
  margin: 1rem 0;
`;

export const ContainerWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  margin: 4rem 6rem;

  .container__skills {
    width: 100%;
    background-color: rgba(255, 255, 255, 0.22);
    backdrop-filter: ${(props) => props.theme.shadows.fundoPortifolio};
    border-radius: 0 0 1rem 1rem;
    padding-bottom: 0.5rem;
  }
  @media (max-width: 490px) {
    margin: 4rem 2rem;
  }
`;

export const PortfolioSection = styled.section`
  width: 100%;
  padding-bottom: 1rem;
  background-image: ${(props) => props.theme.bgimages.bgPortifolio};
  background-repeat: no-repeat;
  background-size: cover;

  & .portfolio--titulo {
    font-size: 2rem;
  }

  & .portfolio--img {
    ${caixaFlexCenter};
    margin: 1rem;
    overflow: hidden;
    height: 35rem;
    min-width: 20rem;
    border-radius: 1rem 0.4rem 1rem 0;

    & img {
      object-position: bottom;
      overflow: hidden;
    }
  }

  & .portfolio--texto {
    box-shadow: ${(props) => props.theme.shadows.fundoPortifolio};
    color: ${(props) => props.theme.colors.letras};
    text-align: justify;
    text-indent: 2rem;
    padding: 2rem;
    min-width: 30rem;
    grid-column: 2 / -1;
  }
`;

export const Overlay = styled.div`
  box-shadow: ${(props) => props.theme.shadows.fundoPortifolio};
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  display: flex;
`;

export const GridContainer = styled.div`
  position: relative;
  width: 100%;
  border: 0.1rem solid ${corVerdePrimaria};

  & .grid--portfolio {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: auto;
    column-gap: 3rem;
    row-gap: 2rem;
    place-items: center;
    padding-bottom: 1rem;
    background-color: ${fundoPort};
    backdrop-filter: ${fundoBlur};
    @media (max-width: 720px) {
      display: block;
    }
  }

  & img {
    display: block;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.2);
    }
  }

  & .grid__portfolio--skills {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    margin: 1.5rem 0;
    padding: 0 1rem;
    column-gap: 2.5rem;
    row-gap: 1.5rem;
  }

  .cabecalho__skills {
    ${caixaFlexCenter};
    box-shadow: var(--skill-head);
    backdrop-filter: var(--fundo-blur);
    border-radius: 0 0 0.5rem 0.5rem;
    margin-top: 2rem;
    text-align: center;
  }

  .skill-portfolio {
    ${caixaFlexCenter};
    align-self: center;
    max-width: 3rem;
    min-width: 2rem;
  }

  .img-aleatoria {
    grid-column: 3 / span 3;
    grid-row: 1 / span 2;
  }

  .meuport {
    margin-top: 6.5rem;
  }
`;
