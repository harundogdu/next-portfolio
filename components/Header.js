import React from "react";
import Navbar from "./Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
const Header = () => {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="font-bold text-xl">HarunDoğdu</h1>
        <p className="w-96 my-2 font-thin">
          Apps developer. Loves good and intuitive UX. Makes fun things to watch
          on YouTube.
        </p>
        <a href="mailto:info@harundogdu.com" className="text-sm font-semibold">
          info@harundogdu.com
        </a>
      </div>
      <div className="flex justify-between gap-x-5">
        <a href="">subscribe</a>
        <Navbar />
        <GiHamburgerMenu />
      </div>
    </header>
  );
};

export default Header;
