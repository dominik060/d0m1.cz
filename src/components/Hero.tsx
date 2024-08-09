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

      if (0 > x || x > rect.width || 0 > y || y > rect.height) return;

      bubble.style.left = `${mouse.x! - bubble.clientWidth / 2}px`;
      bubble.style.top = `${mouse.y! - bubble.clientHeight / 2}px`;
    };
  }, [mouse]);

  return (
    <div className="relative z-10 flex h-[80%] flex-col items-center justify-center text-center">
      <h1
        className="group/hero relative z-30 bg-gradient-blue-light bg-clip-text text-3xl font-black text-transparent dark:bg-gradient-blue-dark sm:text-5xl md:text-6xl"
        id="hero-text"
        ref={ref}
      >
        Forming Tomorrow's
        <br />
        Digital Landscape.
        <div
          className="bg-radial-dark absolute left-0 top-0 z-40 h-[800px] w-[800px] overflow-visible opacity-0 duration-100 group-hover/hero:opacity-100"
          id="bubble"
        ></div>
      </h1>
    </div>
  );
}
