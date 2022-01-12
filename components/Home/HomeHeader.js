/* eslint-disable react/no-unescaped-entities */
import { useMainContext } from "context/mainContext";
import React, { useState } from "react";

const HomeHeader = () => {
  const { techs } = useMainContext();
  //
  https: return (
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
          <img
            src="https://i.ibb.co/3M5xWYR/d447ee50-4c07-49d4-8f37-35dc530fbbf4.jpg"
            className="w-full"
            alt="Mami"
          />
        </div>
      </div>
    </>
  );
};

export default HomeHeader;
