import React from "react";
import FooterSystem from "./footer/FooterSystem";
import Header from "./header/Header";
import Main from "./main/Main";

const Layout = () => {
  return (
    <React.Fragment>
      <Header />
      <Main />
      <FooterSystem />
    </React.Fragment>
  );
};

export default Layout;
