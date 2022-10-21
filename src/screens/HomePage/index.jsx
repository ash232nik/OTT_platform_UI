import React from "react";
import "./index.scss";
import VideoList from "../../data/videoList";
import More from "../../assets/images/more.png";
import Pagination from "../../common/pagination";
import { useState } from "react";
import { useEffect } from "react";
import { objectUtils } from "../../utils";
import Modal from "../../common/modal";

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
  return (
    <div className="homeContainer">
      <div className="uploadButtonContainer">
        <button className="uploadButton" onClick={handleUpload}>
          Upload
        </button>
      </div>
      <div className="tableContainer">
        <table className="mainTable">
          <thead>
            <tr>
              <th>Name</th>
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
                  <td>{item.name}</td>
                  <td>{item.releasedYear}</td>
                  <td>{item.duration}</td>
                  <td>{item.uploadedOn}</td>
                  <td>{item.language}</td>
                  <td>{item.genre}</td>
                  <td style={{ position: "relative" }}>
                    <img
                      src={More}
                      alt="icon"
                      style={{ width: "15px", cursor: "pointer" }}
                      onClick={() => handlePopUp(item.id)}
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
                    {/* <DotMenu>
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
