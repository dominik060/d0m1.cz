import AboutMeTitle from "./AboutMeTitle";

type Props = {
  className?: string;
};

export default function AboutMe({ className }: Props) {
  return (
    <div className="my-24 flex flex-col justify-center">
      <AboutMeTitle />
    </div>
  );
}
