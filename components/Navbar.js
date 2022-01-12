import Link from "next/link";
import React from "react";

const Navbar = ({isOpen}) => {
  return (
    <nav className={`${isOpen ? "block" : "invisible"}`}>
      <ul>
        <li>
          <Link href={"/"}>
            <a>home</a>
          </Link>
        </li>
       {/*  <li>
          <Link href={"/work"}>
            <a>work</a>
          </Link>
        </li> */}
        <li>
          <Link href={"/about"}>
            <a>about me</a>
          </Link>
        </li>
        <li>
          <Link href={"/contact"}>
            <a className="text-primary font-semibold">contact me</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
