import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col px-24 py-10 w-full h-full">
      <Header />
      <div className="flex-1 py-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
