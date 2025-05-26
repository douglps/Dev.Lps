// app/not-found.tsx
// Se Tetris404 também é um Client Component (e geralmente é, se tem interatividade),
// o "use client" pode ser mantido aqui, mas o ponto principal é que
// os CLIENT HOOKS como useRouter NÃO devem ser chamados diretamente aqui.
"use client";

// REMOVA: import { useRouter } from "next/router";
// Esta importação é para o Pages Router e não deve ser usada aqui.

import "@/src/styles/globals.css"; // Certifique-se de que o caminho está correto
import Tetris404 from "../components/Tetris"; // Seu componente Tetris
import styled from "styled-components";
import { VoltarBotao } from "../components/VoltarBotao"; // Importe o seu novo componente de botão

const Section = styled.section`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  color: ${(props) => props.theme.colors.letras};
  gap: 3rem;
  margin-top: 6rem;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 1rem;
    gap: 1.5rem;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  height: 100vh;
  text-align: justify;
  padding: 3rem;
  text-indent: 2rem;

  @media (max-width: 768px) {
    width: 95%;
    padding: 1.5rem;
  }
`;

// REMOVA COMPLETAMENTE A DEFINIÇÃO DE BotaoClassicoVd AQUI!
// Ela agora está exclusivamente dentro de src/components/VoltarBotao.tsx
/*
const BotaoClassicoVd = styled.button`
  // ... (todo o código de estilo do botão) ...
`;
*/

export default function NotFound() {
  // REMOVA ESTAS DUAS LINHAS e a função handleGoBack COMPLETAMENTE!
  // const router = useRouter();
  // const handleGoBack = () => {
  //   router.back();
  // };

  return (
    // Agora, esta linha 'return' deve estar dentro da função 'NotFound' corretamente
    <Section>
      <Container>
        <h1>404</h1>
        <h2>Ihhh, estamos muito além! 😱</h2>
        <p>A página que você está procurando não existe.</p>
        <p>
          Mas não se preocupe, você pode aproveitar para jogar um pouco de
          Tetris enquanto isso! 🕹️
        </p>
        <p>
          Ou voltar para a página anterior e continuar sua jornada por aqui.
        </p>
        <VoltarBotao /> {/* Use o componente de cliente que criamos */}
      </Container>
      <Tetris404 />
    </Section>
  );
}
