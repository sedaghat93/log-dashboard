import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-full h-3/4 bg-slate-100 border rounded-2xl p-5 m-4 lg:h-screen lg::w-11/12  dark:bg-[#374151] dark:border-[#374151]">
      <div className="p-1">
        <h1 className="text-3xl font-extrabold m-4 text-center text-[#1F2937] flex items-center justify-center lg:text-5xl lg:font-bold lg:mt-20 dark:text-white">
          Log Doshboard
        </h1>
        <h1 className="text-3xl font-extrabold text-[#1F2937] pb-6 lg:text-5xl lg:font-bold mt-2 flex items-center justify-center dark:text-white">
          Rayteb
        </h1>
      </div>
      <div className="mt-[3rem] lg:mt-[15rem]">
        <ul className="flex justify-evenly mt-[1rem] p-4 lg:space-y-12 lg:mt[15rem] lg:flex lg:flex-col">
          <li className="text-2xl font-bold text-[#374151] lg:text-4xl lg:font-medium hover:text-blue-500 hover:underline hover:p-3 dark:text-white">
            <span className="hover:p-3">-</span>
            <Link to="/"> صفحه اصلی</Link>
          </li>
          <li className="text-2xl font-bold text-[#374151] lg:text-4xl lg:font-medium hover:text-blue-500 hover:underline hover:p-3 dark:text-white">
            <span className="hover:p-3">-</span>
            <Link to="/servers"> سرورها</Link>
          </li>
          <li className="text-2xl font-bold text-[#374151] lg:text-4xl lg:font-medium hover:text-blue-500 hover:underline hover:p-3 dark:text-white">
            <span className="hover:p-3">-</span>
            <Link to="/log"> سرور مرکزی</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
