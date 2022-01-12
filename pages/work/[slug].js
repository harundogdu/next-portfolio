import Layout from "components/Layout";
import { BASE_URL } from "enviroments";
import Head from "next/head";
import React from "react";
import ImageGallery from "react-image-gallery";
import { FiExternalLink } from "react-icons/fi";

const ProjectDetails = ({ data }) => {
  return (
    <Layout>
      <Head>
        <title>Project Details - HarunDoğdu</title>
      </Head>
      <div className="space-y-7">
        <div>
          <h1 className="text-4xl font-bold">Project Details</h1>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">
            Project Title : {data.title}
          </h2>
          <p className="text-lg">
            <span className="text-xl font-semibold">Project Description :</span>
            <br />
            {data.description}
          </p>

          <p className="text-lg w-full flex gap-x-2 items-center">
            Project Repository in
            <a
              href={data.repo}
              className="text-primary font-bold flex gap-x-2 items-center justify-center"
            >
              <FiExternalLink />
            </a>
          </p>
        </div>
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Project Images</h2>
          <ImageGallery items={data.images} />
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const response = await fetch(`${BASE_URL}/api/project/${params.slug}`);
  const data = await response.json();

  return {
    props: {
      data,
      fallback: false,
    },
  };
}

/* export async function getServerPaths() {
  const response = await fetch(`http://localhost:3000/api/project`);
  const data = await response.json();

  const paths = data.map((project) => {
    return {
      params: {
        slug: StringToSlug(project.title).toString(),
      },
    };
  });

  return { paths, fallback: false };
} 
 */

export default ProjectDetails;
