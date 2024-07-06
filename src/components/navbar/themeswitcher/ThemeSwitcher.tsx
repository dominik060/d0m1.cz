"use client";

import { useEffect, useState } from "react";
import MonitorIcon from "./MonitorIcon";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";
import { useTheme } from "next-themes";

type Props = {
  className?: string;
};

const iconOnHover: string =
  "transition-all duration-300 hover:stroke-gray-400 z-50";

export default function ThemeSwitcher({ className }: Props) {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [rectPosition, setRectPosition] = useState("left-0");

  useEffect(() => setMounted(true), []);

  return (
    <div className="relative rounded-md border-2 border-current">
      <div className="flex gap-2 px-1 py-1">
        <MonitorIcon
          className={iconOnHover}
          active={false}
          onClick={() => {
            setTheme("system");

            setRectPosition("left-0");
          }}
        />
        <SunIcon
          className={iconOnHover}
          active={resolvedTheme == "light" ? true : false}
          onClick={() => {
            setTheme("light");
            setRectPosition("left-7");
          }}
        />
        <MoonIcon
          className={iconOnHover}
          active={resolvedTheme == "dark" ? true : false}
          onClick={() => {
            setTheme("dark");
            setRectPosition("left-14");
          }}
        />
      </div>
      <div
        className={
          "absolute top-0 h-7 w-7 rounded-sm bg-black transition-all duration-300 dark:bg-white" +
          ` ${rectPosition}`
        }
      ></div>
    </div>
  );
}
