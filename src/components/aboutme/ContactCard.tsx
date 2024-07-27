import Card from "../Card";

type Props = {
  className?: string;
  icon: any;
  title: string;
  description: string;
};

export default function ContactCard({
  className,
  icon,
  title,
  description,
}: Props) {
  return <Card>contact card</Card>;
}
