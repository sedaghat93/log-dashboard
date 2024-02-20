import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";

function Home() {
  const { token } = useContext(AuthContext);

  return (
    <div className="w-full h-3/4 p-2 rounded-md text-center bg-slate-100 mt-4 lg:h-screen  lg:min-w-screen dark:bg-[#374151">
      <div className="">
      {token ? (
        <>
          <h2 className="font-bold text-4xl p-5 m-2 md:font-extrabold md:text-6xl md:p-10 md:m-5"> به پنل مدیریتی خوش آمدید</h2>
          <ul className="flex justify-center items-center w-full p-2 m-1 md:flex md:justify-center md:items-center md:w-full md:p-16 md:m-5">
            <li className="font-medium text-2xl p-5 md:font-bold md:text-4xl md:p-10">
              <Link to="/servers">سرورها</Link>
            </li>
            <li className="font-medium text-2xl p-5 md:font-bold md:text-4xl md:p-10">
              <Link to="/log">سیستم مرکزی</Link>
            </li>
          </ul>
        </>
      ) : (
        <h1 className="font-extrabold text-4xl mt-72 p-4">
          برای نمایش اطلاعات باید
          <Link
            to="/login"
            className="border-b-2 border-b-sky-600 text-sky-600"
          >
            وارد شوید
          </Link>
        </h1>
      )}
      </div>
    </div>
  );
}

export default Home;
