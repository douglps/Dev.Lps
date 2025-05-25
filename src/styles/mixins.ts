import { css } from 'styled-components';

// Mixin `caixa-flex--center`
export const caixaFlexCenter = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

// Mixin `caixa-flex--center--b`
export const caixaFlexCenterB = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border: 0.1rem solid #888888;
`;

// Mixin `circulo-flex--center`
export const circuloFlexCenter = css`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Mixin `circulo-flex--center--b` (idêntico ao circuloFlexCenter no SCSS, pode ser o mesmo)
export const circuloFlexCenterB = css`
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

// Mixin `fundo-transparente--br`
export const fundoTransparenteBr = css`
  box-shadow: inset 0rem 0rem 0rem 40rem rgba(207, 207, 207, 0.06);
  border: none;
  backdrop-filter: blur(1.5rem);
`;

// Mixin `fundo-transparente--pr`
export const fundoTransparentePr = css`
  box-shadow: inset 0rem 0rem 9rem 30rem rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(1.5rem);
`;

// Mixin `botao-classico--vd`
export const botaoClassicoVd = css`
  background-color: var(--enviar); /* Usando variável do tema */
  color: white; /* Considere usar uma variável de tema aqui também */
  font-weight: 700;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  border-radius: 3rem;
  transition: 0.15s ease-in-out;
  border: 0.2rem solid var(--enviar); /* Cor da borda baseada no tema */
  padding: 0.5rem 1.5rem;
  margin: 0 1rem;
  align-self: center;
  user-select: none;
  font-size: 1.6rem;

  &:hover {
    cursor: pointer;
    background-color: var(--enviar-hover); /* Cor de hover do tema */
    color: black; /* Considere usar uma variável de tema aqui também */
    box-shadow: 0.2rem 0.5rem 1rem 0.2rem var(--btn-shadow-hover) !important;
    transform: translate(-0.1rem, -0.1rem);
  }

  &:active {
    background: linear-gradient(var(--citado), #cf6b00); /* Usando variável do tema */
    transform: translate(0rem, 0.1rem);
    box-shadow: 0rem 0.2rem 0.2rem 0.1rem var(--btn-shadow-active) !important;
    transition: 0.05s ease-in-out;
  }

  &:focus {
    outline: none;
    box-shadow: 0rem 0.5rem 0.5rem 0.1rem var(--btn-shadow-focus);
  }

  &:disabled {
    background-color: gray;
    cursor: not-allowed;
    opacity: 0.6;
  }
`;

// Mixin `cta`
export const cta = css`
  font-family: "Blenda", Arial, Helvetica, sans-serif; /* Assumindo "Blenda" é carregada globalmente */
  font-weight: 100;
  font-size: 2rem;
  padding: 1rem 0;
`;

// Mixin `menu` (renomeado para evitar conflito com componente 'Menu')
export const menuLinkBaseStyles = css`
  color: var(--link-menu);
  text-decoration: underline;
  text-decoration-color: #00f0e7; /* Valor fixo, ou adicione em tema */
  text-decoration-thickness: 0.1rem;
  text-underline-offset: 0.6rem;
  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--link-menu-hover);
    text-decoration-color: var(--color-verde-primaria);
    text-decoration-thickness: 0.3rem;
    text-underline-offset: 0.6rem;
  }

  &:active {
    color: var(--link-menu-active);
  }
`;

// Mixin `controles`
export const controles = css`
  ${fundoTransparentePr} /* Reutilizando mixin */
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50% 0 0% 50%;
  width: 5rem;
  height: 5rem;
  flex-direction: row-reverse;
  z-index: 102;

  & img {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50%;
  }
`;

// Mixin `texto` do _fonts.scss
export const texto = (fontFamily: string, fontSize: string, fontWeight: string, lineHeight: string) => css`
  font-family: ${fontFamily};
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
  text-align: center;
`;

// Breakpoints de _helpers.scss
export const breakpoints = {
  sm: '30em', // 480px
  md: '48em', // 768px
  lg: '64em', // 1024px
  xl: '75em', // 1200px
  xxl: '75.01em', // 1201px e acima (min-width para xxl)
};

// Helpers para media queries
// Exemplo de uso: `@media (max-width: ${respondSm}) { ... }`
export const respondSm = `(max-width: ${breakpoints.sm})`;
export const respondMd = `(min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md})`;
export const respondLg = `(min-width: ${breakpoints.md}) and (max-width: ${breakpoints.lg})`;
export const respondXl = `(min-width: ${breakpoints.lg}) and (max-width: ${breakpoints.xl})`;
export const respondXxl = `(min-width: ${breakpoints.xl})`;