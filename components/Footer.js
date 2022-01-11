import React from "react";

const Footer = () => {
  return (
    <div className="border-t border-gray-300 pt-10">
      <div className="flex flex-col">
        <a href="mailto:info@harundogdu.com" className="text-xl font-bold">
          info@harundogdu.com
        </a>
        <p className="w-96 my-2 font-thin">
          Apps developer. Loves good and intuitive UX. Makes fun things to watch
          on YouTube.
        </p>
      </div>
      <div className="flex justify-between items-center py-5">
        <div>
          <ul className="flex items-center gap-x-5">
            <li>
              <a href="">About Me</a>
            </li>
            <li>
              <a href="">Work</a>
            </li>
            <li>
              <a href="">Resume</a>
            </li>
            <li>
              <a href="" className="text-primary">
                Contact Me
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul className="flex items-center gap-x-5">
            <li>
              <a href="">LinkedIn</a>
            </li>
            <li>
              <a href="">Github</a>
            </li>
            <li>
              <a href="">Stackoverflow</a>
            </li>
            <li>
              <a href="">Hackerrank</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
