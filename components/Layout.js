import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <div className="px-24 py-10 w-full h-full">
      <Header />
      <div className="w-full h-full py-10">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
