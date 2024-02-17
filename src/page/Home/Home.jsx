import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { Link } from "react-router-dom";

function Home() {
  const { token } = useContext(AuthContext);

  return (
    <div className="bg-rose-600">
      {token ? (
        <ul>
          <li><Link to='/servers'>سرورها</Link></li>
          <li><Link to='/log'>سیستم مرکزی</Link></li>
        </ul>
      ) : (
        <h1 className="font-extrabold text-4xl mt-72 p-4">
          برای نمایش اطلاعات باید
          <Link to="/login" className="border-b-2 border-b-sky-600 text-sky-600">
            وارد شوید
          </Link>
        </h1>
      )}
    </div>
  );
}

export default Home;
