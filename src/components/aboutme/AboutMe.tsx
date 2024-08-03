import AboutMeParagraph from "./AboutMeParagraph";
import AboutMeTitle from "./AboutMeTitle";
import ContactsCardBoard from "./ContactsCardBoard";

export default function AboutMe() {
  return (
    <div className="my-16 flex flex-col justify-center sm:my-20 md:my-24">
      <AboutMeTitle className="mb-6 sm:mb-8 md:mb-10" />
      <AboutMeParagraph />
      <ContactsCardBoard />
    </div>
  );
}
