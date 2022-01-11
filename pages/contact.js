/* eslint-disable react/no-unescaped-entities */
import Layout from "components/Layout";
import SimpleMenu from "components/SimpleMenu";
import Head from "next/head";
import React from "react";

const Contact = () => {
  return (
    <Layout>
      <Head>
        <title>Contact - HarunDoğdu</title>
      </Head>
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          <h1 className="text-3xl font-bold">Drop me a line</h1>
          <form action="">
            <div className=" mb-2 mt-2">
              <input
                type="text"
                placeholder="Name"
                className="w-full border border-gray-200 p-4 outline-none focus-within:border focus-within:border-primary "
              />
            </div>
            <div className=" mb-2">
              <input
                type="email"
                placeholder="E-mail"
                className="w-full border border-gray-200 p-4 outline-none focus-within:border focus-within:border-primary "
              />
            </div>
            <div className=" mb-2">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
                className="w-full border border-gray-200 p-4 outline-none focus-within:border focus-within:border-primary "
              ></textarea>
            </div>
            <div className="flex justify-end">
              <button disabled className="bg-primary text-white px-4 py-2 cursor-pointer text-xl">
                Send
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col w-1/2 px-4 space-y-14 items-end">
          <h2 className="text-6xl font-semibold">I'd ❤️️ to help.</h2>
          <p className="text-2xl font-normal">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas, or opportunities to be part of your
            vision.
          </p>
          <div>
            <SimpleMenu className="text-gray-400 block text-2xl" />
          </div>
          <a href="mailto:info@harundogdu.com" className="text-xl hover:text-primary">info@harundogdu.com</a>
        </div>
      </div>
    </Layout>
  );
};

export default Contact;
