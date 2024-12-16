import React from "react";
import "./Layout.css";
import NavBar from "../components/NavBar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";

const Layout = () => {
  return (
    <div className="allbody">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
