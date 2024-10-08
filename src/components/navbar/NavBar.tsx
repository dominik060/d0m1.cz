import Link from "next/link";
import Logo from "../svg/Logo";
import NavLinks from "./NavLink";
import ThemeSwitcher from "./themeswitcher/ThemeSwitcher";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { twMerge } from "tailwind-merge";

export default function NavBar({ className }: { className?: string }) {
  return (
    <NavigationMenu
      className={twMerge(
        "flex max-w-full items-center justify-between py-4 sm:py-8",
        className
      )}
    >
      <Link href="/" title="Go to home page" className="">
        <Logo className="w-10 sm:w-14" aria-hidden="true" />
      </Link>
      <div className="flex flex-wrap items-center justify-end gap-6 sm:gap-8">
        <NavLinks
          className="flex flex-nowrap gap-8"
          navLinkList={[{ name: "About Me", href: "#aboutme" }]}
        />
        <ThemeSwitcher />
      </div>
    </NavigationMenu>
  );
}
