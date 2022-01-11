import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href={"/"}>
            <a>home</a>
          </Link>
        </li>
        <li>
          <Link href={"/work"}>
            <a>work</a>
          </Link>
        </li>
        <li>
          <a href="">resume</a>
        </li>
        <li>
          <a href="" className="text-primary">
            contact me
          </a>
        </li>
        <li>
          <a href="">more</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
