import { twMerge } from "tailwind-merge";

export default function HrFullWidth({ className }: { className?: string }) {
  return (
    <hr
      className={twMerge(
        "h-[2px] w-screen -translate-x-[calc(2rem)] transform border-0 bg-current sm:-translate-x-[calc(4rem)] hr-line:-translate-x-[calc((100vw-80rem+8rem)/2)]",
        className
      )}
    />
  );
}
