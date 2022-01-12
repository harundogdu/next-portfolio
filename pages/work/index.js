import HomeHeader from "components/Home/HomeHeader";
import ProjectContainer from "components/Home/ProjectContainer";
import Layout from "components/Layout";
import { BASE_URL } from "enviroments";
import Head from "next/head";
import React from "react";

const Work = ({ data }) => {
  if (data === undefined) {
    return <div>Loading...</div>;
  }
  return (
    <Layout>
      <Head>
        <title>Works - HarunDoğdu</title>
      </Head>
      <ProjectContainer data={data} />
    </Layout>
  );
};

export default Work;

export async function getStaticProps(context) {
  const response = await fetch(`${BASE_URL}/api/project`);
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { data, fallback: false },
  };
}
