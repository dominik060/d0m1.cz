import AboutMeTitle from "./AboutMeTitle";
import ContactsCardBoard from "./ContactsCardBoard";

type Props = {
  className?: string;
};

export default function AboutMe({ className }: Props) {
  return (
    <div className="my-16 flex flex-col justify-center sm:my-20 md:my-24">
      <AboutMeTitle className="mb-12 sm:mb-16 md:mb-20" />
      <ContactsCardBoard />
    </div>
  );
}
