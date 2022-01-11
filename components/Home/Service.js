/* eslint-disable @next/next/no-img-element */
import React from "react";
import ProjectImage from "public/projects.png";
const Service = ({ service }) => {
  return (
    <div className=" flex items-center justify-center flex-col">
      <img src={ProjectImage.src} alt="" className="h-[11.5rem] object-cover" />
      <h6 className="text-xl my-2">{service.title}</h6>
    </div>
  );
};

export default Service;
