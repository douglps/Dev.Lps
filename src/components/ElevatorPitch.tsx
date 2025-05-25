import Image from "next/image";
import styled from "styled-components";

import imgaside from "@/images/use/imagem1.avif";

// Componentes Estilizados
const Pergunta = styled.p`
  font-family: unbounded;
  font-size: 1.6rem;
  font-weight: 600;
  color: ${(props) => props.theme.colors.citado};
`;

const ElevatorPitchSection = styled.section`
  /* Estilos gerais da seção se houver */
`;

const ElevatorPitchContainer = styled.div`
  /* Estilos para .elevator-pitch__container se houver */
`;

const ElevatorTitulo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  font-size: 4rem;
  height: 12rem;
  width: 99.9%;
  overflow: hidden;
  transform: translateY(-20px);
`;

const ElevatorSpan = styled.span`
  font-weight: 600;
  text-shadow: 0.1rem -0.2rem 0.4rem var(--cor-roxa-secundaria);
  font-size: 4rem;
  color: var(--cor-laranja-primaria);
  @media (max-width: 570px) {
    font-size: 2rem;
  }
  @media (max-width: 720px) {
    font-size: 1.8rem;
  }
  @media (max-width: 440px) {
    font-size: 1.4rem;
  }
`;

const Faixa = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0rem;
  width: 100%;
`;

const Faixa1 = styled(Faixa)`
  background-color: #ff8400;
  top: 2rem;
  height: 6rem;
  transform: rotate(1deg);
`;

const Faixa2 = styled(Faixa)`
  background-color: #6811f0;
  top: 4rem;
  height: 4rem;
  transform: rotate(2.5deg);
`;

const Faixa3 = styled(Faixa)`
  background-color: #40704a;
  top: 3rem;
  height: 6rem;
  transform: rotate(-3deg);
`;

const FaixaTexto = styled(Faixa)`
  font-size: 2rem;
  top: 2.5rem;
  z-index: 50;
  transform: rotate(357deg);
  gap: 1.8rem;
  @media (max-width: 720px) {
    font-size: 1.6rem;
    gap: 1.4rem;
    top: 4.5rem;
  }
  @media (max-width: 570px) {
    font-size: 1.4rem;
    gap: 0.3rem;
    top: 4.5rem;
  }
  @media (max-width: 440px) {
    font-size: 1.2rem;
    gap: 0.1rem;
    top: 4.5rem;
  }
`;

const ElevatorContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 6rem 3rem 6rem;
  @media (max-width: 490px) {
    margin: 0 2rem 3rem 2rem;
  }
`;

const ElevatorTexto = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.theme.colors.letras};
  margin-top: 8rem;
  text-indent: 3rem;
  text-align: justify;
  padding: 3rem 0;
  max-width: 100%;
`;

const ElevatorImgAside = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40rem;
  box-shadow: 0.5rem 0.5rem 1rem 0.1rem #ff84006b;
  overflow: hidden;
  transform: translateY(-6rem);
  z-index: -1;

  & img {
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(0%, 0%);
  }
`;

const PitchContainerText = styled.div`
  margin-top: -14rem;
`;

export function ElevatorPitch() {
  return (
    <ElevatorPitchSection>
      <ElevatorPitchContainer>
        <ElevatorTitulo>
          <Faixa1 />
          <Faixa2 />
          <Faixa3 />
          <FaixaTexto>
            Leve <ElevatorSpan> Sua Marca </ElevatorSpan> para o{" "}
            <ElevatorSpan> mundo online!</ElevatorSpan>
          </FaixaTexto>
        </ElevatorTitulo>
        <ElevatorImgAside>
          <Image
            src={imgaside}
            alt="Imagem de uma pessoa observando o portfólio de um artista"
            fill
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </ElevatorImgAside>
        <PitchContainerText>
          <ElevatorContent>
            <ElevatorTexto>
              <Pergunta>
                Quer um espaço para contar a sua história, apresentar sua marca
                ao mundo, expor seu trabalho ou sua arte?
              </Pergunta>
              <p>
                Contribuo para que você dê o próximo passo com confiança:
                desenvolvo sites que mostram ao mundo quem você é, com design
                marcante, estrutura estratégica e tecnologia que trabalha por
                você. Mais do que um endereço na web, seu site será a vitrine
                viva da sua marca, o espaço onde suas ideias ganham forma e
                alcançam pessoas de verdade.
              </p>
              <p>
                Criar um site é construir uma ponte entre você e quem está
                procurando exatamente o que você oferece. É transformar presença
                digital em presença real, gerando confiança, desejo e conexão
                verdadeira. Cada projeto entregue é pensado para emocionar,
                comunicar e convencer, com equilíbrio entre beleza, clareza e
                resultados.
              </p>
              <p>
                Se você tem uma idéia e quer vê-la brilhar online, está no
                caminho certo para realizar. Vamos conversar e demonstrar como
                podemos fazer isso acontecer de forma simples e eficaz.
              </p>
            </ElevatorTexto>
          </ElevatorContent>
        </PitchContainerText>
      </ElevatorPitchContainer>
    </ElevatorPitchSection>
  );
}
