/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { StringToSlug } from "utils/helper";
import ProjectImage from "../../public/projects.png";
const Project = ({ project }) => {
  return (
    <Link href={`/work/${StringToSlug(project.title)}`}>
      <a
        className="flex flex-col border border-primary border-opacity-10 py-3 w-full h-[300px] text-center px-4 rounded-lg  hover:bg-primary hover:text-white group transition-all"
        rel="noreferrer"
      >
        <div className="w-full h-1/2 mb-4 flex items-center py-2">
          <img
            src={ProjectImage.src}
            alt={"Project" + project.title}
            className="w-1/2 object-cover mx-auto"
          />
        </div>
        <div className="py-4">
          <h2 className="text-xl text-primary group-hover:text-white font-semibold">
            {project.title}
          </h2>
          <p className="my-2 text-sm px-4">{project.description}</p>
        </div>
      </a>
    </Link>
  );
};

export default Project;
