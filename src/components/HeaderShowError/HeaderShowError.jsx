import React, { useEffect } from "react";
import { FaBug } from "react-icons/fa";
import "./HeaderShowError.css";

function HeaderShowError({listOfErrors}) {
  const allErrors = listOfErrors.length;
const numberOfError= listOfErrors.filter(listOfError => listOfError.type == "error").length;
const numberOfWarning= listOfErrors.filter(listOfError => listOfError.type == "warning").length;
  return (
    <div className="showError-wraper">
      <div className="showError-container">
        <div className="flex justify-start p-3">
          <h4 className="text-5xl font-medium">Bugs</h4>
        </div>
        <div className="showError-body">
          <p>some bugs:{allErrors}</p>
          <p><FaBug className="icon" /></p>
        </div>
        <div className="showError-footer">
          <p className="p-2">error:{numberOfError}</p>
          <p className="p-2">warning:{numberOfWarning}</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderShowError;
