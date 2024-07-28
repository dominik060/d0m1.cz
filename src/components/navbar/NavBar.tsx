import Link from "next/link";
import Logo from "../svg/Logo";
import NavLinks from "./NavLink";
import ThemeSwitcher from "./themeswitcher/ThemeSwitcher";

type Props = {
  className?: string;
  [prop: string]: any;
};

export default function NavBar({ className, ...props }: Props) {
  return (
    <nav {...props} className="flex items-center justify-between px-16 py-8">
      <Link href="/" title="Move to home page" className="">
        <Logo className="w-16" aria-hidden="true" />
      </Link>
      <div className="flex flex-wrap items-center justify-end gap-8">
        <NavLinks
          className="flex flex-nowrap gap-8 text-h4"
          navLinkList={[{ name: "Contact", href: "#contact" }]}
        />
        <ThemeSwitcher />
      </div>
    </nav>
  );
}
