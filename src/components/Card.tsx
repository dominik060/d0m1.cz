type Props = {
  className?: string;
  children: React.ReactNode;
};
export default function Card({ className, children }: Props) {
  return <div className="">{children}</div>;
}
