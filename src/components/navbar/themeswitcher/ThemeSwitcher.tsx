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
  const { setTheme, theme } = useTheme();
  const [rectPosition, setRectPosition] = useState("left-0");

  useEffect(() => {
    changeRectPosition();
    setMounted(true);
  }, []);

  function changeRectPosition() {
    switch (theme) {
      case "light": {
        setRectPosition("left-7");
        break;
      }
      case "dark": {
        setRectPosition("left-14");
        break;
      }
      default: {
        setRectPosition("left-0");
        break;
      }
    }
  }

  useEffect(() => {
    changeRectPosition();
  }, [theme]);

  return (
    <div className="relative rounded-md border-2 border-current">
      {mounted ? (
        <>
          <div className="flex gap-2 px-1 py-1">
            <MonitorIcon
              className={iconOnHover}
              active={theme == "system" ? true : false}
              onClick={() => {
                setTheme("system");
              }}
            />
            <SunIcon
              className={iconOnHover}
              active={theme == "light" ? true : false}
              onClick={() => {
                setTheme("light");
              }}
            />
            <MoonIcon
              className={iconOnHover}
              active={theme == "dark" ? true : false}
              onClick={() => {
                setTheme("dark");
              }}
            />
          </div>
          <div
            className={
              "absolute top-0 h-7 w-7 rounded-sm bg-black transition-all duration-300 dark:bg-white" +
              ` ${rectPosition}`
            }
          ></div>
        </>
      ) : (
        <div className="flex gap-2 px-1 py-1">
          <MonitorIcon className={iconOnHover} />
          <SunIcon className={iconOnHover} />
          <MoonIcon className={iconOnHover} />
        </div>
      )}
    </div>
  );
}
