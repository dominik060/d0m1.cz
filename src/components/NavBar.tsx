import Link from "next/link";
import Logo from "./Logo";
import NavLinks from "./NavLink";

type Props = {
    ClassName?: string;

    [prop: string]: any;
};

export default function NavBar({ ClassName, ...props }: Props) {
    return (
        <nav
            {...props}
            className="flex items-center justify-between px-16 py-8"
        >
            <Link href="/" title="Přejít na domovskou stránku" className="">
                <Logo className="w-16" aria-hidden="true" />
            </Link>
            <div className="flex items-center">
                <NavLinks
                    className="flex flex-nowrap gap-8 text-h3"
                    navLinkList={[
                        { name: "Work", href: "#work" },
                        { name: "About", href: "#about" },
                        { name: "Contact", href: "#contact" },
                    ]}
                />
            </div>
            {/* <div className="theme-switcher"></div> */}
        </nav>
    ); // TODO theme-switcher
}
