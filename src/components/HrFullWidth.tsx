type Props = {
  className?: string;
};

export default function HrFullWidth({ className }: Props) {
  return (
    <hr className="h-[2px] w-screen transform border-0 bg-current hr-line:-translate-x-[calc((100vw-80rem)/2)]" />
  );
}
