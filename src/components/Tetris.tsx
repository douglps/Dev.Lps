"use client";

import React, { useEffect, useRef, useState, useCallback } from "react";
import Image from "next/image";
import styled from "styled-components";

import imgGirar from "@/images/utils/w-key.png";
import imgEsquerda from "@/images/utils/a-key.png";
import imgBaixo from "@/images/utils/s-key.png";
import imgDireita from "@/images/utils/d-key.png";
import imgLeft from "@/images/utils/left.svg";
import imgRotate from "@/images/utils/rotate.svg";
import imgRight from "@/images/utils/right.svg";
import imgDown from "@/images/utils/down.svg";

// Dimensões do tabuleiro em blocos
const BOARD_WIDTH = 16;
const BOARD_HEIGHT = 27; // Ajustado para corresponder à altura do canvas (405px / 15px por bloco = 27)
const BLOCK_SIZE = 15; // Tamanho de cada bloco em pixels
const CONTROL_SIZE = 30; // Tamanho de cada controle em pixels

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
  user-select: none;
  @media (max-width: 420px) {
    flex-direction: column;
    flex-wrap: wrap;
  }
`;

const MobileControls = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: nowrap;
  justify-content: center;
  margin-top: 2rem;
`;

const MobileButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  border-radius: 50%;
  min-width: 45px;
  min-height: 45px;
  background: #353535;
  color: black;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const ButtonImage = styled(Image)`
  user-select: none;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  pointer-events: none;`

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
  border-radius: 8px; /* Adicionado para arredondar as bordas do canvas */
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
  border-radius: 8px; /* Adicionado para arredondar as bordas do overlay */
`;

const Title = styled.h1`
  font-size: 4rem;
  color: white;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease, transform 0.1s ease;

  &:hover {
    background: white;
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const NextPieceContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
  text-align: center;
  align-items: center;
  height: 9rem;
  width: 100%;
  padding: 1rem;
  color: ${(props) => props.theme.colors.letras};
  background: #353535;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const NextPieceGrid = styled.div`
  display: inline-block;
  border: 1px solid #11f041;
  background: #222;
  padding: 5px;
  border-radius: 4px;
  margin-left: 1rem;
`;

const NextPieceCell = styled.div<{ color: string | null }>`
  width: ${BLOCK_SIZE}px; /* Usar BLOCK_SIZE para consistência */
  height: ${BLOCK_SIZE}px; /* Usar BLOCK_SIZE para consistência */
  background-color: ${({ color }) => color || "transparent"};
  border: 1px solid #222;
`;

const RulesButton = styled(Button)`
  background: #11f041; /* Verde */
  z-index: 11;
  &:hover {
    background: #aaffbb;
  }
`;

const RulesOverlay = styled(Overlay)`
  display: flex;
  justify-content: flex-start;
  background: rgba(0, 0, 0, 0.95);
  z-index: 12;
  overflow-y: auto;
  height: 70%;
  align-self: center;
  scrollbar-width: thin;
  scrollbar-color: green white;
  padding-top: 5rem;
  box-sizing: border-box;
`;

const Aside = styled.div`
  display: flex;
  flex-direction: column;
  background: #353535;
  padding: 2rem;
  border-radius: 10px;
  max-width: 600px;
  text-align: left;
  text-indent: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  ul {
    list-style: none; 
  }
  @media (max-width: 768px) {
    display: none;
  }
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
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  ul {
    list-style: none; /* Remove bullet points */
    padding: 0;
    }
    
    li {
      list-style: none
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 1.2rem;
    color: #ccc;
  }

  img {
    margin-right: 10px;
  }
`;

const RulesContent = styled(Controls)`
  h2 {
    color: #fff;
    margin-bottom: 1rem;
    text-align: center;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  }

  h3 {
    color: #fff;
    margin-top: 1.5rem;
    margin-bottom: 0.8rem;
    text-align: left;
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

// Interface para o objeto Player
interface Player {
  pos: { x: number; y: number };
  matrix: number[][];
}

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
  "#FF0D72", // T
  "#0DC2FF", // O
  "#0DFF72", // L
  "#F538FF", // J
  "#FF8E0D", // I
  "#FFE138", // S
  "#3877FF", // Z
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
  const [showRules, setShowRules] = useState(false);

  const intervalRef = useRef<number | null>(null);

  const startRepeatingAction = useCallback(
    (action: () => void, delay: number = 250) => {
      // Limpa qualquer intervalo existente antes de iniciar um novo
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      action(); // Executa a ação imediatamente ao pressionar
      intervalRef.current = window.setInterval(action, delay);
    },
    []
  );

  // Função para parar a repetição de uma ação
  const stopRepeatingAction = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  }, []);

  // Refs para o estado do jogo que não causam re-renderização
  const matrixRef = useRef(createMatrix(BOARD_WIDTH, BOARD_HEIGHT));
  const playerRef = useRef<Player>({
    pos: { x: 0, y: 0 },
    matrix: TETROMINOS.T,
  });
  const nextPieceRef = useRef<number[][]>([]); // Inicializado vazio, será preenchido no primeiro randomPiece

  // Funções de lógica do jogo memorizadas com useCallback
  const randomPiece = useCallback((): number[][] => {
    const keys = Object.keys(TETROMINOS);
    return TETROMINOS[keys[Math.floor(Math.random() * keys.length)]];
  }, []); // Sem dependências, TETROMINOS é uma constante

  const collide = useCallback((matrix: number[][], player: Player): boolean => {
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
  }, []); // Sem dependências, pura

  const merge = useCallback((matrix: number[][], player: Player) => {
    player.matrix.forEach((row: number[], y: number) => {
      row.forEach((value, x) => {
        if (value !== 0) matrix[y + player.pos.y][x + player.pos.x] = value;
      });
    });
  }, []); // Sem dependências, pura

  const sweepRows = useCallback((matrix: number[][]): number => {
    let linesCleared = 0;
    outer: for (let y = matrix.length - 1; y >= 0; --y) {
      for (let x = 0; x < matrix[y].length; ++x) {
        if (matrix[y][x] === 0) continue outer;
      }
      const row = matrix.splice(y, 1)[0].fill(0);
      matrix.unshift(row);
      linesCleared++;
      y++; // Re-verificar a mesma linha após a remoção
    }
    return linesCleared;
  }, []); // Sem dependências, pura

  const playerReset = useCallback(() => {
    const matrix = matrixRef.current;
    // Garante que nextPieceRef.current tenha um valor inicial antes de ser usado
    if (!nextPieceRef.current || nextPieceRef.current.length === 0) {
      nextPieceRef.current = randomPiece();
    }
    const piece = nextPieceRef.current;
    nextPieceRef.current = randomPiece(); // Gera a próxima peça

    const newPlayer: Player = {
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
    setNextPiece(nextPieceRef.current); // Atualiza o estado para renderizar a próxima peça
  }, [randomPiece, collide, setGameOver, setStarted, setNextPiece]);

  const playerDrop = useCallback(() => {
    const matrix = matrixRef.current;
    const player = playerRef.current;
    player.pos.y++;
    if (collide(matrix, player)) {
      player.pos.y--; // Volta uma posição se colidiu
      merge(matrix, player); // Mescla a peça ao tabuleiro
      const lines = sweepRows(matrix); // Verifica e limpa linhas
      if (lines > 0) {
        setScore((prev) => {
          let newScore = prev;
          if (lines === 1) {
            newScore += 10;
          } else if (lines > 1) {
            // Pontuação modificada para 2, 3 e 4 linhas
            newScore += 10 * lines * (1 + (lines - 1) * 0.5);
          }
          setLevel(1 + Math.floor(newScore / 100)); // Aumenta o nível a cada 100 pontos
          return newScore;
        });
      }
      playerReset(); // Reseta o jogador para a próxima peça
    }
  }, [collide, merge, sweepRows, setScore, setLevel, playerReset]);

  const playerMove = useCallback(
    (dir: number) => {
      const player = playerRef.current;
      player.pos.x += dir;
      if (collide(matrixRef.current, player)) player.pos.x -= dir; // Volta se colidiu
    },
    [collide]
  );

  const playerRotate = useCallback(() => {
    const player = playerRef.current;
    const cloned = rotate(player.matrix); // Rotaciona a matriz da peça
    const old = player.matrix; // Salva a matriz antiga para reverter se houver colisão
    player.matrix = cloned;
    if (collide(matrixRef.current, player)) player.matrix = old; // Reverte se colidiu
  }, [collide]);

  // Função para desenhar a matriz no canvas
  const drawMatrix = useCallback(
    (
      ctx: CanvasRenderingContext2D,
      matrix: number[][],
      offset: { x: number; y: number }
    ) => {
      matrix.forEach((row, y) => {
        row.forEach((value, x) => {
          if (value !== 0) {
            ctx.fillStyle = colors[value]!; // Usa o operador non-null assertion
            ctx.fillRect(
              x + offset.x,
              y + offset.y,
              1, // Tamanho do bloco em unidades de escala
              1 // Tamanho do bloco em unidades de escala
            );
          }
        });
      });
    },
    []
  ); // Pura, sem dependências

  // Efeito principal do jogo (loop de atualização e eventos)
  useEffect(() => {
    if (!started) return; // Não executa o loop se o jogo não começou
    if (showRules) return; // Pausa o jogo se as regras estiverem abertas

    const canvas = canvasRef.current;
    if (!canvas) return;
    const context = canvas.getContext("2d");
    if (!context) return;

    // Configura a escala do contexto do canvas
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.scale(BLOCK_SIZE, BLOCK_SIZE); // Escala para o tamanho do bloco

    let dropCounter = 0;
    let lastTime = 0;
    let animationFrameId: number;

    const update = (time: number) => {
      const deltaTime = time - lastTime;
      lastTime = time;
      dropCounter += deltaTime;

      // Lógica de queda automática da peça
      if (dropCounter > Math.max(1000 - level * 100, 100)) {
        playerDrop(); // Chama a função playerDrop (dependência)
        dropCounter = 0;
      }

      // Limpa e redesenha o canvas
      context.clearRect(0, 0, canvas.width, canvas.height);
      drawMatrix(context, matrixRef.current, { x: 0, y: 0 }); // Desenha o tabuleiro
      drawMatrix(context, playerRef.current.matrix, playerRef.current.pos); // Desenha a peça atual

      animationFrameId = requestAnimationFrame(update); // Solicita o próximo frame
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (showRules) return; // Ignora input de jogo se as regras estiverem abertas

      if (["ArrowLeft", "a"].includes(event.key)) playerMove(-1);
      else if (["ArrowRight", "d"].includes(event.key)) playerMove(1);
      else if (["ArrowDown", "s"].includes(event.key)) playerDrop();
      else if (["ArrowUp", "w"].includes(event.key)) playerRotate();
    };

    // Adiciona o listener de teclado
    window.addEventListener("keydown", handleKeyDown);
    update(0); // Inicia o loop de animação

    // Cleanup function para remover o listener e cancelar o frame de animação
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      cancelAnimationFrame(animationFrameId);
    };
  }, [
    started,
    level,
    showRules,
    playerDrop,
    playerMove,
    playerRotate,
    drawMatrix,
  ]); // Dependências do useEffect

  // Função para reiniciar o jogo
  const handleRestart = () => {
    matrixRef.current = createMatrix(BOARD_WIDTH, BOARD_HEIGHT); // Reseta o tabuleiro
    setScore(0);
    setLevel(1);
    setGameOver(false);
    setStarted(true); // Inicia o jogo
    playerReset(); // Reseta o jogador e gera a primeira peça
  };

  // Função para iniciar o jogo pela primeira vez
  const handleStartGame = () => {
    setStarted(true);
    playerReset(); // Reseta o jogador e gera a primeira peça
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
                  width={30} // Usando valores fixos para as imagens de controle
                  height={30}
                />{" "}
                Tecla A ou Seta Esquerda: Mover o bloco lateralmente à esquerda.
              </li>
              <li>
                <Image src={imgDireita} alt="Tecla D" width={30} height={30} />{" "}
                Tecla D ou Seta Direita: Mover o bloco lateralmente à direita.
              </li>
              <li>
                <Image src={imgBaixo} alt="Tecla S" width={30} height={30} />{" "}
                Tecla S ou Seta Baixo: Acelerar a queda do bloco (soft drop).
              </li>
              <li>
                <Image src={imgGirar} alt="Tecla W" width={30} height={30} />{" "}
                Tecla W ou Seta Cima: Rotacionar o bloco.
              </li>
            </ul>
            <h3>Pontuação:</h3>
            <ul>
              <li>1 Linha: 10 pontos</li>
              <li>2 Linhas: 30 pontos</li>
              <li>3 Linhas: 60 pontos</li>
              <li>4 Linhas (Tetris): 100 pontos</li>
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
          <Button onClick={gameOver ? handleRestart : handleStartGame}>
            {gameOver ? "Reiniciar" : "Start"}
          </Button>
          <RulesButton onClick={() => setShowRules(true)}>Regras</RulesButton>
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
        <Canvas
          ref={canvasRef}
          width={BOARD_WIDTH * BLOCK_SIZE} // 16 * 15 = 240
          height={BOARD_HEIGHT * BLOCK_SIZE} // 27 * 15 = 405
        />
        <MobileControls>
          <MobileButton
            onMouseDown={() => startRepeatingAction(() => playerMove(-1))}
            onMouseUp={stopRepeatingAction}
            onTouchStart={() => startRepeatingAction(() => playerMove(-1))}
            onTouchEnd={stopRepeatingAction}
          >
            <ButtonImage src={imgLeft} alt="Tecla A" width={CONTROL_SIZE} height={CONTROL_SIZE} draggable="false" />
          </MobileButton>
          <MobileButton onClick={() => playerRotate()}>
            <ButtonImage src={imgRotate} alt="Tecla W" width={CONTROL_SIZE} height={CONTROL_SIZE} draggable="false" />
          </MobileButton>
          <MobileButton
            onMouseDown={() => startRepeatingAction(() => playerMove(1))}
            onMouseUp={stopRepeatingAction}
            onTouchStart={() => startRepeatingAction(() => playerMove(1))}
            onTouchEnd={stopRepeatingAction}
          >
            <ButtonImage src={imgRight} alt="Tecla D" width={CONTROL_SIZE} height={CONTROL_SIZE} draggable="false" />
          </MobileButton>
          <MobileButton
            onMouseDown={() => startRepeatingAction(() => playerDrop(), 50)}
            onMouseUp={stopRepeatingAction}
            onTouchStart={() => startRepeatingAction(() => playerDrop(), 50)}
            onTouchEnd={stopRepeatingAction}
          >
            <ButtonImage src={imgDown} alt="Tecla S" width={CONTROL_SIZE} height={CONTROL_SIZE} draggable="false" />
          </MobileButton>
        </MobileControls>
      </Game>
      <GamePoint>
        <Aside>
          <p>CONTROLES:</p><p> </p>
          <ul>
            <li>
              <Image src={imgEsquerda} alt="Tecla A" width={CONTROL_SIZE} height={CONTROL_SIZE} />-
              Esquerda
            </li>
            <li>
              <Image src={imgDireita} alt="Tecla D" width={CONTROL_SIZE} height={CONTROL_SIZE} />-
              Direita
            </li>
            <li>
              <Image src={imgBaixo} alt="Tecla S" width={CONTROL_SIZE} height={CONTROL_SIZE} />-
              Acelerar
            </li>
            <li>
              <Image src={imgGirar} alt="Tecla W" width={CONTROL_SIZE} height={CONTROL_SIZE} />-
              Girar
            </li>
          </ul>
        </Aside>
      </GamePoint>
    </PageWrapper>
  );
};

export default Tetris404;
