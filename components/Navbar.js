import React from "react";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="">menu</a>
        </li>
        <li>
          <a href="">work</a>
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
