import Link from "next/link";
import { Button } from "../ui/button";

interface navLinkItem {
  name: string;
  href: string;
}
type Props = {
  navLinkList?: navLinkItem[];
  className?: string;
};

export default function NavLinks({ navLinkList, className }: Props) {
  if (!navLinkList) return;
  return (
    <div className={className}>
      {navLinkList.map(({ name, href }) => (
        <Link key={href} href={href} title={"Move to " + href}>
          <Button variant={"ghost"} className="text-xl">
            {name}
          </Button>
        </Link>
      ))}
    </div>
  );
}
