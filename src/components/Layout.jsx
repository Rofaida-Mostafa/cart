import React, { Fragment } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";

export const Layout = () => {
  return (
    <Fragment>
      <div>
        <Nav />
      </div>

      <Outlet />

      <div>
        <Footer />
      </div>
    </Fragment>
  );
};
