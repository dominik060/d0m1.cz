import { MouseEventHandler } from "react";

type Props = {
  className?: string;
  active?: boolean;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

export default function MonitorIcon({ className, active, onClick }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={active ? className + " text-white dark:text-black" : className}
      onClick={onClick}
    >
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
      <line x1="8" y1="21" x2="16" y2="21"></line>
      <line x1="12" y1="17" x2="12" y2="21"></line>
    </svg>
  );
}
