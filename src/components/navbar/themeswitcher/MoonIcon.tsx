import { MouseEventHandler } from "react";

type Props = {
  className?: string;
  active?: boolean;
  onClick?: MouseEventHandler<SVGSVGElement>;
};

export default function MoonIcon({ className, active, onClick }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={active ? className + " text-white dark:text-black" : className}
      onClick={onClick}
    >
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
    </svg>
  );
}
