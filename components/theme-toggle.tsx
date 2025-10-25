"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
  };

  return (
    <button
      onClick={toggleTheme}
      className="text-sm px-3 py-1 border border-border hover:bg-card transition-colors w-8 h-8 flex items-center justify-center"
      aria-label="Toggle theme"
    >
      {mounted ? (theme === "dark" ? "☀" : "☾") : null}
    </button>
  );
}
