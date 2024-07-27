import Card from "../Card";

type Props = {
  className?: string;
  Icon: React.ReactElement;
  title: string;
  description: string;
};

export default function ContactCard({
  className,
  Icon,
  title,
  description,
}: Props) {
  return <Card>contact card</Card>;
}
