"use client";

import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, RotateCcw, Play, Pause, Trophy, Gamepad2 } from "lucide-react";

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SPEED = 150;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION = "RIGHT";
const INITIAL_FOOD = { x: 15, y: 15 };

const SnakeGame = () => {
  const [snake, setSnake] = useState(INITIAL_SNAKE);
  const [food, setFood] = useState(INITIAL_FOOD);
  const [direction, setDirection] = useState(INITIAL_DIRECTION);
  const [isGameOver, setIsGameOver] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isPaused, setIsPaused] = useState(true);
  const [showScoreAnimation, setShowScoreAnimation] = useState(false);

  const generateFood = useCallback(() => {
    return {
      x: Math.floor(Math.random() * GRID_SIZE),
      y: Math.floor(Math.random() * GRID_SIZE),
    };
  }, []);
  type SnakeSegment = { x: number; y: number };

  const checkCollision = useCallback(
    (head: SnakeSegment) => {
      if (
        head.x < 0 ||
        head.x >= GRID_SIZE ||
        head.y < 0 ||
        head.y >= GRID_SIZE
      ) {
        return true;
      }
      return snake
        .slice(1)
        .some((segment) => segment.x === head.x && segment.y === head.y);
    },
    [snake]
  );

  useEffect(() => {
    if (isPaused || isGameOver) return;

    const moveSnake = () => {
      const head = { ...snake[0] };

      switch (direction) {
        case "UP":
          head.y--;
          break;
        case "DOWN":
          head.y++;
          break;
        case "LEFT":
          head.x--;
          break;
        case "RIGHT":
          head.x++;
          break;
      }

      if (checkCollision(head)) {
        setIsGameOver(true);
        setHighScore((prev) => Math.max(prev, score));
        return;
      }

      const newSnake = [head, ...snake];

      if (head.x === food.x && head.y === food.y) {
        setFood(generateFood());
        setScore((prev) => prev + 10);
        setShowScoreAnimation(true);
        setTimeout(() => setShowScoreAnimation(false), 500);
      } else {
        newSnake.pop();
      }

      setSnake(newSnake);
    };

    const gameInterval = setInterval(moveSnake, INITIAL_SPEED);
    return () => clearInterval(gameInterval);
  }, [
    snake,
    direction,
    food,
    isPaused,
    isGameOver,
    checkCollision,
    generateFood,
    score,
  ]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          if (direction !== "DOWN") setDirection("UP");
          break;
        case "ArrowDown":
          if (direction !== "UP") setDirection("DOWN");
          break;
        case "ArrowLeft":
          if (direction !== "RIGHT") setDirection("LEFT");
          break;
        case "ArrowRight":
          if (direction !== "LEFT") setDirection("RIGHT");
          break;
        case " ":
          setIsPaused((prev) => !prev);
          break;
      }
    };

    document.addEventListener("keydown", handleKeyPress);
    return () => document.removeEventListener("keydown", handleKeyPress);
  }, [direction]);

  const resetGame = () => {
    setSnake(INITIAL_SNAKE);
    setFood(INITIAL_FOOD);
    setDirection(INITIAL_DIRECTION);
    setIsGameOver(false);
    setScore(0);
    setIsPaused(true);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-black py-48">
      <Card className="w-full max-w-lg rounded-xl border border-zinc-800 bg-zinc-900/90 p-6 shadow-2xl">
        <CardHeader className="text-center">
          <div className="mb-2 flex items-center justify-center gap-2">
            <Gamepad2 className="size-8 text-emerald-500" />
            <CardTitle className="text-4xl font-bold text-white">
              Snake Game
            </CardTitle>
          </div>
          <div className="mt-4 flex justify-center gap-8">
            <div className="flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 text-lg">
              <Trophy className="size-5 text-emerald-500" />
              <span className="font-bold text-white">{score}</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-zinc-800 px-4 py-2 text-lg">
              <Award className="size-5 text-emerald-500" />
              <span className="font-bold text-white">{highScore}</span>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div
            className="relative mb-4"
            style={{
              width: GRID_SIZE * CELL_SIZE,
              height: GRID_SIZE * CELL_SIZE,
            }}
          >
            <div
              className="absolute rounded-lg border-2 border-zinc-800 bg-zinc-950"
              style={{
                width: GRID_SIZE * CELL_SIZE,
                height: GRID_SIZE * CELL_SIZE,
              }}
            >
              {/* Snake */}
              {snake.map((segment, index) => (
                <div
                  key={index}
                  className="absolute rounded-full transition-all duration-100"
                  style={{
                    width: CELL_SIZE - 2,
                    height: CELL_SIZE - 2,
                    left: segment.x * CELL_SIZE,
                    top: segment.y * CELL_SIZE,
                    background:
                      index === 0
                        ? "linear-gradient(45deg, #059669, #10b981)"
                        : "linear-gradient(45deg, #047857, #059669)",
                    boxShadow:
                      index === 0 ? "0 0 10px rgba(16, 185, 129, 0.5)" : "none",
                    transform: `scale(${index === 0 ? 1.1 : 1})`,
                  }}
                />
              ))}
              {/* Food */}
              <div
                className="absolute animate-pulse"
                style={{
                  width: CELL_SIZE - 2,
                  height: CELL_SIZE - 2,
                  left: food.x * CELL_SIZE,
                  top: food.y * CELL_SIZE,
                  background: "linear-gradient(45deg, #dc2626, #ef4444)",
                  borderRadius: "50%",
                  boxShadow: "0 0 15px rgba(220, 38, 38, 0.6)",
                }}
              />
            </div>
          </div>

          {/* Score Animation */}
          {showScoreAnimation && (
            <div className="absolute animate-bounce text-2xl font-bold text-emerald-500">
              +10
            </div>
          )}

          {/* Game over overlay */}
          {isGameOver && (
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-black/80 backdrop-blur-sm">
              <div className="mb-4 animate-bounce text-3xl font-bold text-white">
                Game Over!
              </div>
              <div className="mb-4 text-xl text-emerald-500">
                Final Score: {score}
              </div>
              <Button
                onClick={resetGame}
                className="bg-emerald-600 text-white shadow-lg transition-all duration-200 hover:scale-105 hover:bg-emerald-700"
              >
                <RotateCcw className="mr-2 size-4" />
                Play Again
              </Button>
            </div>
          )}

          <div className="mt-6 flex justify-center gap-4">
            <Button
              onClick={() => setIsPaused((prev) => !prev)}
              className={`transition-all duration-200 hover:scale-105${
                isPaused
                  ? "bg-emerald-600 hover:bg-emerald-700"
                  : "bg-red-600 hover:bg-red-700"
              } text-white`}
            >
              {isPaused ? (
                <Play className="mr-2 size-4" />
              ) : (
                <Pause className="mr-2 size-4" />
              )}
              {isPaused ? "Play" : "Pause"}
            </Button>
            <Button
              onClick={resetGame}
              variant="outline"
              className="border-zinc-700 text-zinc-300 transition-all duration-200 hover:scale-105 hover:bg-zinc-800"
            >
              <RotateCcw className="mr-2 size-4" />
              Reset
            </Button>
          </div>

          <div className="mt-6 rounded-lg border border-zinc-700 bg-zinc-800/50 p-4 text-center text-zinc-400">
            <p className="font-medium">Controls</p>
            <p className="mt-1 text-sm">
              Use ← ↑ ↓ → keys to move • Space to pause
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SnakeGame;
