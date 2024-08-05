import Link from "next/link";
import Card from "../Card";
import { Url } from "next/dist/shared/lib/router/router";
import { useEffect, useRef, useState } from "react";
import { MousePosition } from "@react-hook/mouse-position";

type Props = {
  Icon: React.ReactElement;
  title: string;
  description: string;
  link: Url;
  mouse: MousePosition;
};

export default function ContactCard({
  Icon,
  title,
  description,
  link,
  mouse,
}: Props) {
  useEffect(() => {
    if (!mouse) return;

    const cards = document.getElementById("cardsBoard")!;

    cards.onmousemove = (e) => {
      for (const card of document.getElementsByClassName(
        "card"
      ) as HTMLCollectionOf<HTMLElement>) {
        const rect = card.getBoundingClientRect(),
          x = mouse.clientX! - rect.left,
          y = mouse.clientY! - rect.top;

        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      }
    };
  }, [mouse]);

  return (
    <Link
      href={link}
      target="_blank"
      title="Open contact link"
      className="card group/card relative rounded-lg bg-white/20 p-[2px] before:z-30 after:z-10 hover:before:opacity-100 group-hover/board:after:opacity-100"
    >
      <Card className="relative z-20 flex w-full flex-col items-center gap-8 bg-white pb-6 pt-8 dark:bg-black sm:min-w-52 sm:pb-16 md:min-w-72 lg:min-w-96 [&>*]:duration-500">
        <div className="bg- z-50 rounded-full border border-black border-opacity-40 bg-white p-4 group-hover/card:border-current dark:border-white dark:border-opacity-40 dark:bg-black">
          <Icon.type />
        </div>
        <span className="via-current/50 absolute h-3/4 w-px bg-gradient-to-b from-current to-transparent"></span>
        <div className="z-50 flex flex-col gap-3 text-center [&>*]:duration-700">
          <h3 className="font-bold">{title}</h3>
          <h4 className="text-black/50 group-hover/card:text-black/80 dark:text-white/50 dark:group-hover/card:text-white/80">
            {description}
          </h4>
        </div>
      </Card>
    </Link>
  );
}
