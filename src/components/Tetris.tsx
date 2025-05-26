"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styled from "styled-components";

import imgGirar from "@/images/utils/w-key.png";
import imgEsquerda from "@/images/utils/a-key.png";
import imgBaixo from "@/images/utils/s-key.png";
import imgDireita from "@/images/utils/d-key.png";

const comandWidth = 30; // Largura do canvas em blocos
const comandHeight = 30; // Altura do canvas em blocos

const PageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
  gap: 2rem;
  color: white;
  font-family: monospace;
  position: relative;
  padding: 2rem;
  @media (max-width: 420px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const MobileControls = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2rem;
  }
`;

const MobileButton = styled.button`
  padding: 1rem;
  font-size: 2rem;
  border-radius: 50%;
  min-width: 60px;
  min-height: 60px;
`;

const Game = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const GamePoint = styled.div`
  display: flex;
  align-items: center;
`;

const Canvas = styled.canvas`
  border: 2px solid #555;
  background: black;
`;

const Score = styled.div`
  font-size: 1.5rem;
  margin-top: 1rem;
  color: ${(props) => props.theme.colors.letras};
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 10;
  gap: 2rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  color: white;
  margin-bottom: 2rem;
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1.6rem;
  font-weight: bold;
  background: var(--cor-laranja-primaria);
  color: black;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  margin-top: 1rem;

  &:hover {
    background: white;
  }
`;

const NextPieceContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  text-align: center;
  align-items: center;
  padding: 1rem;
  color: ${(props) => props.theme.colors.letras};
`;

const Instructions = styled.div``;

const NextPieceGrid = styled.div`
  display: inline-block;
`;

const NextPieceCell = styled.div<{ color: string | null }>`
  width: 20px;
  height: 20px;
  background-color: ${({ color }) => color || "transparent"};
  border: 1px solid #222;
`;

// Novos estilos para o botão de regras e overlay
const RulesButton = styled.button`
  padding: 0.8rem 1.5rem;
  font-size: 1.6rem;
  background: #11f041;
  font-weight: bold;
  color: black;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  z-index: 11; // Acima do overlay principal

  &:hover {
    background: white;
  }
`;

const RulesOverlay = styled(Overlay)`
  display: flex;
  justify-content: flex-start;
  background: rgba(0, 0, 0, 0.95); // Mais escuro para as regras
  z-index: 12; // Acima do overlay principal
  overflow-y: auto; // Permite rolagem se necessário
  height: 70%;
  align-self: anchor-center;
  scrollbar-width: thin; // Estilo de scrollbar para Firefox
  scrollbar-color: green white; // Cor da barra e do fundo da scrollbar
`;

const Controls = styled.div`
  display: flex;
  flex-direction: column;
  background: #353535;
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  text-align: left;
  text-indent: 1rem;
  @media (max-width: 768px) {
    display: none;
  }
`;

const RulesContent = styled.div`
  display: flex;
  flex-direction: column;
  background: #353535;
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  text-align: left;
  text-indent: 1rem;

  h2 {
    color: #fff;
    margin-bottom: 1rem;
    text-align: center;
  }

  p {
    color: #ccc;
    margin-bottom: 0.8rem;
    line-height: 1.5;
  }

  ul {
    color: #ccc;
    margin-bottom: 0.8rem;
    padding-left: 20px;
  }

  li {
    margin-bottom: 0.5rem;
  }
`;

const createMatrix = (w: number, h: number): number[][] => {
  const matrix = [];
  while (h--) matrix.push(new Array(w).fill(0));
  return matrix;
};

const TETROMINOS: Record<string, number[][]> = {
  T: [
    [0, 0, 0],
    [1, 1, 1],
    [0, 1, 0],
  ],
  O: [
    [2, 2],
    [2, 2],
  ],
  L: [
    [0, 3, 0],
    [0, 3, 0],
    [0, 3, 3],
  ],
  J: [
    [0, 4, 0],
    [0, 4, 0],
    [4, 4, 0],
  ],
  I: [
    [0, 5, 0, 0],
    [0, 5, 0, 0],
    [0, 5, 0, 0],
    [0, 5, 0, 0],
  ],
  S: [
    [0, 6, 6],
    [6, 6, 0],
    [0, 0, 0],
  ],
  Z: [
    [7, 7, 0],
    [0, 7, 7],
    [0, 0, 0],
  ],
};

const colors = [
  null,
  "#FF0D72",
  "#0DC2FF",
  "#0DFF72",
  "#F538FF",
  "#FF8E0D",
  "#FFE138",
  "#3877FF",
];

const rotate = (matrix: number[][]): number[][] =>
  matrix[0].map((_, i) => matrix.map((row) => row[i])).reverse();

const Tetris404: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [started, setStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [nextPiece, setNextPiece] = useState<number[][]>([]);
  const [showRules, setShowRules] = useState(false); // Novo estado para regras

  const matrixRef = useRef(createMatrix(16, 27));
  const playerRef = useRef({ pos: { x: 0, y: 0 }, matrix: TETROMINOS.T });
  const nextPieceRef = useRef<number[][]>(randomPiece());

  function randomPiece() {
    const keys = Object.keys(TETROMINOS);
    return TETROMINOS[keys[Math.floor(Math.random() * keys.length)]];
  }

  const collide = (matrix: number[][], player: any): boolean => {
    const m = player.matrix;
    const o = player.pos;
    for (let y = 0; y < m.length; ++y) {
      for (let x = 0; x < m[y].length; ++x) {
        if (
          m[y][x] !== 0 &&
          (matrix[y + o.y] && matrix[y + o.y][x + o.x]) !== 0
        )
          return true;
      }
    }
    return false;
  };

  const merge = (matrix: number[][], player: any) => {
    player.matrix.forEach((row: number[], y: number) => {
      row.forEach((value, x) => {
        if (value !== 0) matrix[y + player.pos.y][x + player.pos.x] = value;
      });
    });
  };

  const sweepRows = (matrix: number[][]): number => {
    let linesCleared = 0;
    outer: for (let y = matrix.length - 1; y >= 0; --y) {
      for (let x = 0; x < matrix[y].length; ++x) {
        if (matrix[y][x] === 0) continue outer;
      }
      const row = matrix.splice(y, 1)[0].fill(0);
      matrix.unshift(row);
      linesCleared++;
      y++;
    }
    return linesCleared;
  };

  const playerReset = () => {
    const matrix = matrixRef.current;
    const piece = nextPieceRef.current;
    nextPieceRef.current = randomPiece();

    const newPlayer = {
      pos: {
        x: ((matrix[0].length / 2) | 0) - ((piece[0].length / 2) | 0),
        y: 0,
      },
      matrix: piece,
    };

    if (collide(matrix, newPlayer)) {
      setGameOver(true);
      setStarted(false);
      return;
    }

    playerRef.current = newPlayer;
    setNextPiece(nextPieceRef.current);
  };

  const playerDrop = () => {
    const matrix = matrixRef.current;
    const player = playerRef.current;
    player.pos.y++;
    if (collide(matrix, player)) {
      player.pos.y--;
      merge(matrix, player);
      const lines = sweepRows(matrix);
      if (lines > 0) {
        setScore((prev) => {
          let newScore = prev;
          if (lines === 1) {
            newScore += 10;
          } else if (lines > 1) {
            newScore += 10 * lines * (1 + (lines - 1) * 0.5); // Modified scoring
          }
          setLevel(1 + Math.floor(newScore / 100));
          return newScore;
        });
      }
      playerReset();
    }
  };

  const playerMove = (dir: number) => {
    const player = playerRef.current;
    player.pos.x += dir;
    if (collide(matrixRef.current, player)) player.pos.x -= dir;
  };

  const playerRotate = () => {
    const player = playerRef.current;
    const cloned = rotate(player.matrix);
    const old = player.matrix;
    player.matrix = cloned;
    if (collide(matrixRef.current, player)) player.matrix = old;
  };

  const drawMatrix = (
    ctx: CanvasRenderingContext2D,
    matrix: number[][],
    offset: { x: number; y: number }
  ) => {
    matrix.forEach((row, y) => {
      row.forEach((value, x) => {
        if (value !== 0) {
          ctx.fillStyle = colors[value]!;
          ctx.fillRect(x + offset.x, y + offset.y, 1, 1);
        }
      });
    });
  };

  useEffect(() => {
    if (!started) return;
    if (showRules) return; // Não atualiza o jogo se as regras estiverem abertas

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    context.setTransform(1, 0, 0, 1, 0, 0);
    context.scale(15, 15);

    let dropCounter = 0;
    let lastTime = 0;
    let animationFrameId: number;

    const update = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;
      dropCounter += deltaTime;
      if (dropCounter > Math.max(1000 - level * 100, 100)) {
        playerDrop();
        dropCounter = 0;
      }
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawMatrix(context, matrixRef.current, { x: 0, y: 0 });
      drawMatrix(context, playerRef.current.matrix, playerRef.current.pos);
      animationFrameId = requestAnimationFrame(update);
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (showRules) return; // Não processa input de jogo se as regras estiverem abertas

      if (["ArrowLeft", "a"].includes(event.key)) playerMove(-1);
      else if (["ArrowRight", "d"].includes(event.key)) playerMove(1);
      else if (["ArrowDown", "s"].includes(event.key)) playerDrop();
      else if (["ArrowUp", "w"].includes(event.key)) playerRotate();
    };

    window.addEventListener("keydown", handleKeyDown);
    playerReset();
    update(0);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, [started, level, showRules]); // Adicionar showRules como dependência

  const handleRestart = () => {
    matrixRef.current = createMatrix(12, 20);
    setScore(0);
    setLevel(1);
    setGameOver(false);
    setStarted(true);
    nextPieceRef.current = randomPiece();
    setNextPiece(nextPieceRef.current);
  };

  return (
    <PageWrapper>
      {showRules && (
        <RulesOverlay>
          <RulesContent>
            <h2>Como Jogar Tetris</h2>
            <p>
              O objetivo do Tetris é manipular blocos que caem (tetrominós) para
              formar linhas horizontais completas sem lacunas. Quando uma linha
              é preenchida, ela é removida, e os blocos acima dela caem. O jogo
              termina quando os blocos se acumulam e atingem o topo da tela.
            </p>
            <h3>Controles:</h3>
            <ul>
              <li>
                <Image
                  src={imgEsquerda}
                  alt="Tecla A"
                  width={comandWidth}
                  height={comandHeight}
                />{" "}
                Tecla A: Mover o bloco lateralmente à esquerda.
              </li>
              <li>
                <Image
                  src={imgDireita}
                  alt="Tecla D"
                  width={comandWidth}
                  height={comandHeight}
                />{" "}
                Tecla D: Mover o bloco lateralmente à direita.
              </li>
              <li>
                <Image
                  src={imgBaixo}
                  alt="Tecla S"
                  width={comandWidth}
                  height={comandHeight}
                />{" "}
                Tecla S: Acelerar a queda do bloco (soft drop).
              </li>
              <li>
                <Image
                  src={imgGirar}
                  alt="Tecla W"
                  width={comandWidth}
                  height={comandHeight}
                />{" "}
                Tecla W: Rotacionar o bloco.
              </li>
            </ul>
            <h3>Pontuação:</h3>
            <ul>
              <li>1 Linha: 10 pontos</li>
              <li>2 Linhas: 30 pontos (10 * 2 * 1.5)</li>
              <li>3 Linhas: 60 pontos (10 * 3 * 2)</li>
              <li>4 Linhas (Tetris): 100 pontos (10 * 4 * 2.5)</li>
            </ul>
            <p>
              A cada 100 pontos, o nível aumenta, fazendo com que os blocos
              caiam mais rápido.
            </p>
            <Button onClick={() => setShowRules(false)}>Fechar Regras</Button>
          </RulesContent>
        </RulesOverlay>
      )}

      {(!started || gameOver) && (
        <Overlay>
          <Title>{gameOver ? "GAME OVER" : "TETRIS"}</Title>
          <Button onClick={gameOver ? handleRestart : () => setStarted(true)}>
            {gameOver ? "Reiniciar" : "Start"}
          </Button>
          <RulesButton onClick={() => setShowRules(true)}>Regras</RulesButton>{" "}
          {/* Botão das regras */}
        </Overlay>
      )}
      <Game>
        {nextPiece.length > 0 && (
          <NextPieceContainer>
            <div>Próxima peça:</div>
            <NextPieceGrid>
              {nextPiece.map((row, y) => (
                <div key={y} style={{ display: "flex" }}>
                  {row.map((value, x) => (
                    <NextPieceCell
                      key={x}
                      color={value !== 0 ? colors[value]! : null}
                    />
                  ))}
                </div>
              ))}
            </NextPieceGrid>
          </NextPieceContainer>
        )}
        <Score>
          Pontuação: {score} | Nível: {level}
        </Score>
        <Canvas ref={canvasRef} width={240} height={400} />
        <MobileControls>
          <MobileButton onClick={() => playerMove(-1)}>⬅️</MobileButton>
          <MobileButton onClick={() => playerRotate()}>🔄</MobileButton>
          <MobileButton onClick={() => playerMove(1)}>➡️</MobileButton>
          <MobileButton onClick={() => playerDrop()}>⬇️</MobileButton>
        </MobileControls>
      </Game>
      <GamePoint>
        <Controls>
          <ul>
            <li>
              <Image
                src={imgEsquerda}
                alt="Tecla A"
                width={comandWidth}
                height={comandHeight}
              />
              - Esquerda
            </li>
            <br />
            <li>
              <Image
                src={imgDireita}
                alt="Tecla D"
                width={comandWidth}
                height={comandHeight}
              />
              - Direita
            </li>
            <br />
            <li>
              <Image
                src={imgBaixo}
                alt="Tecla S"
                width={comandWidth}
                height={comandHeight}
              />
              - Acelerar
            </li>
            <br />
            <li>
              <Image
                src={imgGirar}
                alt="Tecla W"
                width={comandWidth}
                height={comandHeight}
              />
              - Girar
            </li>
          </ul>
        </Controls>
      </GamePoint>
        
    </PageWrapper>
  );
};

export default Tetris404;
