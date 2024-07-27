import AboutMeTitle from "./AboutMeTitle";
import ContactsCardBoard from "./ContactsCardBoard";

type Props = {
  className?: string;
};

export default function AboutMe({ className }: Props) {
  return (
    <div className="my-24 flex flex-col justify-center">
      <AboutMeTitle className="mb-8" />
      <ContactsCardBoard />
    </div>
  );
}
