import { BsSearch, BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

import Link from "next/link";
function SocialIcon({ link, children }) {
  return (
    <a
      className={"transition-all hover:-translate-y-1 hover:text-blue-800"}
      href={link}
    >
      {children}
    </a>
  );
}
export function Navbar() {
  const links = [
    { id: 1, link: "https://google.com", icon: <BsFacebook /> },
    { id: 2, link: "https://google.com", icon: <BsGithub /> },
    { id: 3, link: "https://google.com", icon: <BsLinkedin /> },
  ];
  return (
    <div
      className={
        "flex justify-between text-2xl md:w-8/12 w-11/12 mx-auto mt-12 mb-6"
      }
    >
      <div className={"md:flex hidden gap-6"} id={"icons"}>
        {links.map((link) => (
          <SocialIcon key={link.id} link={link.link}>
            {link.icon}
          </SocialIcon>
        ))}
      </div>
      <Link href={"/"}>
        <h1 className={"font-bold"} id={"logo"}>
          {" "}
          <button>Bloggy</button>{" "}
        </h1>
      </Link>
      <button id={"search-icon"}>
        <BsSearch />
      </button>
    </div>
  );
}
