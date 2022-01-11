import Title from "components/Title";
import React from "react";
import ServicesList from "./ServicesList";
const ServicesContainer = () => {
  return (
    <div className="mb-14">
      <Title title="My Awesome Services" />
      <ServicesList />
    </div>
  );
};

export default ServicesContainer;
