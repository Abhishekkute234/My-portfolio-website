"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { RefreshCcw, Trophy, X, Circle } from "lucide-react";
import { cn } from "@/lib/utils";

type Player = "X" | "O" | null;
type BoardState = Player[];

export default function Home() {
  const [board, setBoard] = useState<BoardState>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState<boolean>(true);
  const [scores, setScores] = useState({ X: 0, O: 0 });
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [winningCombination, setWinningCombination] = useState<number[]>([]);
  const [lastMove, setLastMove] = useState<number | null>(null);

  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const checkWinner = (squares: BoardState): [Player, number[]] => {
    for (const pattern of winningPatterns) {
      const [a, b, c] = pattern;
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return [squares[a], pattern];
      }
    }
    return [null, []];
  };

  const handleClick = (index: number) => {
    if (board[index] || gameOver) return;

    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setLastMove(index);

    const [winner, winningPattern] = checkWinner(newBoard);
    if (winner) {
      setScores((prev) => ({
        ...prev,
        [winner]: prev[winner as keyof typeof prev] + 1,
      }));
      setWinningCombination(winningPattern);
      setGameOver(true);
    } else if (!newBoard.includes(null)) {
      setGameOver(true);
    }

    setIsXNext(!isXNext);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameOver(false);
    setWinningCombination([]);
    setLastMove(null);
  };

  const resetScores = () => {
    setScores({ X: 0, O: 0 });
    resetGame();
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-slate-900 via-purple-900 to-slate-900 py-40">
      <Card className="w-full max-w-md space-y-8 rounded-xl bg-white/95 p-8 shadow-2xl backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <h1 className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-4xl font-bold text-transparent">
              Tic Tac Toe
            </h1>
            <div className="flex items-center gap-2">
              {gameOver && winningCombination.length > 0 && (
                <Trophy className="size-5 animate-bounce text-yellow-500" />
              )}
              <p
                className={cn(
                  "text-sm font-medium",
                  gameOver &&
                    winningCombination.length > 0 &&
                    "text-lg font-semibold text-purple-600"
                )}
              >
                {gameOver
                  ? winningCombination.length > 0
                    ? `Player ${isXNext ? "O" : "X"} wins!`
                    : "It's a draw!"
                  : `Player ${isXNext ? "X" : "O"}'s turn`}
              </p>
            </div>
          </div>
          <Button
            variant="outline"
            size="icon"
            onClick={resetGame}
            className="size-10 rounded-full bg-white transition-colors hover:bg-purple-50 hover:text-purple-600"
          >
            <RefreshCcw className="size-5" />
          </Button>
        </div>

        <div className="grid aspect-square grid-cols-3 gap-4">
          {board.map((cell, index) => (
            <Button
              key={index}
              variant="outline"
              className={cn(
                "h-full aspect-square text-3xl font-bold transition-all duration-300",
                "hover:scale-105 hover:shadow-lg hover:border-purple-300",
                "active:scale-95",
                {
                  "bg-purple-50 border-purple-200":
                    winningCombination.includes(index),
                  "animate-pop": lastMove === index,
                  "cursor-not-allowed opacity-50":
                    gameOver && !winningCombination.includes(index),
                }
              )}
              onClick={() => handleClick(index)}
            >
              {cell &&
                (cell === "X" ? (
                  <X
                    className={cn(
                      "w-8 h-8 transition-all duration-300",
                      "text-blue-500 stroke-2",
                      lastMove === index && "animate-in zoom-in-50"
                    )}
                  />
                ) : (
                  <Circle
                    className={cn(
                      "w-8 h-8 transition-all duration-300",
                      "text-red-500 stroke-2",
                      lastMove === index && "animate-in zoom-in-50"
                    )}
                  />
                ))}
            </Button>
          ))}
        </div>

        <div className="flex items-center justify-between border-t border-purple-100 pt-6">
          <div className="flex gap-8">
            <div className="text-center">
              <div className="mb-1 flex items-center gap-2">
                <X className="size-4 text-blue-500" />
                <p className="text-sm font-medium text-gray-600">Player X</p>
              </div>
              <p className="text-3xl font-bold text-blue-500">{scores.X}</p>
            </div>
            <div className="text-center">
              <div className="mb-1 flex items-center gap-2">
                <Circle className="size-4 text-red-500" />
                <p className="text-sm font-medium text-gray-600">Player O</p>
              </div>
              <p className="text-3xl font-bold text-red-500">{scores.O}</p>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={resetScores}
            className="bg-white text-sm transition-colors hover:bg-purple-50 hover:text-purple-600"
          >
            Reset Scores
          </Button>
        </div>
      </Card>
    </div>
  );
}
