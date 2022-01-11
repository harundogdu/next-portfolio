import Title from "components/Title";
import React from "react";
import ProjectList from "./ProjectList";

const ProjectContainer = ({data}) => {
  return (
    <div className="py-4">
      <Title title="Recent Projects" />
      <ProjectList data={data} />
    </div>
  );
};

export default ProjectContainer;



