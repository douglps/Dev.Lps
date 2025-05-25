// Cta.tsx
import { useState } from "react";
import Modal from "@/src/components/ModalCta";
import { FormularioContato } from "@/src/components/FormularioContato";
import styled from "styled-components";

const CtaSection = styled.section`
margin: 2rem 0;`

const BotaoClassicoVd = styled.div`
  background-color: ${(props) => props.theme.colors.botao};
  color: white;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-weight: 600;
  border-radius: 3rem;
  transition: 0.15s ease-in-out;
  border: 0.2rem solid ${(props) => props.theme.colors.botaoHover};
  padding: 0.5rem 1.5rem;
  margin: 0 1rem;
  align-text: center;
  user-select: none;
  font-size: 1.6rem;

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

export function Cta() {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  return (
    <>
      <CtaSection>
        <div className="rodape__cta" onClick={() => setIsModalOpen(true)}>
          <BotaoClassicoVd>Quero meu site na web!</BotaoClassicoVd>
        </div>
      </CtaSection>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <FormularioContato semMargin={true} />
        </Modal>
      )}
    </>
  );
}
