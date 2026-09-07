import React from "react";
import '../App.css'
import Header from "../Component/Header/Header";
import { Outlet } from "react-router";
import Footer from "../Component/Footer/Footer";
import ScrollToTop from "../Component/ScrollToTop";

const MainLayout = () => {
  return (
    <div>
      <ScrollToTop></ScrollToTop>
      <header>
        <Header></Header>
      </header>

      <main>
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default MainLayout;
