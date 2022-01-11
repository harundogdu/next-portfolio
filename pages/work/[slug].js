import Layout from "components/Layout";
import Head from "next/head";
import React from "react";
import { StringToSlug } from "utils/helper";

const ProjectDetails = ({ data }) => {
  return (
    <Layout>
      <Head>
        <title>Project Details - HarunDoğdu</title>
      </Head>
      <div>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const response = await fetch(
    `http://localhost:3000/api/project/${params.slug}`
  );
  const data = await response.json();

  return {
    props: {
      data,
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
