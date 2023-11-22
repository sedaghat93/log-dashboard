import React from "react";
import { FaBars, FaCog, FaBug, FaSignInAlt  } from "react-icons/fa";
import axios from "axios";

import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar({listOfErrors}) {

  const allErrors = listOfErrors.length;

  return (
    <div className="navbar-container">
      <div className="navbar-item">
        <div className="navbar-item-header">
          <FaBug className="navbar-item-icon" />

          <span className="navbar-item-badge">{allErrors}</span>
        </div>
        <div>
        <FaCog className="navbar-item-icon" />
        </div>
        {/* <FaBars className="navbar-item-icon" /> */}
        <div>
          <Link to="/login">
          <FaSignInAlt className="navbar-item-icon" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
