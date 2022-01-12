/* eslint-disable react/no-unescaped-entities */
import { useMainContext } from "context/mainContext";
import React from "react";
import MamiImage from "public/screenshots/mami.jpg";

const HomeHeader = () => {
  const { techs } = useMainContext();
  return (
    <>
      <h1 className="text-6xl font-extrabold">
        Full-stack web and Mobile apps developer.
      </h1>
      <div className="flex">
        <div className="flex flex-col">
          <p className="pr-48 py-4">
            I'm a full-stack web & mobile apps developer with over 5 years of
            working experience. Currently working on a bunch of
            productivity-rated apps that are used by thousands of professionals
            worldwide. A good; speaker, reader, listener and friend. He likes to
            learn new technologies and teach what he learns. You can contact at
            any time.
          </p>
          <div className="flex gap-x-4">
            {techs.map((item) => (
              <span key={item.id} className="text-primary text-lg font-bold">
                #{item.title}
              </span>
            ))}
          </div>
        </div>
        <div className="">
          <img src={MamiImage.src} className="w-full" alt="Mami" />
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
