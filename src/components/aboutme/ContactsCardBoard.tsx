import EmailIcon from "../icons/EmailIcon";
import GitHubIcon from "../icons/GitHubIcon";
import ContactCard from "./ContactCard";

export default function ContactsCardBoard() {
  return (
    <div className="flex flex-wrap justify-evenly gap-4 px-8">
      <ContactCard
        Icon={<EmailIcon />}
        title="info@d0m1.cz"
        description="Email"
        link="mailto:info@d0m1.cz"
      />
      <ContactCard
        Icon={<GitHubIcon />}
        title="dominik060"
        description="GitHub"
        link="https://github.com/dominik060"
      />
    </div>
  );
}
