import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";

function Layout() {
  return (
    <>
      <Header />
      <div className="bg-gray-700  " style={{ minHeight: "calc(60vh)" }}>
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default Layout;
