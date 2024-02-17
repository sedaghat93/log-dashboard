import React, { useContext, useEffect } from "react";
import { FaBug } from "react-icons/fa";
import "./HeaderShowError.css";
import { AuthContext } from "../../context/authContext";
import { url_log_server } from "../../services/url";
import useListOfErrors from "../../Hook/CustomHookServer";

function HeaderShowError() {
  const { state } = useContext(AuthContext);
  console.log(state);
  const logErrors = state.logErrors;
  const listOfErrors = state.listOfErrors;
  // const numberOfServers =listOfErrors ? listOfErrors.length : 0
  const {token} = useContext(AuthContext)
  const { data} = useListOfErrors(url_log_server, token);
  const numberOfServers =data ? data.length : 0

  const numberOfErrors =
    logErrors &&
    logErrors.filter((logError) => logError.level === "Error").length;

  const numberOfWarning =
    logErrors &&
    logErrors.filter((logError) => logError.level == "warning").length;
  return (
    <div className="showError-wraper">
      <div className="showError-container">
        <div className="flex justify-start p-3">
          <h4 className="text-5xl font-medium">Bugs</h4>
        </div>
        <div className="showError-body">
          <p>count of servers:{numberOfServers}</p>
          <p>
            <FaBug className="icon" />
          </p>
        </div>
        <div className="showError-footer">
          <p className="p-2">error:{numberOfErrors}</p>
          <p className="p-2">warning:{numberOfWarning}</p>
        </div>
      </div>
    </div>
  );
}

export default HeaderShowError;
