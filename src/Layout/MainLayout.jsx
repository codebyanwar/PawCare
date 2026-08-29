import React from "react";
import '../App.css'
import Header from "../Component/Header/Header";
import { Outlet } from "react-router";
import Footer from "../Component/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
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
