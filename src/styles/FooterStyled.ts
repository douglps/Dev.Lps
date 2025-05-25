// components/Footer/styles.ts
import styled from "styled-components";
import Link from "next/link";

export const FooterSection = styled.footer`
  width: 100%;
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00000026;
  color: ${(props) => props.theme.colors.letras}

  `;
  
  export const RodapeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  `;
  
  export const SocialContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;
  justify-content: space-evenly;
  margin: 2rem 1rem;
  gap: 2rem;
  
  & img {
    width: 100%;
    height: 100%;
    background-color: var(--skill-nome);
    }
    `;

    export const StyledLink = styled(Link)`
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    gap: 1.2rem;
    color: ${(props) => props.theme.colors.letras}
    `;
    
    export const SocialsLink = styled.div`
    display: flex;
    height: fit-content;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    user-select: none;
    padding-left: 1.5rem;
    padding-right: 1rem;
    border-left: 0.1rem solid #11f041;
    border-right: 0.1rem solid #11f041;
    border-radius: 1rem;
    gap: 1.2rem;
    `;

export const ImgFooter = styled.div`
display: flex;
align-content: center;
width: 3.5rem;
height: 3.5rem;
background-color: ${(props) => props.theme.colors.letrasSkills};
  border-radius: 50%;
  border: 0.2rem solid;
  border-color: ${(props) => props.theme.colors.letrasSkills};
  padding: 0.5rem;
  transition: 0.5s ease-in-out;

  &:hover {
    transform: scale(1.3);
    border: 0.2rem solid var(--cor-verde-primaria);
    }
    `;

    export const FooterModal = styled.div`
  display: flex;
  gap: 1.2rem;
  `;
  
  export const LinkPrivacidade = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  flex-wrap: wrap;
  margin-top: 5rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.colors.citado} ;
  
  & :hover {
    text-decoration: dashed;
    text-decoration-line: underline;
    text-decoration-thickness: 0.1rem;
    text-underline-offset: 0.5rem;
    }
    
    & a {
      color: inherit;
      text-decoration: none;
      }
      `;
      
      export const Version = styled.span`
  display: flex;
  justify-content: flex-start;
  font-size: 0.8rem;
  width: 95svw;
  `;
  
  export const Copyright = styled.div`
  margin-bottom: 3rem;
  text-align: center;
`;
