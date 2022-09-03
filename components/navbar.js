import { BsSearch, BsFacebook, BsLinkedin, BsGithub } from "react-icons/bs";

import Link from "next/link";
export function Navbar() {
  return (
    <div
      className={
        "flex justify-between text-2xl md:w-8/12 w-11/12 mx-auto mt-12 mb-6"
      }
    >
      <div className={"md:flex hidden gap-6"} id={"icons"}>
        <a href={"https://google.com"} target={"_blank"}>
          <BsLinkedin />
        </a>
        <a href={"https://google.com"} target={"_blank"}>
          <BsGithub />
        </a>
        <a href={"https://google.com"} target={"_blank"}>
          <BsFacebook />
        </a>
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
