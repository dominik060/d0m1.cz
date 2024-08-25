"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { twMerge } from "tailwind-merge";
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
    <NavigationMenuList className={className}>
      {navLinkList.map(({ name, href }) => (
        <NavigationMenuItem key={href}>
          <Link href={href} title={"Move to " + href}>
            <NavigationMenuLink
              className={twMerge(
                navigationMenuTriggerStyle(),
                "text-xl hover:underline"
              )}
            >
              {name}
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      ))}
    </NavigationMenuList>
  );
}
