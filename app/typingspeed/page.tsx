"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Timer,
  RefreshCw,
  Keyboard,
  Zap,
  Target,
  Award,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";

const sampleTexts = [
  "In the depths of winter, I finally learned that there within me lay an invincible summer that could brighten any dark day.",
  "The only limit to our realization of tomorrow will be our doubts of today. Let us move forward with strong and active faith in the future.",
  "Life is not measured by the number of breaths we take, but by the moments that take our breath away. Make every second count.",
  "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.",
  "The future belongs to those who believe in the beauty of their dreams. Dream big and dare to fail, for in failure lies the seeds of success.",
  "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. So throw off the bowlines.",
  "The greatest glory in living lies not in never falling, but in rising every time we fall. Embrace challenges as opportunities for growth.",
  "Everything you've ever wanted is on the other side of fear. Take that first step, even when you can't see the whole staircase.",
  "Your time is limited, don't waste it living someone else's life. Don't let the noise of others' opinions drown out your inner voice.",
  "The only way to do great work is to love what you do. If you haven't found it yet, keep looking. Don't settle for anything less.",
];

export default function Home() {
  const [text, setText] = useState("");
  const [userInput, setUserInput] = useState("");
  const [timeLeft, setTimeLeft] = useState(60);
  const [isActive, setIsActive] = useState(false);
  const [wpm, setWpm] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [highScore, setHighScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [perfectWords, setPerfectWords] = useState(0);
  const [level, setLevel] = useState(1);
  const [showMotivation, setShowMotivation] = useState(false);

  const getRandomText = useCallback(() => {
    const randomIndex = Math.floor(Math.random() * sampleTexts.length);
    return sampleTexts[randomIndex];
  }, []);

  const resetGame = useCallback(() => {
    setText(getRandomText());
    setUserInput("");
    setTimeLeft(60);
    setIsActive(false);
    setWpm(0);
    setAccuracy(100);
    setStreak(0);
    setPerfectWords(0);
  }, [getRandomText]);

  useEffect(() => {
    resetGame();
  }, [resetGame]);

  useEffect(() => {
    let interval: ReturnType<typeof setInterval>;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((time) => time - 1);

        const wordsTyped = userInput.trim().split(/\s+/).length;
        const minutesElapsed = (60 - timeLeft) / 60;
        if (minutesElapsed > 0) {
          const currentWpm = Math.round(wordsTyped / minutesElapsed);
          setWpm(currentWpm);

          // Level system based on WPM
          if (currentWpm >= level * 20) {
            setLevel((prev) => prev + 1);
            setShowMotivation(true);
            setTimeout(() => setShowMotivation(false), 2000);
          }
        }
      }, 1000);
    } else if (timeLeft === 0) {
      if (wpm > highScore) {
        setHighScore(wpm);
      }
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft, userInput, wpm, highScore, level]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (!isActive && value.length === 1) {
      setIsActive(true);
    }

    let currentStreak = 0;
    let perfectWordCount = 0;

    value.split("").forEach((char, index) => {
      if (char !== text[index]) {
        // newMistakes.push(index);
      } else {
        currentStreak++;
      }
    });

    // Count perfect words
    const words = value.split(" ");
    words.forEach((word, idx) => {
      const originalWord = text.split(" ")[idx];
      if (word === originalWord) {
        perfectWordCount++;
      }
    });

    setStreak(currentStreak);
    setPerfectWords(perfectWordCount);

    const totalChars = value.length;
    const correctChars =
      totalChars - value.split("").filter((char, i) => char !== text[i]).length;
    const newAccuracy =
      totalChars === 0 ? 100 : Math.round((correctChars / totalChars) * 100);
    setAccuracy(newAccuracy);

    setUserInput(value);
  };

  const getMotivationalMessage = () => {
    if (accuracy >= 98) return "Perfect typing!";
    if (accuracy >= 95) return "Amazing accuracy!";
    if (wpm >= 60) return "Speed demon!";
    if (streak >= 20) return "On fire!";
    return "Keep going!";
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[conic-gradient(at_top_right,_var(--tw-gradient-stops))] from-indigo-900 via-purple-900 to-pink-900 p-4">
      {showMotivation && (
        <div className="animate-pop fixed left-1/2 top-1/4 z-50 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-full bg-yellow-400 px-6 py-3 text-xl font-bold text-black">
          <Sparkles className="size-5" />
          Level Up! Now Level {level}
        </div>
      )}

      <Card className="w-full max-w-4xl space-y-8 rounded-xl bg-white/95 p-8 shadow-2xl backdrop-blur-sm">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <Keyboard className="size-8 text-purple-600" />
              <h1 className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-4xl font-bold text-transparent">
                Speed Typer Pro
              </h1>
            </div>
            <p className="text-gray-600">Master the art of typing</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="rounded-lg bg-purple-50 px-4 py-2 text-center">
              <p className="text-sm font-medium text-purple-600">Level</p>
              <p className="text-xl font-bold text-purple-800">{level}</p>
            </div>
            <Button
              variant="outline"
              size="icon"
              onClick={resetGame}
              className="size-10 rounded-full transition-colors hover:bg-purple-50 hover:text-purple-600"
            >
              <RefreshCw className="size-5" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          <div className="rounded-lg bg-purple-50 p-4 text-center">
            <div className="mb-1 flex items-center justify-center gap-2">
              <Timer className="size-4 text-purple-600" />
              <p className="text-sm font-medium text-gray-600">Time Left</p>
            </div>
            <p className="text-2xl font-bold text-purple-600">{timeLeft}s</p>
          </div>

          <div className="rounded-lg bg-blue-50 p-4 text-center">
            <div className="mb-1 flex items-center justify-center gap-2">
              <Zap className="size-4 text-blue-600" />
              <p className="text-sm font-medium text-gray-600">WPM</p>
            </div>
            <p className="text-2xl font-bold text-blue-600">{wpm}</p>
          </div>

          <div className="rounded-lg bg-green-50 p-4 text-center">
            <div className="mb-1 flex items-center justify-center gap-2">
              <Target className="size-4 text-green-600" />
              <p className="text-sm font-medium text-gray-600">Accuracy</p>
            </div>
            <p className="text-2xl font-bold text-green-600">{accuracy}%</p>
          </div>

          <div className="rounded-lg bg-yellow-50 p-4 text-center">
            <div className="mb-1 flex items-center justify-center gap-2">
              <Award className="size-4 text-yellow-600" />
              <p className="text-sm font-medium text-gray-600">Perfect Words</p>
            </div>
            <p className="text-2xl font-bold text-yellow-600">{perfectWords}</p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-lg bg-gray-50 p-6 shadow-inner">
            <p className="text-lg leading-relaxed">
              {text.split("").map((char, index) => (
                <span
                  key={index}
                  className={cn("transition-colors duration-100", {
                    "text-green-600 font-medium": userInput[index] === char,
                    "text-red-500 font-medium bg-red-100 rounded":
                      userInput[index] && userInput[index] !== char,
                    "text-gray-300": index > userInput.length - 1,
                  })}
                >
                  {char}
                </span>
              ))}
            </p>
          </div>

          <div className="relative">
            <input
              type="text"
              value={userInput}
              onChange={handleInput}
              placeholder={isActive ? "" : "Type to start..."}
              className={cn(
                "w-full p-4 rounded-lg border-2 focus:outline-none focus:ring-2 transition-all",
                "placeholder:text-gray-400",
                isActive
                  ? "border-purple-300 focus:border-purple-400 focus:ring-purple-200"
                  : "border-gray-200 focus:border-gray-300 focus:ring-gray-100"
              )}
              disabled={timeLeft === 0}
            />
            {isActive && accuracy > 90 && (
              <div className="absolute right-4 top-1/2 -translate-y-1/2 text-sm font-medium text-purple-600">
                {getMotivationalMessage()}
              </div>
            )}
          </div>

          <div className="space-y-2">
            <Progress
              value={(userInput.length / text.length) * 100}
              className="h-2"
            />
            <div className="flex justify-between text-sm text-gray-500">
              <span>Progress</span>
              <span>{Math.round((userInput.length / text.length) * 100)}%</span>
            </div>
          </div>
        </div>

        {timeLeft === 0 && (
          <div className="rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 p-8 text-center animate-in fade-in-50">
            <h2 className="mb-4 text-3xl font-bold text-purple-600">
              Time up!
            </h2>
            <div className="mb-6 grid grid-cols-3 gap-4">
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <p className="mb-1 text-gray-600">Final Speed</p>
                <p className="text-2xl font-bold text-blue-600">{wpm} WPM</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <p className="mb-1 text-gray-600">Accuracy</p>
                <p className="text-2xl font-bold text-green-600">{accuracy}%</p>
              </div>
              <div className="rounded-lg bg-white p-4 shadow-sm">
                <p className="mb-1 text-gray-600">Perfect Words</p>
                <p className="text-2xl font-bold text-yellow-600">
                  {perfectWords}
                </p>
              </div>
            </div>
            <Button
              onClick={resetGame}
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-2 text-white hover:from-purple-700 hover:to-pink-700"
            >
              Try Again
            </Button>
          </div>
        )}
      </Card>
    </div>
  );
}
