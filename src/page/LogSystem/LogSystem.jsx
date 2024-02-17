
import React, { useCallback, useContext, useEffect, useState } from "react";
import DataTable from "../../components/DataTable/DataTable";
import RechartError from "../../components/RechartError/RechartError";
import { AuthContext } from "../../context/authContext";
import TablePagination from "../../components/Pagination/TablePagnation";
import axios from "axios";
import toast from "react-hot-toast";
import { useTheme } from "../../context/themeContext";
import { useSearchParams } from "react-router-dom";

const url_real = "https://rayteb.ir/logSight/api/Log";

function LogSystem() {
  const pageSize = 8;
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { token, state, dispatch } = useContext(AuthContext);
  const [searchParams, setSearchParams]= useSearchParams()
const urlAddres = searchParams.get("url") || url_real


  const { logErrors, isLoading, isError } = state;

  console.log(logErrors);

  const fetchData = useCallback(async () => {
    dispatch({ type: "FETCH_INIT" });
    try {
      const response = await axios.get(urlAddres, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      dispatch({ type: "FETCH_SUCCESS", payload: response.data });
      console.log(urlAddres,response.data);
    } catch (error) {
      dispatch({ type: "FETCH_FAILURE" });
      toast.error("There is an error");
    }
  }, [token, dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handlePointClick = useCallback(
    (point) => {
      const pointId = point.activePayload[0].payload.id;
      setSelectedPoint(pointId);
      const currentIndex = logErrors.findIndex(
        (logError) => logError.id === pointId
      );
      const previousPage = Math.floor(currentIndex / pageSize) + 1;
      setCurrentPage(previousPage);
    },
    [logErrors]
  );

  // تعداد داده‌ها در هر صفحه را محاسبه کنید
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const currentData = logErrors.slice(startIndex, endIndex);

  return (
    <div className="w-[97%] h-fit overflow-y-auto p-4 ml-5 rounded-md bg-slate-100 md:mt-4 lg:w-full dark:bg-[#374151]">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        // isError ? (
        //   <div>Error occurred while fetching data.</div>
        // ) :
        <>
          <RechartError data={logErrors} handlePointClick={handlePointClick} />

            <DataTable title="لیست خطاها" data={currentData}>
              <TablePagination
                data={logErrors}
                itemsPerPage={pageSize}
                selectedPoint={selectedPoint}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
              />
            </DataTable>

        </>
      )}
    </div>
  );
}

export default LogSystem;
