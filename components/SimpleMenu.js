import React from "react";

const SimpleMenu = ({ className = "" }) => {
  const [links, setLinks] = React.useState([
    {
      id: 1,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/harundogdu/",
    },
    {
      id: 2,
      title: "Github",
      link: "https://github.com/harundogdu",
    },
    {
      id: 3,
      title: "Stackoverflow",
      link: "https://stackoverflow.com/users/16569226/harun-do%c4%9fdu",
    },
    {
      id: 4,
      title: "Hackerrank",
      link: "https://www.hackerrank.com/harundogdu",
    },
  ]);
  return (
    <ul className="flex items-center gap-x-5">
      {links.map((link) => (
        <li key={link.id}>
          <a
            href={link.link}
            target={"_blank"}
            rel="noreferrer"
            className={`${className}  hover:text-primary`}
          >
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SimpleMenu;
