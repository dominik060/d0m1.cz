"use client";

import useMouse from "@react-hook/mouse-position";
import EmailIcon from "../svg/EmailIcon";
import GitHubIcon from "../svg/GitHubIcon";
import ContactCard from "./ContactCard";
import { useRef } from "react";

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
  const boardRef = useRef(null);
  const mouse = useMouse(boardRef, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  return (
    <div
      className="group/board flex flex-col flex-wrap justify-evenly gap-4 sm:grid sm:grid-cols-2 sm:gap-8 md:flex md:flex-row md:content-evenly"
      ref={boardRef}
      id="contact"
    >
      {contactsList &&
        contactsList.map((contact) => (
          <ContactCard
            Icon={contact.icon}
            title={contact.title}
            description={contact.description}
            link={contact.link}
            key={contact.link}
            mouse={mouse}
          />
        ))}
    </div>
  );
}
