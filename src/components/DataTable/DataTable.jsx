import React from "react";
import "./DataTable.css";

function DataTable({ children, title }) {
  return (
    <div className="container">
    <div className="home-content-latest-user">
      <div className="home-content-users-title">
        <span className="signup">{title}</span>
      </div>
      <div className="home-content-users-table">{children}</div>
    </div>
    </div>
  );
}

export default DataTable;
