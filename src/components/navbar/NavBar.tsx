import Link from "next/link";
import Logo from "../Logo";
import NavLinks from "./NavLink";
import ThemeSwitcher from "./themeswitcher/ThemeSwitcher";

type Props = {
  className?: string;
  [prop: string]: any;
};

export default function NavBar({ className, ...props }: Props) {
  return (
    <nav {...props} className="flex items-center justify-between px-16 py-8">
      <Link href="/" title="Přejít na domovskou stránku" className="">
        <Logo className="w-16" aria-hidden="true" />
      </Link>
      <div className="flex flex-wrap items-center gap-8">
        <NavLinks
          className="flex flex-nowrap gap-8 text-h4"
          navLinkList={[
            { name: "Work", href: "#work" },
            { name: "About", href: "#about" },
            { name: "Contact", href: "#contact" },
          ]}
        />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
