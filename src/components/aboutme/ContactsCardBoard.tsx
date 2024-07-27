import EmailIcon from "../icons/EmailIcon";
import GitHubIcon from "../icons/GitHubIcon";
import ContactCard from "./ContactCard";

const contactsList = [
  {
    icon: <EmailIcon />,
    title: "info@d0m1.cz",
    description: "Email",
    link: "mailto:info@d0m1.cz",
  },
  {
    icon: <GitHubIcon />,
    title: "dominik060",
    description: "GitHub",
    link: "https://github.com/dominik060",
  },
];

export default function ContactsCardBoard() {
  return (
    <div className="flex flex-col flex-wrap justify-evenly gap-4 px-8 sm:flex-row">
      {contactsList &&
        contactsList.map((contact) => (
          <ContactCard
            Icon={contact.icon}
            title={contact.title}
            description={contact.description}
            link={contact.link}
          />
        ))}
    </div>
  );
}
