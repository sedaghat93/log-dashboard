import React, { useEffect, useState } from "react";
import DataTable from "../DataTable/DataTable";
import TABLE_HEAD from "../../table-variable";
import { Link } from "react-router-dom";

import "./ShowError.css";

function ShowErrror({ listOfErrors, readMore, isOpen}) {


  return (
    <>
      <div>
        <DataTable title="لیست سرورها">
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
                      ? "p-4 bg-slate-500"
                      : "p-4 border-b border-blue-gray-50 bg-slate-500 text-center";
                    return (
                      <tr key={listOfError.id}>
                        <td className={classes}>{listOfError.name}</td>
                        <td className={classes}>{listOfError.id}</td>
                        <td className={classes}>
                          {/* <div onClick={()=>saveUrl(listOfError.url)}> */}
                          <Link to='/log'>
                            {listOfError.url}
                          </Link>
                          {/* </div> */}
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
                        <td className={classes}>{listOfError.id}</td>
                        <td className={classes}>{listOfError.url}</td>
                        
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
    </>
  );
}

export default ShowErrror;

{/* <td className={classes}>
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
                                  <p>id: {filteredError.id}</p>
                                  <p>name: {filteredError.name}</p>
                                  <p>url: {filteredError.url}</p>
                                </>
                              ))}
                            </ModalShow>
                          )}
                        </td> */}

// ////////////////////////////////////////////////////////////////////////////////////


                        {/* <td className={classes}>
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
                                  <p>id: {filteredError.id}</p>
                                  <p>name: {filteredError.name}</p>
                                  <p>url:{filteredError.url}</p>
                                </>
                              ))}
                            </ModalShow>
                          )}
                        </td> */}
