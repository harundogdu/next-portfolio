/* eslint-disable react/no-unescaped-entities */
import HomeHeader from "components/Home/HomeHeader";
import ProjectContainer from "components/Home/ProjectContainer";
import ServicesContainer from "components/Home/ServicesContainer";
import Layout from "components/Layout";
import Head from "next/head";

export default function Home({data}) {
  return (
    <Layout>
      <Head>
        <title>Homepage - HarunDoğdu</title>
      </Head>
      <HomeHeader />
      <ProjectContainer data={data} />
      <ServicesContainer />
    </Layout>
  );
}

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
