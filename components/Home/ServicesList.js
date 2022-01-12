/* eslint-disable react/no-unescaped-entities */
import { useMainContext } from "context/mainContext";
import React, { useState } from "react";
import Service from "./Service";

const ServicesList = () => {
  const { services } = useMainContext();
  return (
    <div className="flex py-4 flex-wrap items-center justify-end">
      <div className="w-[600px] mr-auto space-y-8">
        <p>
          February 7, 1998 I am from Altındağ district of Ankara. After
          completing my primary education here, he continues to high school by
          winning IMKB Vocational and Technical High School.
        </p>
        <p>
          My high school education continues to learn to teach beginner level
          html, css and javascript to complete courses.
        </p>
        <p>
          I specifically design with web and graphic design, mobile application
          development. Freelance services on related subjects. After high
          school, he prepares the Department of Software Engineering at
          Karadeniz Technical University and continues the ongoing education
          season.
        </p>
      </div>
      <div className="flex-1 flex flex-wrap justify-center h-96">
        {services.map((service) => (
          <Service key={service.id} service={service} />
        ))}
      </div>
    </div>
  );
};

export default ServicesList;
