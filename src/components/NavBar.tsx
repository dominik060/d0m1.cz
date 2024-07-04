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
            className="py-8 px-16 flex justify-between items-center"
        >
            <Link href="/" title="Přejít na domovskou stránku" className="">
                <Logo className="w-16" aria-hidden="true" />
            </Link>
            <div className="flex items-center ">
                <NavLinks
                    className="text-h3 flex flex-nowrap gap-8 "
                    navLinkList={[
                        { name: "Work", href: "#work" },
                        { name: "About", href: "#about" },
                        { name: "Contact", href: "#contact" },
                    ]}
                />
            </div>
            <div className="theme-switcher"></div>
        </nav>
    ); // TODO theme-switcher
}
