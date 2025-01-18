"use client";

import { useEffect, useState } from "react";

interface Drop {
  id: number;
  x: number;
  y: number;
  scale: number;
  opacity: number;
  hue: number;
}

export default function WaterDropCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [drops, setDrops] = useState<Drop[]>([]);
  const [lastDrop, setLastDrop] = useState({ x: 0, y: 0 });
  const [mouseSpeed, setMouseSpeed] = useState(0);

  useEffect(() => {
    let lastTime = performance.now();
    let lastX = 0;
    let lastY = 0;
    const dropInterval = 80; // Slightly faster drops

    const updateCursorPosition = (e: MouseEvent) => {
      const currentTime = performance.now();
      const deltaTime = currentTime - lastTime;

      // Calculate mouse speed
      const speed =
        Math.hypot(e.clientX - lastX, e.clientY - lastY) / deltaTime;
      setMouseSpeed(speed);

      setPosition({ x: e.clientX, y: e.clientY });

      // Calculate distance moved
      const distance = Math.hypot(
        e.clientX - lastDrop.x,
        e.clientY - lastDrop.y
      );

      // Create new drop if enough time has passed and mouse has moved enough
      if (currentTime - lastTime > dropInterval && distance > 40) {
        const newDrop: Drop = {
          id: currentTime,
          x: e.clientX,
          y: e.clientY,
          scale: 1 + speed * 0.1, // Larger drops when moving faster
          opacity: 0.6,
          hue: (currentTime % 360) - 180, // Subtle color variation in dark tones
        };

        setDrops((prevDrops) => [...prevDrops.slice(-6), newDrop]); // Keep last 6 drops
        setLastDrop({ x: e.clientX, y: e.clientY });
        lastTime = currentTime;
      }

      lastX = e.clientX;
      lastY = e.clientY;
    };

    window.addEventListener("mousemove", updateCursorPosition);

    // Animate drops fading out
    const fadeInterval = setInterval(() => {
      setDrops((prevDrops) =>
        prevDrops
          .map((drop) => ({
            ...drop,
            opacity: drop.opacity * 0.93,
            scale: drop.scale * 0.97,
          }))
          .filter((drop) => drop.opacity > 0.05)
      );
    }, 40);

    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
      clearInterval(fadeInterval);
    };
  }, [lastDrop]);

  return (
    <>
      {/* Trail drops */}
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="pointer-events-none fixed left-0 top-0 z-40"
          style={{
            transform: `translate(${drop.x}px, ${drop.y}px) translate(-50%, -50%) scale(${drop.scale})`,
            opacity: drop.opacity,
          }}
        >
          <div className="relative">
            <div
              className="size-3 rounded-full backdrop-blur-md"
              style={{
                background: `radial-gradient(circle at 30% 30%, 
                  hsl(${drop.hue}, 70%, 60%), 
                  hsl(${drop.hue}, 70%, 30%))`,
              }}
            />
            <div
              className="absolute inset-0 rounded-full"
              style={{
                boxShadow: `0 0 10px 2px hsla(${drop.hue}, 70%, 50%, 0.3)`,
                animation: "pulse 2s infinite",
              }}
            />
          </div>
        </div>
      ))}

      {/* Main cursor drop */}
      <div
        className="pointer-events-none fixed left-0 top-0 z-50 -translate-x-1/2 -translate-y-1/2"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
        }}
      >
        <div className="relative">
          {/* Drop shape with dynamic glow based on speed */}
          <div
            className="absolute size-6 backdrop-blur-lg"
            style={{
              clipPath:
                'path("M3 0C1.34315 0 0 1.34315 0 3C0 4.65685 1.34315 6 3 6C4.65685 6 6 4.65685 6 3C6 1.34315 4.65685 0 3 0ZM3 0.5C4.38071 0.5 5.5 1.61929 5.5 3C5.5 4.38071 4.38071 5.5 3 5.5C1.61929 5.5 0.5 4.38071 0.5 3C0.5 1.61929 1.61929 0.5 3 0.5Z")',
              background: `radial-gradient(circle at 30% 30%, 
                rgba(180, 180, 255, 0.9), 
                rgba(100, 100, 200, 0.7))`,
              boxShadow: `0 0 ${10 + mouseSpeed * 2}px ${
                4 + mouseSpeed
              }px rgba(120, 120, 255, 0.5)`,
              transform: `scale(${1 + mouseSpeed * 0.05})`,
              transition: "transform 0.1s ease-out",
            }}
          />
          {/* Highlight */}
          <div className="absolute left-1 top-1 size-2 rounded-full bg-blue-200/90" />
          {/* Ripple effect */}
          <div
            className="absolute size-8 -translate-x-1 -translate-y-1 rounded-full"
            style={{
              background:
                "radial-gradient(circle, rgba(100, 100, 255, 0.2) 0%, transparent 70%)",
              animation: "ripple 1.5s infinite",
            }}
          />
        </div>
      </div>
    </>
  );
}
