import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children, height }) => {
  return (
    <>
      {" "}
      <div className="layout" style={{ height: height }}>
        <Header />
        {children}
        <Footer />{" "}
      </div>
    </>
  );
};

Layout.defaultProps = {
  height: "100vh",
};
export default Layout;
