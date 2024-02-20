import "./ListServer.css";
import React, { useCallback, useContext, useEffect, useState } from "react";
import { url_log, url_log_server } from "../../services/url";
import { AuthContext } from "../../context/authContext";
import DataTable from "../../components/DataTable/DataTable";
import TABLE_HEAD from "../../table-variable";
import {
  Link,
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";
import useListOfErrors from "../../Hook/CustomHookServer";
import { useTheme } from "../../context/themeContext";

const data = [
  { id: 1, name: "John Doe", age: 25, email: "john@example.com" },
  { id: 2, name: "Jane Doe", age: 30, email: "jane@example.com" },
];

function ListServer() {
  const [isOpen, setIsOpen] = useState(false);
  const { token, state, dispatch } = useContext(AuthContext);
  const { theme } = useTheme();
  const classes = `py-2 px-4 border-b text-center ${
    theme === "dark" ? "bg-[#1F2937]" : "border-gray-50 bg-slate-300"
  }`;
  const navigate = useNavigate();
  const {
    data: listOfErrors,
    isLoading,
    isError,
  } = useListOfErrors(url_log_server, token);

  function readMoreHandler() {
    setIsOpen(!isOpen);
  }

  function saveUrl(url) {
    // console.log(id);
    const encodedParams = createSearchParams({
      url: JSON.stringify(url),
    });
    navigate({ pathname: "/log", search: encodedParams.toString() });
  }
  return (
    <div className=" w-full h-screen overflow-y-auto p-4 ml-5 mb-4 rounded-md bg-slate-100 md:mt-4 lg:w-full dark:bg-[#374151]">
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <div className="flex justify-center items-center">
          Error occurred while fetching data.
        </div>
      ) : (
        <>
          <DataTable title="لیست سرورها">
            <div className="overflow-x-auto">
              <table className="min-w-full border overflow-x-auto border-gray-300 ">
                <thead>
                  <tr className="bg-slate-500">
                    {TABLE_HEAD.map((head) => (
                      <th key={head} className="py-2 px-4 border-b ">
                        {head}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="">
                  <tr>
                    <td className={classes}>10</td>
                    <td className={classes}>test</td>
                    <td className={classes}>345</td>
                    <td className={classes}>
                      <div >
                        <Link to="/log">https://rayteb.ir/logSight/api/Log</Link>
                      </div>
                    </td>
                  </tr>
                  {!isOpen
                    ? listOfErrors.slice(0, 7).map((listOfError, index) => {
                        return (
                          <tr key={listOfError.id}>
                            <td className={classes}>{index}</td>
                            <td className={classes}>{listOfError.name}</td>
                            <td className={classes}>{listOfError.id}</td>
                            <td className={classes}>
                              <div onClick={() => saveUrl(listOfError.url)}>
                                <Link
                                //  to={`/${listOfError.url}`}
                                >
                                  {listOfError.url}
                                </Link>
                              </div>
                            </td>
                          </tr>
                        );
                      })
                    : listOfErrors.map((listOfError, index) => {
                        return (
                          <tr key={listOfError.id}>
                            <td className={classes}>{index}</td>
                            <td className={classes}>{listOfError.name}</td>
                            <td className={classes}>{listOfError.id}</td>
                            <td className={classes}>{listOfError.url}</td>
                          </tr>
                        );
                      })}
                </tbody>
              </table>
              <div className="flex justify-end m-7">
                <button
                  className="border-orange-100 text-2xl font-medium mb-5 p-3 bg-slate-500 rounded-lg hover:font-semibold hover:p-4 hover:transition-all hover:duration-75 "
                  onClick={readMoreHandler}
                >
                  {isOpen ? "...less" : " ...more"}
                </button>
              </div>
            </div>
          </DataTable>
        </>
      )}
    </div>
  );
}
export default ListServer;

// const fetchData = useCallback(async () => {
//   dispatch({ type: "FETCH_INIT" });
//   try {
//     const response = await axios.get(url_log_server, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     dispatch({ type: "FETCH_SERVER_SUCCESS", payload: response.data });
//   } catch (error) {
//     dispatch({ type: "FETCH_FAILURE" });
//     toast.error("There is an error");
//   }
// }, [token, dispatch]);

// useEffect(() => {
//   fetchData();
// }, [fetchData]);
