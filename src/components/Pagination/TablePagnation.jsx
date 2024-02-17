import React, { useState } from "react";
import ModalShow from "../ModalShow/ModalShow";
import { TABLE_LOG_HEAD } from "../../table-variable";
import { FaEye } from "react-icons/fa";
import "./TablePagnation.css";
import { useTheme } from "../../context/themeContext";

function TablePagination({
  data,
  itemsPerPage,
  selectedPoint,
  currentPage,
  onPageChange,
}) {
  console.log(data);
  const [filteredLogErrors, setFilteredLogErrors] = useState([]);
  const [isClose, setIsClose] = useState(true);
  const {theme} = useTheme()
  const classes = `py-2 px-4 border-b ${
    theme === "dark" ? "bg-[#1F2937]" : "border-gray-50 bg-slate-300"
  }`;

  const handlePageChange = (pageNumber) => {
    onPageChange(pageNumber);
  };

  // محاسبه تعداد صفحات
  const pageCount = Math.ceil(data.length / itemsPerPage);
  const pageNumbers = Array.from(
    { length: pageCount },
    (_, index) => index + 1
  );

  // محاسبه محدوده نمایش داده‌ها براساس صفحه جاری
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentData = data.slice(startIndex, endIndex);

  const displayModelShowLogHandler = (Id) => {
    setIsClose(!isClose);
    const LogError = data.filter((error) => error.id === Id);
    setFilteredLogErrors(LogError);
  };

  return (
    <div className="overflow-x-auto"> 
      <table className="min-w-full bg-white border border-gray-300 ">
        <thead>
          <tr className="bg-slate-500">
            {TABLE_LOG_HEAD.map((head) => (
              <th
                key={head}
                className="py-3 px-4 border-b"
              >
                {head}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {currentData.map((logError, index) => {
            return (
              <tr
                key={logError.id}
                className={selectedPoint === logError.id ? 'text-rose-600 font-black' : ""}
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
                    <FaEye className="text-2xl flex justify-center bg-slate-300 dark:bg-[#1F2937]" />
                  </button>
                  {!isClose && (
                    <ModalShow open={!isClose} onClose={() => setIsClose(true)}>
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
      </table>
      {/* قسمت صفحه‌بندی */}
      <div>
        <ul className="pagination pagination-lg">
          {pageNumbers.map((pageNumber) => (
            <li
              className={
                pageNumber === currentPage ? "page-item active" : "page-item"
              }
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              disabled={pageNumber === currentPage}
            >
              {pageNumber}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TablePagination;
