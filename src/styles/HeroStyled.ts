import styled, { css } from "styled-components";

// Exemplo de mixin:
const caixaFlexCenter = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dobra = styled.div`
  position: absolute;
  top: 6rem;
  left: 0;
  width: 50rem;
  height: 50rem;
  background-image: linear-gradient(135deg, #ff84009e 0%, transparent 50%);
  z-index: -1;
`;

export const MeContainer = styled.div`
  ${caixaFlexCenter};
  position: relative;
  align-content: flex-start;
  margin: 6rem 0 0 4rem;
  min-width: 10rem;
  flex-wrap: wrap;

  .me__container--foto {
    text-shadow: #2d2d36 0.2rem 0.2rem 1rem;
    margin-left: 3.5rem;
    padding: 0 2rem;
    color: ${(props) => props.theme.colors.letras};
    @media (max-width: 750px) {
    margin-left: 0;
    padding: 0;}
    @media (max-width: 750px) {display: content;}
  }
  @media (max-width: 750px) {
          text-align: center;
        margin-left: 0;
  flex-direction: column;
    margin-top: 3rem;
  }
`;

export const DevTitle = styled.div`
  font-size: 1.8rem;
  text-shadow: #2d2d36 0.2rem 0.2rem 1rem;
  padding: 0 1.8rem 0 1.8rem;
  margin-left: 3.5rem;
  color: ${(props) => props.theme.colors.letras};
  @media (max-width: 750px) {
    margin-left: 0;
`;

export const MaiorQue = styled.div`
  position: absolute;
  width: 8rem;
  bottom: 5rem;
  right: -2rem;

  @media (max-width: 750px) {
    right: 2rem;
  }
`;

export const HeroSection = styled.section`
 
`;

export const HeroContentContainer = styled.div`
  border-radius: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
  gap: 2rem;
  background: radial-gradient(
    800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%),
    rgba(2, 109, 109, 0.11),
    transparent 80%
  );
  transition: background 0.3s ease;
  height: 45rem;
  margin-top: 0;

  @media (max-width: 750px) {
  height: auto;
  flex-direction: column;
    margin-top: 6rem;
  }
`;

export const HighlightText = styled.span`
  display: inline;
  font-weight: 600;
  text-shadow: 2px 1px 1px #a7a7a7;
  font-size: 1.6rem;
`;

export const HeroContainer2 = styled.div`
  display: flex;
  min-width: 32rem;
  margin: 3rem 2rem;
  color: ${(props) => props.theme.colors.letras};
`;

export const HeroTextContainer = styled.div`
  display: inline;
  padding: 1.5rem;
  text-align: justify;
  text-align-last: right;
  text-indent: 5%;
  width: 95%;

   @media (max-width: 750px) {
  margin-top: 0rem;
  )
  @media (max-width: 830px) {
    margin-top: 4rem;
  }
`;
