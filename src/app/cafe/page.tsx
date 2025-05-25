"use client"; // Indica que este é um componente cliente

import Head from "next/head";

import { useState, useEffect, SetStateAction, Dispatch } from "react";
import Image from "next/image"; // Importa Image do Next.js
import * as S from "@/src/styles/CafeStyled"; // Importa todos os Styled Components

// Importe as imagens (ajuste os caminhos se seus aliases forem diferentes)
import closeIcon from "@/images/utils/close.svg";
import copiaColaIconDark from "@/images/utils/copia-cola-br.svg";
import copiaColaIconLight from "@/images/utils/copia-cola-pr.svg";
import copyIcon from "@/images/utils/copy.svg";
import keyIconDark from "@/images/utils/key-br.svg";
import keyIconLight from "@/images/utils/key-pr.svg";
import logoPixIcon from "@/images/utils/logo_pix.avif";
import qrCodeIcon from "@/images/utils/qr-code.svg";
import qrPixNextImage from "@/images/utils/qrpix-next.avif";

// Defina as dimensões padrão para os ícones, AJUSTE CONFORME O TAMANHO REAL dos seus SVGs/imagens
const COPY_BUTTON = 20;
const ICON_SIZE = 160;
const LOGO_PIX_WIDTH = 160; // Exemplo de largura para o logo do Pix
const LOGO_PIX_HEIGHT = 80; // Exemplo de altura para o logo do Pix
const QR_CODE_WIDTH = 250; // Exemplo de largura para o QR Code
const QR_CODE_HEIGHT = 250; // Exemplo de altura para o QR Code

export default function CafePage() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Efeito para obter o tema inicial no cliente
  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentTheme = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
      setTheme(currentTheme);
    }
  }, []);

  // Efeito para observar mudanças no tema (classe 'dark' no <html>)
  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new MutationObserver(() => {
      const updatedTheme = document.documentElement.classList.contains("dark")
        ? "dark"
        : "light";
      setTheme(updatedTheme);
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const [showQrCode, setShowQrCode] = useState<boolean>(false);
  const [showCopiaCola, setShowCopiaCola] = useState<boolean>(false);
  const [showChavePix, setShowChavePix] = useState<boolean>(false);

  const [copiaColaButtonText, setCopiaColaButtonText] =
    useState<string>("Clique para copiar");
  const [chavePixButtonText, setChavePixButtonText] =
    useState<string>("Clique para copiar");

  const pixCopiaColaCode: string =
    "00020126580014BR.GOV.BCB.PIX0136de1e9802-3b1f-4f94-a722-c0810a0deed45204000053039865802BR5921DOUGLAS LOPES PADILHA6012PORTO ALEGRE62070503***6304177D";
  const pixChaveKey: string = "de1e9802-3b1f-4f94-a722-c0810a0deed4";

  const openQrCode = () => {
    setShowCopiaCola(false);
    setShowChavePix(false);
    setShowQrCode(true);
  };

  const openCopiaCola = () => {
    setShowQrCode(false);
    setShowChavePix(false);
    setCopiaColaButtonText("Clique para copiar");
    setShowCopiaCola(true);
  };

  const openChavePix = () => {
    setShowQrCode(false);
    setShowCopiaCola(false);
    setChavePixButtonText("Clique para copiar");
    setShowChavePix(true);
  };

  const closeQrCode = () => setShowQrCode(false);
  const closeCopiaCola = () => setShowCopiaCola(false);
  const closeChavePix = () => setShowChavePix(false);

  const handleModalContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const handleCopy = async (
    textToCopy: string,
    setTextState: Dispatch<SetStateAction<string>>
  ) => {
    if (typeof navigator === "undefined" || !navigator.clipboard) {
      alert(
        "Recurso de copiar para a área de transferência não suportado neste navegador."
      );
      return;
    }
    try {
      await navigator.clipboard.writeText(textToCopy);
      setTextState("Copiado!");
      setTimeout(() => {
        setTextState("Clique para copiar");
      }, 3000);
    } catch (err) {
      console.error("Erro ao copiar: ", err);
      alert("Falha ao copiar o texto.");
    }
  };

  return (
    <S.PixSection>
      <Head>
        <meta
          property="og:title"
          content="Contribua com um café ☕ | DigiGram"
        />
        <meta
          property="og:description"
          content="Ajude com um café e apoie novos projetos."
        />
        <meta
          property="og:url"
          content="https://digigram-ten.vercel.app/cafe"
        />
        <meta
          property="og:image"
          content="https://digigram-ten.vercel.app/og-images/thumbcompart.jpg"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Contribua com um café ☕ | DigiGram"
        />
        <meta
          name="twitter:description"
          content="Ajude com um café e apoie novos projetos."
        />
        <meta
          name="twitter:image"
          content="https://digigram-ten.vercel.app/og-images/thumbcompart.jpg"
        />

        <link rel="canonical" href="https://digigram-ten.vercel.app/cafe" />
      </Head>
      <S.ContainerPix>
        {/* Antiga .container--pix */}
        <S.FundoPix>
          {/* Antiga .fundo-pix */}
          <S.QueroCafe>
            {/* Antiga .quero-cafe */}
            <p>Upload de Cafeína 🚀</p>
            <p>
              Design e código incríveis? Tem café no meio! Sua contribuição dá
              energia extra para continuar criando e explorando. Dedicação e
              estudo constante movem meu trabalho. Seu apoio é valorizado e traz
              incentivo à seguir nesta jornada! (pull request de cafeína!).
            </p>
          </S.QueroCafe>
          <S.AvisoPix>
            {/* Antiga .aviso-pix */}
            <p>
              A contribuição pode ser feita através de Pix. Escolha como
              prefere:
            </p>
          </S.AvisoPix>
          <S.DadosPix>
            {/* Antiga .dados-pix */}
            <S.PixLogo>
              <Image
                src={logoPixIcon}
                alt="Logo Pix"
                width={LOGO_PIX_WIDTH}
                height={LOGO_PIX_HEIGHT}
              />
            </S.PixLogo>
            {/* Gatilho QR Code */}
            <S.PixOption onClick={openQrCode}>
              {/* Antiga .qr */}
              <p>QR Code</p>
              <Image
                src={qrCodeIcon}
                alt="QR Code"
                width={ICON_SIZE}
                height={ICON_SIZE}
              />
            </S.PixOption>
            {/* Gatilho Copia e Cola */}
            <S.PixOption onClick={openCopiaCola}>
              {/* Antiga .copia-cola */}
              <p>Copia e Cola</p>
              <Image
                src={theme === "dark" ? copiaColaIconDark : copiaColaIconLight}
                alt="Copia e cola"
                width={ICON_SIZE}
                height={ICON_SIZE}
              />
            </S.PixOption>
            {/* Gatilho Chave Pix */}
            <S.PixOption onClick={openChavePix}>
              {/* Antiga .chave */}
              <p>Chave Pix</p>
              <Image
                src={theme === "dark" ? keyIconDark : keyIconLight}
                alt="Chave Pix"
                width={ICON_SIZE}
                height={ICON_SIZE}
              />
            </S.PixOption>
            {/* Modal QR Code */}
            {showQrCode && (
              <S.ModalOverlay onClick={closeQrCode}>
                <S.QRCodeContainer onClick={handleModalContentClick}>
                  <S.FecharButton onClick={closeQrCode}>
                    {/* Antiga .fechar */}
                    <Image
                      src={closeIcon}
                      alt="Fechar"
                      width={ICON_SIZE}
                      height={ICON_SIZE}
                    />
                  </S.FecharButton>
                  <Image
                    className="meu-qr"
                    src={qrPixNextImage}
                    alt="QR Code Pix"
                    width={QR_CODE_WIDTH}
                    height={QR_CODE_HEIGHT}
                  />
                  <S.PassoQR>
                    <ol>
                      <li>Abra o aplicativo de seu banco no celular;</li>
                      <li>Faça a leitura do QR Code;</li>
                      <li>
                        Digite o valor da contribuição (Sugestão R$ 5,00);
                      </li>
                      <li>Confira os dados e confirme.</li>
                    </ol>
                    <S.DadosQR>
                      <p>Dados:</p>
                      <p>Nome: Douglas Lopes Padilha</p>
                      <p>CPF: ***.451.510-**</p>
                      <p>Banco Bradesco S.A.</p>
                    </S.DadosQR>
                  </S.PassoQR>
                </S.QRCodeContainer>
              </S.ModalOverlay>
            )}
            {/* Modal Copia e Cola */}
            {showCopiaCola && (
              <S.ModalOverlay onClick={closeCopiaCola}>
                <S.PixCopiaColaContainer onClick={handleModalContentClick}>
                  <S.FecharButton onClick={closeCopiaCola}>
                    {/* Antiga .fechar */}
                    <Image
                      src={closeIcon}
                      alt="Fechar"
                      width={ICON_SIZE}
                      height={ICON_SIZE}
                    />
                  </S.FecharButton>
                  <S.CopiarButton // Antiga .copiar (botão de copiar)
                    onClick={() =>
                      handleCopy(pixCopiaColaCode, setCopiaColaButtonText)
                    }
                  >
                    {copiaColaButtonText}
                    <Image
                      src={copyIcon}
                      alt={
                        copiaColaButtonText === "Copiado!"
                          ? "Código copiado"
                          : "Clique para copiar o código Pix Copia e Cola"
                      }
                      width={COPY_BUTTON}
                      height={COPY_BUTTON}
                    />
                  </S.CopiarButton>
                  <S.CodCopia>{pixCopiaColaCode}</S.CodCopia>
                  {/* Antiga .cod-copia */}
                  <S.PassoQR>
                    <ol>
                      <li>Copie o codigo clicando acima;</li>
                      <li>Abra o aplicativo de seu banco no celular;</li>
                      <li>
                        Seleciona a opção de pagamento via Pix, escolha "Copia e
                        Cola"
                      </li>
                      <li>Cole o codigo copiado;</li>
                      <li>
                        Digite o valor da contribuição (Sugestão R$ 5,00);
                      </li>
                      <li>Confira os dados e confirme.</li>
                    </ol>
                    <S.DadosQR>
                      <p>Dados:</p>
                      <p>Nome: Douglas Lopes Padilha</p>
                      <p>CPF: ***.451.510-**</p>
                      <p>Banco Bradesco S.A.</p>
                    </S.DadosQR>
                  </S.PassoQR>
                </S.PixCopiaColaContainer>
              </S.ModalOverlay>
            )}
            {/* Modal Chave Pix */}
            {showChavePix && (
              <S.ModalOverlay onClick={closeChavePix}>
                <S.ChavePixContainer onClick={handleModalContentClick}>
                  <S.FecharButton onClick={closeChavePix}>
                    {/* Antiga .fechar */}
                    <Image
                      src={closeIcon}
                      alt="Fechar"
                      width={ICON_SIZE}
                      height={ICON_SIZE}
                    />
                  </S.FecharButton>
                  <S.CopiarButton // Antiga .copiar (botão de copiar)
                    onClick={() =>
                      handleCopy(pixChaveKey, setChavePixButtonText)
                    }
                  >
                    {chavePixButtonText}
                    <Image
                      src={copyIcon}
                      alt={
                        chavePixButtonText === "Copiado!"
                          ? "Chave copiada"
                          : "Clique para copiar a chave Pix"
                      }
                      width={COPY_BUTTON}
                      height={COPY_BUTTON}
                    />
                  </S.CopiarButton>
                  <S.KeyPix>{pixChaveKey}</S.KeyPix> {/* Antiga .key-pix */}
                  <S.PassoQR>
                    <ol>
                      <li>Copie a chave clicando acima;</li>
                      <li>Abra o aplicativo de seu banco no celular;</li>
                      <li>
                        Seleciona a opção de pagamento via Pix, escolha "Chave
                        Pix"
                      </li>
                      <li>Cole a chave copiada;</li>
                      <li>
                        Digite o valor da contribuição (Sugestão R$ 5,00);
                      </li>
                      <li>Confira os dados e confirme.</li>
                    </ol>
                    <S.DadosQR>
                      <p>Dados:</p>
                      <p>Nome: Douglas Lopes Padilha</p>
                      <p>CPF: ***.451.510-**</p>
                      <p>Banco Bradesco S.A.</p>
                    </S.DadosQR>
                  </S.PassoQR>
                </S.ChavePixContainer>
              </S.ModalOverlay>
            )}
          </S.DadosPix>
        </S.FundoPix>
      </S.ContainerPix>
    </S.PixSection>
  );
}
