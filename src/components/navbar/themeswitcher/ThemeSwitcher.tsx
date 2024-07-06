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

const reactPosition = [
  { system: "left-0" },
  { light: "left-7" },
  { dark: "left-14" },
];

export default function ThemeSwitcher({ className }: Props) {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (resolvedTheme == "dark") console.log("DARKKKKK");
  if (resolvedTheme == "light") console.log("LIGHTTTT");

  return (
    <div className="relative rounded-md border-2 border-current">
      <div className="flex gap-2 px-1 py-1">
        <MonitorIcon className={iconOnHover} active={false} />
        <SunIcon
          className={iconOnHover}
          active={true}
          onClick={() => setTheme("light")}
        />
        <MoonIcon
          className={iconOnHover}
          active={false}
          onClick={() => setTheme("dark")}
        />
      </div>
      <div className="absolute left-7 top-0 h-7 w-7 rounded-sm bg-black transition-all duration-300 dark:bg-white"></div>
    </div>
  );
}
