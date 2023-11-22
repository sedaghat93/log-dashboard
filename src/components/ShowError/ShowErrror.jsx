import React, { useEffect, useState } from "react";
import DataTable from "../DataTable/DataTable";
import TABLE_HEAD from "../../table-variable";
import { FaEye } from "react-icons/fa";
import ModalShow from "../ModalShow/ModalShow";

import "./ShowError.css";
import AllErrors from "../AllErrors/AllErrors";

function ShowErrror({ listOfErrors, readMore, setIsOpen, isOpen }) {
  const [isShow, setIsShow] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  const [filteredErrors, setFilteredErrors] = useState([]);

  const displayModelHandler = (id) => {
    setIsShow(!isShow);
    const filteredError = listOfErrors.filter((error) => error.id == id);
    setFilteredErrors(filteredError);
    console.log(filteredError);
  };

  return (
    <div>
      <DataTable title="لیست خطاها">
        <table className="table w-full min-w-max table-auto border-collapse w-90">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
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
            {!isOpen
              ? listOfErrors.slice(0, 5).map((listOfError, index) => {
                  const isLast = index === listOfErrors.length - 1;
                  const classes = isLast
                    ? "p-5 bg-slate-500"
                    : "p-5 border-b border-blue-gray-50 bg-slate-500";
                  return (
                    <tr key={listOfError.id}>
                      <td className={classes}>{listOfError.name}</td>
                      <td className={classes}>{listOfError.error}</td>
                      <td className={classes}>{listOfError.line}</td>
                      <td className={classes}>{listOfError.nameClass}</td>
                      <td className={classes}>{listOfError.date}</td>
                      <td className={classes}>
                        <button
                          className="btn-err bg-slate-500"
                          onClick={() => displayModelHandler(listOfError.id)}
                        >
                          <FaEye className="text-2xl flex justify-center" />
                        </button>
                        {isShow && (
                          <ModalShow
                            open={isShow}
                            onClose={() => setIsShow(false)}
                          >
                            {filteredErrors.map((filteredError) => (
                              <>
                                <p>action: {filteredError.action}</p>
                                <p>date: {filteredError.date}</p>
                                <p>error: {filteredError.error}</p>
                                <p>line: {filteredError.line}</p>
                                <p>name: {filteredError.name}</p>
                                <p>nameClass: {filteredError.nameClass}</p>
                                <p>type:{filteredError.type}</p>
                              </>
                            ))}
                          </ModalShow>
                        )}
                      </td>
                    </tr>
                  );
                })
              : listOfErrors.map((listOfError, index) => {
                  const isLast = index === listOfErrors.length - 1;
                  const classes = isLast
                    ? "p-5 bg-slate-500"
                    : "p-5 border-b border-blue-gray-50 bg-slate-500";
                  return (
                    <tr key={listOfError.id}>
                      <td className={classes}>{listOfError.name}</td>
                      <td className={classes}>{listOfError.error}</td>
                      <td className={classes}>{listOfError.line}</td>
                      <td className={classes}>{listOfError.nameClass}</td>
                      <td className={classes}>{listOfError.date}</td>
                      <td className={classes}>
                        <button
                          className="btn-err bg-slate-500"
                          onClick={() => displayModelHandler(listOfError.id)}
                        >
                          <FaEye className="text-2xl flex justify-center" />
                        </button>
                        {isShow && (
                          <ModalShow
                            open={isShow}
                            onClose={() => setIsShow(false)}
                          >
                            {filteredErrors.map((filteredError) => (
                              <>
                                <p>action: {filteredError.action}</p>
                                <p>date: {filteredError.date}</p>
                                <p>error: {filteredError.error}</p>
                                <p>line: {filteredError.line}</p>
                                <p>name: {filteredError.name}</p>
                                <p>nameClass: {filteredError.nameClass}</p>
                                <p>type:{filteredError.type}</p>
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
      </DataTable>
      <button
        className="border-orange-100 p-3 bg-red-500 rounded-lg flex justify-center"
        onClick={readMore}
      >
        {isOpen ? "less..." : "more..."}
      </button>
    </div>
  );
}

export default ShowErrror;

// function SliceError({ listOfErrors, isShow, modalHandler }) {
//   return listOfErrors.slice(0, 5).map((listOfError, index) => {
//     const isLast = index === listOfErrors.length - 1;
//     const classes = isLast
//       ? "p-5 bg-slate-500"
//       : "p-5 border-b border-blue-gray-50 bg-slate-500";
//     return (
//       <tr key={listOfError.id}>
//         <td className={classes}>{listOfError.name}</td>
//         <td className={classes}>{listOfError.error}</td>
//         <td className={classes}>{listOfError.line}</td>
//         <td className={classes}>{listOfError.nameClass}</td>
//         <td className={classes}>{listOfError.date}</td>
//         <td className={classes}>
//           <button
//             className="btn-err bg-slate-500"
//             onClick={() => modalHandler(listOfError.id)}
//           >
//             <FaEye className="text-2xl flex justify-center" />
//           </button>
//           {isShow && (
//             <ModalShow open={isShow} onClose={() => setIsShow(false)}>
//               {filteredErrors.map((filteredError) => (
//                 <>
//                   <p>action: {filteredError.action}</p>
//                   <p>date: {filteredError.date}</p>
//                   <p>error: {filteredError.error}</p>
//                   <p>line: {filteredError.line}</p>
//                   <p>name: {filteredError.name}</p>
//                   <p>nameClass: {filteredError.nameClass}</p>
//                   <p>type:{filteredError.type}</p>
//                 </>
//               ))}
//             </ModalShow>
//           )}
//         </td>
//       </tr>
//     );
//   });
// }
