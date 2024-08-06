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
    if (!mouse || !ref.current) return;

    const heroText = document.getElementById("hero-text")!;

    heroText.onmousemove = (e) => {
      const rect = heroText.getBoundingClientRect(),
        x = mouse.clientX! - rect.left,
        y = mouse.clientY! - rect.top;

      heroText.style.setProperty("--mouse-x", `${x}px`);
      heroText.style.setProperty("--mouse-y", `${y}px`);
    };
  }, [mouse]);

  return (
    <div
      className="relative z-10 flex h-[80%] flex-col items-center justify-center text-center"
      id="hero-text"
    >
      <h1
        className="z-20 bg-gradient-blue-light bg-clip-text text-3xl font-black text-transparent after:absolute after:left-0 after:top-0 after:z-30 after:h-full after:w-full after:overflow-visible after:bg-after-dark after:opacity-0 after:duration-500 hover:after:opacity-100 dark:bg-gradient-blue-dark sm:text-5xl md:text-6xl"
        ref={ref}
      >
        Forming Tomorrow's
        <br />
        Digital Landscape.
      </h1>
    </div>
  );
}
