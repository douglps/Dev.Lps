import styled, { css } from "styled-components";

const flexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ContainerPrivacidade = styled.section`
  ${flexCenter};
  align-content: center;
`;

export const PrivacidadeGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin-top: 6rem;
  background-color: var(--bg-gradient);
  color: var(--letras);
  line-height: 1.6;
  align-self: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    /* Remover o margin-top aqui se o cabeçalho for fixo e o conteúdo precisar de espaço */
    margin-top: 2rem; /* Ajuste para dar espaço abaixo do cabeçalho móvel */
  }
`;

export const PrivacidadeNavegacao = styled.nav`
  /* Estilos para o menu de navegação */
  font-size: 1.4rem;
  padding: 1rem;
  background-color: ${(props) => props.theme.colors.background};
  border-radius: 12px;
  border: 1px solid #ddd;
  list-style: none;
  text-align: left;
  margin-top: 4rem; /* Espaço do topo em desktop */

  /* Tornar o menu sticky em desktop */
  position: sticky;
  top: 2rem; /* Distância do topo da tela */
  align-self: start; /* Importante para o sticky funcionar corretamente dentro do grid */
  height: fit-content; /* Garante que ocupe apenas a altura necessária */

  li {
    margin-bottom: 1.3rem;
    list-style-type: none;
  }

  a {
    color: ${(props) => props.theme.colors.letras};
    text-decoration: none;
    font-weight: 500;
    text-align: left;
    display: block; /* Mudei para block para que o hover preencha a linha toda */
    padding: 0.2rem 0; /* Pequeno padding para facilitar o clique */
    cursor: pointer;

    &:hover,
    &:focus {
      text-decoration: underline;
    }
  }

  /* Media query para telas menores (mobile) */
  @media (max-width: 768px) {
    position: relative; /* Volta para relative em mobile para não sobrepor o conteúdo */
    margin-bottom: 2rem;
    margin-top: 0; /* Remove o margin-top em mobile */
    /* Você pode adicionar um max-height e overflow-y: auto aqui se a lista for muito longa em mobile */
  }
`;

export const PrivacidadeContainerConteudo = styled.div`
  background-color: ${(props) => props.theme.colors.fundoModal};
  color: ${(props) => props.theme.colors.letras};
  padding: 2rem;
  border-radius: 12px;
  text-align: justify;
  text-indent: 2rem;

  h1 {
    font-size: 2rem;
    margin-bottom: 3rem;
    text-align: center;
  }

  h2 {
    margin: 3rem 0 2rem 0;
    font-size: 1.8rem;
    color: var(--letras);
    text-shadow: none;
    font-weight: 600;
  }

  ul {
    margin-left: 1.5rem;
    margin-bottom: 1rem;
    list-style: square;
  }

  a {
    color: ${(props) => props.theme.colors.letras};
    text-decoration: underline;
  }
`;

export const PrivSpanLink = styled.span`
  display: inline;
`;

export const Cafezin = styled.div`
  display: inline-flex;
  flex-flow: row;
  flex-wrap: wrap;
  width: max-content;
  height: 3rem;

  & img {
    width: 3rem;
    height: 3rem;
    background: #fff;
    border-radius: 50%;
  }

  & a {
    display: inline-flex;
    flex-flow: row;
    flex-wrap: wrap;
    align-items: flex-end;
    align-content: baseline;
    text-decoration: none;
    color: inherit;
  }
`;
