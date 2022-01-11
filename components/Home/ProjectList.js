import { BASE_URL } from "enviroments";
import React, { useState } from "react";
import Project from "./Project";

const ProjectList = ({ data }) => {
  const [projects, setProjects] = useState(data);
  return (
    <div className="grid grid-cols-3 gap-4 items-center justify-center my-4">
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectList;

export async function getStaticProps(context) {
  const response = await fetch(`http://localhost:3000/api/project`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data },
  };
}
