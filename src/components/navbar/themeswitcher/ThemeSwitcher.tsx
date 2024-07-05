import MonitorIcon from "./MonitorIcon";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";

type Props = {
  className?: string;
};

const iconOnHover: string = "transition-all duration-300 hover:stroke-gray-400";

const reactPosition = [
  { system: "left-0" },
  { light: "left-7" },
  { dark: "left-14" },
];

export default function ThemeSwitcher({ className }: Props) {
  return (
    <div className="relative rounded-md border-2 border-current">
      <div className="flex gap-2 px-1 py-1">
        <MonitorIcon className={iconOnHover} active={false} />
        <SunIcon className={iconOnHover} active={true} />
        <MoonIcon className={iconOnHover} active={false} />
      </div>
      <div className="absolute left-7 top-0 -z-10 h-7 w-7 rounded-sm bg-current transition-all duration-300"></div>
    </div>
  );
}
