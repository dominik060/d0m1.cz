"use client";

import { twMerge } from "tailwind-merge";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CoolMode } from "@/components/magicui/cool-mode";

export default function Logo({ className }: { className?: string }) {
  const logoString = `<svg
  viewBox="0 0 100 100"
  version="1.1"
  xmlns="http://www.w3.org/2000/svg"
>
  <title id="title1">Dominik Bartuška's logo</title>
  <g id="layer1" fill="currentColor">
    <path
      id="path11"
      d="M 70,0 V 29.999717 H 99.999726 A 30,30 0 0 0 70,0 Z"
    />
    <rect id="rect11" width="30" height="30" x="35" y="0" />
    <path
      id="path1"
      d="M 29.999726,0 V 29.999717 H 0 A 30,30 0 0 1 29.999726,0 Z"
    />
    <rect id="rect1" width="30" height="30" x="35" y="70" />
    <rect id="rect2" width="30" height="30" x="35" y="35" />
    <path
      id="path2"
      d="M 70,64.999717 V 35 H 99.999726 A 30,30 0 0 1 70,64.999717 Z"
    />
    <path
      id="path3"
      d="M 29.999726,64.999717 V 35 H 0 a 30,30 0 0 0 29.999726,29.999717 z"
    />
  </g>
</svg>
`;

  return (
    <ContextMenu>
      <ContextMenuTrigger>
        <CoolMode>
          <Button variant="ghost" className="m-0 h-full w-full">
            <LogoSvg className={className} />
          </Button>
        </CoolMode>
      </ContextMenuTrigger>
      <ContextMenuContent className="w-64">
        <ContextMenuItem
          inset
          onClick={() => navigator.clipboard.writeText(logoString)}
          key="copySVG"
        >
          Copy SVG
        </ContextMenuItem>
        <ContextMenuItem inset asChild key="downloadSVG">
          <Link href="/logo.svg" title="Download svg">
            Download SVG
          </Link>
        </ContextMenuItem>
      </ContextMenuContent>
    </ContextMenu>
  );
}

export function LogoSvg({ className }: { className?: string }) {
  return (
    <svg
      data-logo-component
      viewBox="0 0 100 100"
      version="1.1"
      id="svg1"
      xmlns="http://www.w3.org/2000/svg"
      className={twMerge("w-16", className)}
    >
      <title id="title1">logo-db</title>

      <g id="layer1" className="w-16 fill-current">
        <path
          id="path11"
          d="M 70,0 V 29.999717 H 99.999726 A 30,30 0 0 0 70,0 Z"
        />
        <rect id="rect11" width="30" height="30" x="35" y="0" />
        <path
          id="path1"
          d="M 29.999726,0 V 29.999717 H 0 A 30,30 0 0 1 29.999726,0 Z"
        />
        <rect id="rect1" width="30" height="30" x="35" y="70" />
        <rect id="rect2" width="30" height="30" x="35" y="35" />
        <path
          id="path2"
          d="M 70,64.999717 V 35 H 99.999726 A 30,30 0 0 1 70,64.999717 Z"
        />
        <path
          id="path3"
          d="M 29.999726,64.999717 V 35 H 0 a 30,30 0 0 0 29.999726,29.999717 z"
        />
      </g>
    </svg>
  );
}
