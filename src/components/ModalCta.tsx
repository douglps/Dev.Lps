import Image from "next/image";
import closeIcon from "@/images/utils/close.svg";
import styled, { css } from "styled-components";

interface ModalProps {
  children: React.ReactNode;
  onClose: () => void;
}

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  padding: 7rem;
  overflow-y: auto;
  @media (max-width: 850px) {
    padding: 1rem;
  }
  `;

const ContentCta = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 70%;
  height: max-content;
  background-color: ${(props) => props.theme.colors.fundoModal};
  padding: 3rem;
  margin-top: 6rem;
  border: 0.1rem solid var(--cor-verde-primaria);
  border-radius: 0.5rem;
  gap: 3rem;
  box-shadow: ${(props) => props.theme.shadows.fundoShadow};
  @media (max-width: 850px) {
 width: 75%;}
  @media (max-width: 700px) {
 width: 80%;}
   @media (max-width: 480px) {
  width: 100%;}
`;

const Fechar = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  position: absolute;
  width: 3rem;
  height: 3rem;
  right: -1rem;
  top: -1rem;
  background-color: #004d40;
  border-radius: 50%;
  cursor: pointer;
  z-index: 999;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4caf50;
  }

  & img {
    width: 95%;
    height: 95%;
    z-index: 999;
  }
`;

export default function Modal({ children, onClose }: ModalProps) {
  return (
    <ModalOverlay>
      <ContentCta>
        <Fechar onClick={onClose}>
          <Image src={closeIcon} alt="Fechar" width={48}
                      height={48}/>
        </Fechar>
        {children}
      </ContentCta>
    </ModalOverlay>
  );
}
