import React, { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import { convertData } from "../../utils";
import "./index.scss";
import Next from "../../assets/images/next.png";
import Prev from "../../assets/images/left-arrow.png";

const Pagination = ({ pageNo = 1, limit = 10, total = 14, result = null }) => {
  const [array, setArray] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const currentPageValue = useMemo(() => {
    return currentPage;
  }, [currentPage]);

  useEffect(() => {
    const limitToNumber = convertData.convertToNumber(limit);
    const totalToNumber = convertData.convertToNumber(total);
    if (limitToNumber < totalToNumber) {
      const pageCount = Math.ceil(totalToNumber / limitToNumber);
      console.log("pageCount", pageCount);
      let arr = [];
      for (let i = 1; i <= pageCount; i++) {
        arr.push(i);
      }
      setArray(arr);
    }
  }, []);

  const updatePage = (page) => {
    result(page, { limit, total });
    setCurrentPage(page);
  };

  return (
    limit < total && (
      <div className="paginationContainer">
        <div
          onClick={() => (currentPage > 1 ? updatePage(currentPage - 1) : null)}
          className="subContainer"
        >
          <img src={Prev} style={{ width: "15px" }} />
        </div>

        {array?.length !== 0 &&
          array.map((item) => {
            return (
              <div
                onClick={() => updatePage(item)}
                style={{
                  backgroundColor:
                    currentPageValue === item ? " rgb(204, 204, 204)" : "white",
                }}
                className="subContainer"
              >
                {item}
              </div>
            );
          })}

        <div
          onClick={() =>
            currentPage < array.length ? updatePage(currentPage + 1) : null
          }
          className="subContainer"
        >
          <img src={Next} style={{ width: "15px" }} />
        </div>
      </div>
    )
  );
};

export default Pagination;
