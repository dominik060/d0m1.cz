import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Header() {
  return (
    <header className="border-b border-border p-4 flex items-center justify-center">
      <div className="flex w-full max-w-4xl flex-row gap-0px-8 text-current justify-between items-center">
        <Link href="/" className="text-sm h-8 flex items-center">
          d0m1.cz
        </Link>
        <ThemeToggle />
      </div>
    </header>
  );
}
