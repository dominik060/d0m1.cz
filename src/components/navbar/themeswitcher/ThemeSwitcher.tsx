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
  const [themePreference, setThemePreference] = useState(resolvedTheme);

  useEffect(() => {
    setThemePreference(resolvedTheme);
    setMounted(true);
  }, []);

  useEffect(() => {
    switch (themePreference) {
      case "light": {
        setTheme("light");
        setRectPosition("left-7");
        break;
      }
      case "dark": {
        setTheme("dark");
        setRectPosition("left-14");
        break;
      }
      default: {
        setTheme("system");
        setRectPosition("left-0");
        break;
      }
    }
  }, [themePreference]);

  return (
    <div className="relative rounded-md border-2 border-current">
      {mounted ? (
        <div className="flex gap-2 px-1 py-1">
          <MonitorIcon
            className={iconOnHover}
            active={themePreference == "system" ? true : false}
            onClick={() => {
              setThemePreference("system");
              console.log(resolvedTheme);
            }}
          />
          <SunIcon
            className={iconOnHover}
            active={themePreference == "light" ? true : false}
            onClick={() => {
              setThemePreference("light");
              console.log(resolvedTheme);
            }}
          />
          <MoonIcon
            className={iconOnHover}
            active={themePreference == "dark" ? true : false}
            onClick={() => {
              setThemePreference("dark");
              console.log(resolvedTheme);
            }}
          />
        </div>
      ) : (
        <div className="flex gap-2 px-1 py-1">
          <MonitorIcon className={iconOnHover} active={true} />
          <SunIcon className={iconOnHover} />
          <MoonIcon className={iconOnHover} />
        </div>
      )}
      <div
        className={
          "absolute top-0 h-7 w-7 rounded-sm bg-black transition-all duration-300 dark:bg-white" +
          ` ${rectPosition}`
        }
      ></div>
    </div>
  );
}
