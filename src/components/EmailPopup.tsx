"use client";

import React, { useState, useCallback } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import styled, { css } from "styled-components";

import copyIcon from "@/images/utils/copy.svg";
import closeIcon from "@/images/utils/close.svg";

interface EmailPopupProps {
  icon: string;
  tipo?: "contato" | "footer";
}

// Keyframe animation for fadeIn
const fadeIn = css`
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: scale(0.5);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
`;

// Styled Components for the popup
const EmailPopupOverlay = styled.div`
  ${fadeIn} /* Apply the animation */
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
`;

const EmailPopupModal = styled.div`
  background-color: ${(props) => props.theme.colors.fundoModal};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 1.2rem;
  text-align: center;
  position: relative;
  width: 40rem;
  max-width: 90vw;
  box-shadow: ${(props) => props.theme.shadows.fundoShadow};
  animation: fadeIn 0.3s ease-in-out;
  margin: 1rem;
  min-width: 30rem;
`;

const EmailPopupClose = styled.button`
  position: absolute;
  top: -1rem;
  right: -1rem;
  width: 3rem;
  height: 3rem;
  background-color: #004d40;
  border: none;
  border-radius: 50%;
  font-size: 2rem;
  cursor: pointer;
  line-height: 1;

  img {
    width: 95%;
    height: 95%;
  }

  &:hover {
    background-color: #4caf50;
  }
`;

const BgEmail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 0.5rem;
`;

const EmailPopupCopyBtn = styled.button`
  padding: 0.75rem 1.2rem;
  font-size: 1.4rem;
  margin-bottom: 1rem;
  cursor: pointer;
  /* Directly using color values or props from styled-components theme */
  background-color: #004d40;
  color: white;
  border: none;
  border-radius: 0.8rem;
  transition: background 0.3s ease;

  &:hover {
    background-color: #4caf50;
  }
`;

const CopyIcon = styled(Image)`
  margin-left: 2rem;
  height: 1.5rem;
`;

const EmailPopupEmailBox = styled.div`
  padding: 0.75rem;
  background-color: #f0f0f0;
  border-radius: 0.6rem;
  font-weight: 600;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  word-break: break-word;
  color: #222;
`;

const EmailPopupMailto = styled.a`
  color: var(
    --letras
  ); /* Assuming --letras is defined globally or via ThemeProvider */
  text-decoration: none;
  font-size: 1.4rem;

  &:hover {
    text-decoration: underline;
  }
`;

const EmailFooter = styled.div`
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
    border: 0.2rem solid var(--cor-verde-primaria); /* Assuming --cor-verde-primaria is defined */
  }
`;

const ViasContato = styled.div`
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

export function EmailPopup({ icon, tipo = "contato" }: EmailPopupProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "dl.douglaslps@gmail.com";

  const handleCopy = useCallback(() => {
    const textarea = document.createElement("textarea");
    textarea.value = email;
    textarea.style.position = "fixed";
    textarea.style.opacity = "0";
    document.body.appendChild(textarea);

    textarea.select();
    textarea.setSelectionRange(0, 99999);

    try {
      const successful = document.execCommand("copy");
      if (successful) {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        console.error("Falha ao copiar usando execCommand.");
        navigator.clipboard
          .writeText(email)
          .then(() => {
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
          })
          .catch((err) => {
            console.error("Erro ao copiar com navigator.clipboard:", err);
          });
      }
    } catch (err) {
      console.error("Erro ao copiar o texto:", err);
    } finally {
      document.body.removeChild(textarea);
    }
  }, [email]);

  const handleOverlayClick = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (e.target === e.currentTarget) {
        setIsOpen(false);
      }
    },
    []
  );

  const renderTrigger = () => {
    if (tipo === "footer") {
      return (
        <div
          className="footer-modal" // Keep this class if it's used elsewhere for targeting
          onClick={() => setIsOpen(true)}
          style={{ cursor: "pointer" }}
          aria-label="Abrir popup de e-mail"
          role="button"
        >
          <EmailFooter>
            <Image src={icon} alt="Enviar E-mail" width={24} height={24} />
          </EmailFooter>
          E-mail
        </div>
      );
    }

    return (
      <ViasContato>
        <Image
          className="socials-contato" // Keep this class if it's used elsewhere for targeting
          src={icon}
          alt="E-mail"
          title="E-mail"
          onClick={() => setIsOpen(true)}
          style={{ cursor: "pointer" }}
          width={40}
          height={40}
          aria-label="Abrir popup de e-mail"
          role="button"
        />
      </ViasContato>
    );
  };

  return (
    <div className={tipo === "footer" ? "socials" : ""}>
      {" "}
      {/* Keep this class if it's used elsewhere for targeting */}
      {renderTrigger()}
      {isOpen &&
        createPortal(
          <EmailPopupOverlay onClick={handleOverlayClick}>
            <EmailPopupModal>
              <BgEmail onClick={handleCopy} style={{ cursor: "pointer" }}>
                <EmailPopupClose
                  className="fechar" // Keep this class if it's used elsewhere for targeting
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsOpen(false);
                  }}
                  aria-label="Fechar popup"
                  role="button"
                >
                  <Image src={closeIcon} alt="Fechar" width={20} height={20} />
                </EmailPopupClose>

                <EmailPopupCopyBtn aria-live="polite">
                  {copied ? "Copiado!" : "Clique para copiar"}
                  <CopyIcon
                    src={copyIcon}
                    alt="Copiar"
                    width={16}
                    height={16}
                  />
                </EmailPopupCopyBtn>
                <EmailPopupEmailBox>{email}</EmailPopupEmailBox>
              </BgEmail>
              <EmailPopupMailto
                href={`mailto:${email}?subject=Contato via site`}
              >
                Ou clique aqui para enviar um e-mail
              </EmailPopupMailto>
            </EmailPopupModal>
          </EmailPopupOverlay>,
          document.body
        )}
    </div>
  );
}
