import Link from "next/link";
import Card from "../Card";
import { Url } from "next/dist/shared/lib/router/router";

type Props = {
  className?: string;
  Icon: React.ReactElement;
  title: string;
  description: string;
  link: Url;
};

export default function ContactCard({
  className,
  Icon,
  title,
  description,
  link,
}: Props) {
  return (
    <Link href={link}>
      <Card className="group relative flex min-w-52 flex-col items-center gap-8 pb-16 pt-8">
        <div className="bg- z-50 rounded-full border border-black border-opacity-40 bg-white p-4 dark:border-white dark:border-opacity-40 dark:bg-black">
          <Icon.type />
        </div>
        <span className="via-current/50 absolute h-3/4 w-px bg-gradient-to-b from-current to-transparent"></span>
        <div className="flex flex-col gap-3 text-center">
          <h3 className="font-bold">{title}</h3>
          <h4 className="text-white/50">{description}</h4>
        </div>
      </Card>
    </Link>
  );
}
