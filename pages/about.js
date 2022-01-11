import ServicesContainer from "components/Home/ServicesContainer";
import Layout from "components/Layout";
import Head from "next/head";
import React from "react";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>About - HarunDoğdu</title>
      </Head>
      <ServicesContainer />
    </Layout>
  );
};

export default About;
