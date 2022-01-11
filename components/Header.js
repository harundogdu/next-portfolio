import React from "react";
import Navbar from "./Navbar";
import { GiHamburgerMenu } from "react-icons/gi";
import MiniDescription from "./MiniDescription";
const Header = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="flex items-start justify-between border-b border-gray-300 pb-5 sticky top-0 z-20 bg-white py-2 ">
      <div>
        <h1 className="font-bold text-xl">HarunDoğdu</h1>
        <MiniDescription />
        <a href="mailto:info@harundogdu.com" className="text-sm font-semibold hover:text-primary">
          info@harundogdu.com
        </a>
      </div>
      <div className="flex justify-between gap-x-5">
        <Navbar isOpen={isOpen} />
        <GiHamburgerMenu
          size={24}
          onClick={handleMenuClick}
          className={`${
            isOpen ? "rotate-90 text-primary" : ""
          }  cursor-pointer duration-300 transition select-none`}
        />
      </div>
    </header>
  );
};

export default Header;
