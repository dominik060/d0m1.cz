import Link from "next/link";
import Logo from "../svg/Logo";
import NavLinks from "./NavLink";
import ThemeSwitcher from "./themeswitcher/ThemeSwitcher";
import { Button } from "../ui/button";
import { NavigationMenu } from "@/components/ui/navigation-menu";

export default function NavBar() {
  return (
    <NavigationMenu className="flex max-w-full items-center justify-between py-4 sm:py-8">
      <Link href="/" title="Move to home page" className="">
        <Button variant="ghost" className="m-0 h-full w-full">
          <Logo className="w-10 hover:opacity-80 sm:w-14" aria-hidden="true" />
        </Button>
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
