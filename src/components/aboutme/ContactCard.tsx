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
  return (
    <Card className="flex flex-col items-center">
      <div>
        <Icon.type />
      </div>
      <div>
        <h3>{title}</h3>
      </div>
      <div>{description}</div>
    </Card>
  );
}
