import { twMerge } from "tailwind-merge";

// → 'hover:bg-dark-red p-3 bg-[#B91C1C]'

type Props = {
  className?: string;
  children: React.ReactNode;
};
export default function Card({ className, children }: Props) {
  className = " " + className;
  return (
    <div
      className={twMerge(
        "rounded-lg border-2 border-black border-opacity-60 p-4 dark:border-white dark:border-opacity-60",
        className
      )}
    >
      {children}
    </div>
  );
}
