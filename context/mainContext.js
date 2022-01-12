import React, { createContext, useState } from "react";
import { useContext } from "react";

const MainContext = createContext();

export function MainContextProvider({ children }) {
  const [techs, setTechs] = useState([
    {
      id: 1,
      title: "javascript",
    },
    {
      id: 2,
      title: "reactjs",
    },
    {
      id: 3,
      title: "react native",
    },
    {
      id: 4,
      title: "nodejs",
    },
    {
      id: 5,
      title: "laravel",
    },
    {
      id: 6,
      title: "php",
    },
    {
      id: 7,
      title: "mysql",
    },
    {
      id: 8,
      title: "nosql",
    },
    {
      id: 9,
      title: "mongodb",
    },
  ]);
  const [services, setServices] = useState([
    {
      id: 1,
      title: "Frontend Development",
      description:
        "With Laravel 8.* ,The construction of an advanced personal website website application that I have developed.",
    },
    {
      id: 2,
      title: "Backend Development",
      description:
        "With Laravel 8.* ,The construction of an advanced quiz website application that I have developed.",
    },
    {
      id: 3,
      title: "Mobile App Development",
      description:
        "Using React.js and Tailwindcss the repo where I developed the 'brandcolors.net' page.",
    },
  ]);
  const contextValues = {
    techs,
    services,
  };

  return (
    <MainContext.Provider value={contextValues}>
      {children}
    </MainContext.Provider>
  );
}

export const useMainContext = () => useContext(MainContext);
