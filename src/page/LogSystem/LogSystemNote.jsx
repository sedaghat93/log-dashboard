import React, { useCallback, useContext, useEffect, useState } from "react";
import DataTable from "../../components/DataTable/DataTable";
import { TABLE_LOG_HEAD } from "../../table-variable";
import axios from "axios";
import { FaEye } from "react-icons/fa";
import ModalShow from "../../components/ModalShow/ModalShow";
import RechartError from "../../components/RechartError/RechartError";
import { AuthContext } from "../../context/authContext";
import toast from "react-hot-toast";
import TablePagination from "../../components/Pagination/TablePagnation";

// const url_real = "https://nobat.muq.ac.ir/logSight/api/Log";
const url_real = "https://rayteb.ir/logSight/api/Log";

function LogSystem() {
  const [logErrors, setLogErrors] = useState([]);
  // const [filteredLogErrors, setFilteredLogErrors] = useState([]);
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [showLogError, setShowLogError] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  // const [isClose, setIsClose] = useState(true);
  const { token } = useContext(AuthContext);

  let pageSize = 8;
  let pageNumbers;

  const fetchData = useCallback(() => {
    axios
      .get(url_real, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        setLogErrors(res.data);
        // let endIndex = pageSize * currentPage;
        // let startIndex = endIndex - pageSize;
        // let allShowError = res.data.slice(startIndex, endIndex);
        setShowLogError(allShowError);
      })
      .catch((error) => {
        console.log(error);
        toast.error("there is an error");
      });
  }, [ token]);

  useEffect(() => {
    // const interval = setInterval(() => {
      fetchData();
    // }, 60000);
  
    // return () => {
    //   clearInterval(interval);
    // };
  }, [fetchData]);

  // const changePaginate = (newPage) => {
  //   setCurrentPage(newPage);
  // };

  // const pageCount = Math.ceil(logErrors.length / pageSize);

  // pageNumbers = Array.from(Array(pageCount).keys());

  // const displayModelShowLogHandler = (Id) => {
  //   setIsClose(!isClose);
  //   const LogError = logErrors.filter((error) => error.id === Id);
  //   setFilteredLogErrors(LogError);
  // };

  // const handlePointClick = useCallback((point) => {
  //   const pointId = point.activePayload[0].payload.id;
  //   setSelectedPoint(pointId);
  //   console.log("point: ", point.activePayload[0].payload.id);
  // }, []);

  const handlePointClick = useCallback((point) => {
    const pointId = point.activePayload[0].payload.id;
    setSelectedPoint(pointId);
    const currentIndex = showLogError.findIndex((logError) => logError.id === pointId);
    const previousPage = Math.floor(currentIndex / pageSize) + 1;
    setCurrentPage(previousPage);
  }, [showLogError]);

  return (
    <>
      <RechartError data={logErrors} handlePointClick={handlePointClick} />

      <div>
        <DataTable title="لیست خطاها">
          <TablePagination data={logErrors} itemsPerPage={5} selectedPoint={selectedPoint} />
          {/* <table className="table w-full min-w-max table-auto border-collapse w-90">
            <thead>
              <tr>
                {TABLE_LOG_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-100 bg-slate-300 p-4 opacity-100"
                  >
                    {head}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {showLogError.map((logError, index) => {
                const isLast = index === logError.length - 1;
                const classes = isLast
                  ? "p-4 bg-slate-500"
                  : "p-4 border-b border-blue-gray-50 text-center";
                return (
                  <tr
                    key={logError.id}
                    className={selectedPoint === logError.id ? "selected" : ""}
                  >
                    <td className={classes}>{logError.id}</td>
                    <td className={classes}>{logError.userName}</td>
                    <td className={classes}>{logError.errorLine}</td>
                    <td className={classes}>{logError.level}</td>
                    <td className={classes}>{logError.createOn}</td>
                    <td className={classes}>
                      <button
                        className="btn-err"
                        onClick={() => displayModelShowLogHandler(logError.id)}
                      >
                        <FaEye className="text-2xl flex justify-center" />
                      </button>
                      {!isClose && (
                        <ModalShow
                          open={!isClose}
                          onClose={() => setIsClose(true)}
                        >
                          {filteredLogErrors.map((filteredLogError) => (
                            <>
                              <p>id: {filteredLogError.id}</p>
                              <p>userName: {filteredLogError.userName}</p>
                              <p>errorLine: {filteredLogError.errorLine}</p>
                              <p>level: {filteredLogError.level}</p>
                              <p>message: {filteredLogError.message}</p>
                              <p>createOn: {filteredLogError.createOn}</p>
                            </>
                          ))}
                        </ModalShow>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table> */}
        </DataTable>

        {/* <nav aria-label="...">
          <ul className="pagination pagination-lg">
            {pageNumbers.map((pageNumber) => (
              <li
                key={pageNumber + 1}
                className={
                  pageNumber + 1 === currentPage
                    ? "page-item active"
                    : "page-item"
                }
                onClick={() => changePaginate(pageNumber + 1)}
                aria-current="page"
              >
                <span className="page-link">{pageNumber + 1}</span>
              </li>
            ))}
          </ul>
        </nav> */}
      </div>
    </>
  );
}

export default LogSystem;
