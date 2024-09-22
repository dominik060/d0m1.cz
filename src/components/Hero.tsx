"use client";

import useMouse, { MousePosition } from "@react-hook/mouse-position";
import { useEffect, useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  useEffect(() => {
    if (!mouse || !ref.current || !mouse.x || !mouse.y) return;

    const heroText = document.getElementById("hero-text")!;
    const bubble = document.getElementById("bubble")!;

    heroText.onmousemove = (e) => {
      const rect = heroText.getBoundingClientRect(),
        x = mouse.x!,
        y = mouse.y!;

      if (0 > x || x > rect.width || 0 > y || y > rect.height) {
        bubble.style.opacity = "0";
        return;
      }

      bubble.style.left = `${mouse.x! - bubble.clientWidth / 2}px`;
      bubble.style.top = `${mouse.y! - bubble.clientHeight / 2}px`;
      bubble.style.opacity = "1";
    };
  }, [mouse]);

  return (
    <div className="flex h-[80%] flex-col items-center justify-center text-center">
      <h1
        className="relative bg-gradient-blue-light bg-clip-text text-3xl font-black text-transparent dark:bg-gradient-blue-dark sm:text-5xl md:text-6xl"
        id="hero-text"
        ref={ref}
      >
        Forming Tomorrow's
        <br />
        Digital Landscape.
        <div
          className="absolute left-0 top-0 h-[600px] w-[800px] bg-radial-light opacity-0 duration-200 dark:bg-radial-dark"
          id="bubble"
        ></div>
      </h1>
    </div>
  );
}
