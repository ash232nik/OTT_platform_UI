import React from "react";
import "./index.scss";
import VideoList from "../../data/videoList";
import More from "../../assets/images/more.png";
import Pagination from "../../common/pagination";
import { useState } from "react";
import { useEffect } from "react";
import { objectUtils } from "../../utils";
import Modal from "../../common/modal";
import Button from "../../common/button";
import DotMenu from "../../common/dotMenu";

const HomePage = () => {
  const [pageNo, setPageNo] = useState(1);
  const [popupId, setPopupId] = useState();
  const [popup, setPopup] = useState(false);
  const [total, setTotal] = useState(VideoList.length);
  const [data, setData] = useState([]);
  const [uploadModal, setUploadModal] = useState(false);
  const limit = 10;

  const assignData = async (currentPage, pageLimit) => {
    const res = await objectUtils.fetchDataByPageNo({
      pageNo: currentPage,
      limit: pageLimit,
      data: VideoList,
    });
    setData(res);
  };

  useEffect(() => {
    assignData(pageNo, limit);
  }, [pageNo]);

  const paginationOnChange = (currentPage, params) => {
    setPageNo(currentPage);
    console.log("result currentPage", currentPage);
    console.log("params", params);
  };
  const handlePopUp = (id) => {
    setPopupId(id);
    if (id === popupId) {
      setPopup(!popup);
    } else {
      setPopup(true);
    }
  };
  const handleUpload = () => {
    setUploadModal(true);
  };
  window.onclick = function (e) {
    if (!e.target.matches(".dropdownBtn")) {
      setPopup(false);
    }
  };
  return (
    <div className="homeContainer">
      <div className="uploadButtonContainer">
        <Button title={"Upload"} backgroundColor=" #377dff" color="white" />
        {/* <button className="uploadButton" onClick={handleUpload}>
          Upload
        </button> */}
      </div>
      <div className="tableContainer">
        <table className="mainTable">
          <thead>
            <tr>
              <th>Name</th>
              <th>IMDB</th>
              <th>Released Year</th>
              <th>Duration</th>
              <th>Uploaded On</th>
              <th>Language</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => {
              return (
                <tr>
                  <td width={"300px"}>{item?.name ?? "--"}</td>
                  <td width={"100px"}>{item?.imbd_rating ?? "--"}</td>
                  <td width={"400px"}>{item?.released_year ?? "--"}</td>
                  <td width={"100px"}>{item?.duration ?? "--"}</td>
                  <td width={"300px"}>{item?.uploadedOn ?? "--"}</td>
                  <td width={"100px"}>{item?.language ?? "--"}</td>
                  <td width={"200px"}>
                    {item?.genre.length > 0 &&
                      item?.genre.map((item) => item + ",")}
                  </td>
                  <td style={{ position: "relative" }}>
                    <img
                      src={More}
                      alt="icon"
                      style={{ width: "15px", cursor: "pointer" }}
                      onClick={() => handlePopUp(item.id)}
                      className="dropdownBtn"
                    />
                    {popup && (
                      <div
                        style={{
                          display: item.id === popupId ? "block" : "none",
                        }}
                        className="popUp"
                      >
                        <div className="popUpList">Edit</div>
                        <div className="popUpList">Delete</div>
                      </div>
                    )}
                    {/* <DotMenu key={index} id={item.id} selectedId>
                      <div className="popUpList">Edit</div>
                      <div className="popUpList">Delete</div>
                    </DotMenu> */}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <div className="paginationContain">
          <Pagination
            pageNo={pageNo}
            total={total}
            limit={limit}
            result={paginationOnChange}
          />
        </div>
      </div>
      {uploadModal && <Modal></Modal>}
    </div>
  );
};

export default HomePage;
