import React, { useEffect } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Outlet } from "react-router";
import Aos from "aos";

const MainLayouts = () => {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col min-h-screen body">
      <Navbar />
      <div className="max-w-screen-xl overflow-x-hidden w-full px-4 md:px-8 lg:px-12 mx-auto flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayouts;
