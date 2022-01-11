import Link from "next/link";
import React from "react";
import MiniDescription from "./MiniDescription";
import SimpleMenu from "./SimpleMenu";

const Footer = () => {
  return (
    <div className="border-t border-gray-300 pt-5">
      <div className="flex flex-col">
        <a
          href="mailto:info@harundogdu.com"
          className="text-xl font-bold hover:text-primary w-fit"
        >
          info@harundogdu.com
        </a>
        <MiniDescription />
      </div>
      <div className="flex justify-between items-center py-5">
        <div>
          <ul className="flex items-center gap-x-5">
            <li>
              <Link href={"/"}>
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href={"/about"}>
                <a>About Me</a>
              </Link>
            </li>
            <li>
              <Link href={"/work"}>
                <a>Work</a>
              </Link>
            </li>
            <li>
              <Link href={"/contact"}>
                <a className="text-primary font-semibold"> Contact Me</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <SimpleMenu />
        </div>
      </div>
    </div>
  );
};

export default Footer;
