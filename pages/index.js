/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import ProjectList from "../components/Home/ProjectList";
import Layout from "../components/Layout";

export default function Home() {
  const [data, setData] = useState([
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
  ]);

  return (
    <Layout>
      <h1 className="text-6xl font-extrabold">
        Full-stack web and Mobile apps developer.
      </h1>
      <p className="pr-48 py-4">
        I'm a full-stack web & mobile apps developer with over 7 years of
        working experience. Currently working on a bunch of productivity-rated
        apps that are used by thousands of professionals worldwide. Also, I
        share coding tutorial videos on my YouTube channel.
      </p>
      <div className="flex gap-x-4">
        {data.map((item) => (
          <span key={item.id} className="text-primary text-lg font-bold">
            #{item.title}
          </span>
        ))}
      </div>
      <div className="py-4">
        <h2 className="text-2xl">Some projects</h2>
        <ProjectList />
      </div>
    </Layout>
  );
}
