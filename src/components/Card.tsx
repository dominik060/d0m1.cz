import { twMerge } from "tailwind-merge";

type Props = {
  className?: string;
  children: React.ReactNode;
  ref?: React.RefObject<HTMLDivElement>;
};
export default function Card({ className, children, ref }: Props) {
  className = " " + className;
  return (
    <div className={twMerge("rounded-lg", className)} ref={ref}>
      {children}
    </div>
  );
}
