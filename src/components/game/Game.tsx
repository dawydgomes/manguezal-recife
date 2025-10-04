import { useState, useEffect, useCallback, useRef } from 'react';
import { Box, Typography, Button } from '@mui/material';
import './game.css';

// --- Constantes do Jogo ---
const GAME_WIDTH = 600;
const GAME_HEIGHT = 200;
const CRAB_SIZE = 40;
const GROUND_HEIGHT = 20;
const GRAVITY = 0.7;
const JUMP_FORCE = -14;
const OBSTACLE_MIN_WIDTH = 20;
const OBSTACLE_MAX_WIDTH = 50;
const OBSTACLE_MIN_HEIGHT = 30;
const OBSTACLE_MAX_HEIGHT = 60;
const INITIAL_GAME_SPEED = 5;
const SPEED_INCREASE_RATE = 0.001;
const OBSTACLE_SPAWN_INTERVAL = 1800; // ms
const CRAB_X_POSITION = 60;

/**
 * @interface ObstacleState
 * @description Define a estrutura de um objeto de obstáculo.
 */
interface ObstacleState {
  x: number;
  width: number;
  height: number;
}

/**
 * @function Game
 * @description Componente principal que contém a lógica e a renderização do jogo do caranguejo.
 * @returns {JSX.Element} O componente do jogo.
 */
export const Game = () => {
  const [gameState, setGameState] = useState<'waiting' | 'playing' | 'gameOver'>('waiting');
  const [score, setScore] = useState(0);
  // State para forçar a re-renderização a cada quadro.
  const [, setRenderTime] = useState(0);

  // Refs para gerenciar o estado do jogo sem causar re-renderizações a cada quadro.
  const crabY = useRef(GAME_HEIGHT - GROUND_HEIGHT - CRAB_SIZE);
  const crabVelocityY = useRef(0);
  const obstacles = useRef<ObstacleState[]>([]);
  const gameSpeed = useRef(INITIAL_GAME_SPEED);
  const lastSpawnTime = useRef(0);
  const gameLoopId = useRef<number | null>(null);
  const scoreIntervalId = useRef<NodeJS.Timeout | null>(null);

  /**
   * @function resetGame
   * @description Reinicia o estado do jogo para seus valores iniciais.
   */
  const resetGame = useCallback(() => {
    crabY.current = GAME_HEIGHT - GROUND_HEIGHT - CRAB_SIZE;
    crabVelocityY.current = 0;
    obstacles.current = [];
    setScore(0);
    gameSpeed.current = INITIAL_GAME_SPEED;
    lastSpawnTime.current = 0;
  }, []);
  
  /**
   * @function startGame
   * @description Inicia uma nova partida.
   */
  const startGame = useCallback(() => {
    resetGame();
    setGameState('playing');
  }, [resetGame]);

  /**
   * @function gameLoop
   * @description O loop principal do jogo, responsável por atualizar o estado de todos os elementos.
   */
  const gameLoop = useCallback((currentTime: number) => {
    if (gameState !== 'playing') return;

    // --- Atualiza Posição do Caranguejo (Gravidade e Pulo) ---
    crabVelocityY.current += GRAVITY;
    crabY.current += crabVelocityY.current;

    // Garante que o caranguejo não caia abaixo do chão
    if (crabY.current >= GAME_HEIGHT - GROUND_HEIGHT - CRAB_SIZE) {
      crabY.current = GAME_HEIGHT - GROUND_HEIGHT - CRAB_SIZE;
      crabVelocityY.current = 0;
    }

    // --- Atualiza e Gera Obstáculos ---
    // Move os obstáculos existentes e remove os que saíram da tela
    obstacles.current = obstacles.current
      .map(obs => ({ ...obs, x: obs.x - gameSpeed.current }))
      .filter(obs => obs.x > -obs.width);

    // Gera um novo obstáculo em intervalos
    if (currentTime - lastSpawnTime.current > OBSTACLE_SPAWN_INTERVAL / (gameSpeed.current / INITIAL_GAME_SPEED)) {
      lastSpawnTime.current = currentTime;
      const newObstacle: ObstacleState = {
        x: GAME_WIDTH,
        width: Math.random() * (OBSTACLE_MAX_WIDTH - OBSTACLE_MIN_WIDTH) + OBSTACLE_MIN_WIDTH,
        height: Math.random() * (OBSTACLE_MAX_HEIGHT - OBSTACLE_MIN_HEIGHT) + OBSTACLE_MIN_HEIGHT,
      };
      obstacles.current.push(newObstacle);
    }

    // --- Aumenta a velocidade ---
    gameSpeed.current += SPEED_INCREASE_RATE;

    // --- Detecção de Colisão ---
    const crabRect = { x: CRAB_X_POSITION, y: crabY.current, width: CRAB_SIZE, height: CRAB_SIZE };
    for (const obs of obstacles.current) {
      const obsRect = { x: obs.x, y: GAME_HEIGHT - GROUND_HEIGHT - obs.height, width: obs.width, height: obs.height };
      if (
        crabRect.x < obsRect.x + obsRect.width &&
        crabRect.x + crabRect.width > obsRect.x &&
        crabRect.y < obsRect.y + obsRect.height &&
        crabRect.y + crabRect.height > obsRect.y
      ) {
        setGameState('gameOver');
        return; // Para o loop
      }
    }

    // Força uma re-renderização para mostrar as mudanças
    setRenderTime(currentTime);
    gameLoopId.current = requestAnimationFrame(gameLoop);
  }, [gameState]);

  /**
   * @function handleJump
   * @description Lida com o evento de pulo do caranguejo ao pressionar a barra de espaço.
   */
  const handleJump = useCallback((e: KeyboardEvent) => {
    if (e.code === 'Space') {
      e.preventDefault();
      if (gameState === 'playing' && crabY.current >= GAME_HEIGHT - GROUND_HEIGHT - CRAB_SIZE) {
        crabVelocityY.current = JUMP_FORCE;
      } else if (gameState === 'waiting' || gameState === 'gameOver') {
        startGame();
      }
    }
  }, [gameState, startGame]);
  
  // Efeito para controlar o loop do jogo
  useEffect(() => {
    if (gameState === 'playing') {
      gameLoopId.current = requestAnimationFrame(gameLoop);
      scoreIntervalId.current = setInterval(() => setScore(s => s + 1), 100);
    }
    return () => {
      if (gameLoopId.current) cancelAnimationFrame(gameLoopId.current);
      if (scoreIntervalId.current) clearInterval(scoreIntervalId.current);
    };
  }, [gameState, gameLoop]);
  
  // Efeito para registrar o listener de teclado
  useEffect(() => {
    window.addEventListener('keydown', handleJump);
    return () => window.removeEventListener('keydown', handleJump);
  }, [handleJump]);

  return (
    <Box className="game-container" sx={{ width: GAME_WIDTH, height: GAME_HEIGHT }}>
      <Typography className="score">Pontos: {score}</Typography>
      
      <Box className="crab" style={{ bottom: GAME_HEIGHT - CRAB_SIZE - crabY.current, left: CRAB_X_POSITION, width: CRAB_SIZE, height: CRAB_SIZE }} />

      {obstacles.current.map((obs, i) => (
        <Box
          key={i}
          className="obstacle"
          style={{
            left: obs.x,
            width: obs.width,
            height: obs.height,
          }}
        />
      ))}
      
      <Box className="ground" sx={{ height: GROUND_HEIGHT }} />
      
      {gameState !== 'playing' && (
        <Box className="game-overlay">
          <Typography variant="h4">
            {gameState === 'gameOver' ? 'Fim de Jogo!' : 'Caranguejo Run'}
          </Typography>
          <Button variant="contained" onClick={startGame} sx={{ mt: 2 }}>
            {gameState === 'gameOver' ? 'Tentar Novamente' : 'Iniciar'}
          </Button>
        </Box>
      )}
    </Box>
  );
};
