import AboutMeParagraph from "./AboutMeParagraph";
import AboutMeTitle from "./AboutMeTitle";
import ContactsCardBoard from "../contacts/ContactsCardBoard";

export default function AboutMe() {
  return (
    <div className="my-16 flex flex-col justify-center sm:my-20 md:my-24">
      <AboutMeTitle className="mb-6 sm:mb-8 md:mb-10" />
      <AboutMeParagraph className="mb-12 flex justify-center sm:mb-16 md:mb-20" />
      <ContactsCardBoard />
    </div>
  );
}
