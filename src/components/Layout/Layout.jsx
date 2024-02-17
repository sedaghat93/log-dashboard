import React, { useContext, useState } from "react";
import Sidebar from "../Sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { ThemeContext } from "../../context/themeContext";

function Layout() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="lg:grid h-full grid-rows-[auto_1fr] grid-cols-[28rem_1fr] ">
      <div className=" pt-4 flex justify-center">
        <Navbar />
      </div>
      <div className="md:bg-blue-100 row-start-1 row-span-2">
        <Sidebar />
      </div>
      <div className=" p-8 h-full  ">
        <div className="max-auto max-w-screen-xl flex justify-center items-center flex-col gap-y-12">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Layout;
