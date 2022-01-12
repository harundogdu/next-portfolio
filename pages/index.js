/* eslint-disable react/no-unescaped-entities */
import HomeHeader from "components/Home/HomeHeader";
import Layout from "components/Layout";
import Head from "next/head";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Homepage - HarunDoğdu</title>
      </Head>
      <HomeHeader />
    </Layout>
  );
}
