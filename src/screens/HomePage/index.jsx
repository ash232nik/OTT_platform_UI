import React, { useContext } from "react";
import "./index.scss";
import VideoList from "../../data/videoList";
import More from "../../assets/images/more.png";
import Pagination from "../../common/pagination";
import { useState } from "react";
import { useEffect } from "react";
import { objectUtils } from "../../utils";
import Modal from "../../common/modal";
import Button from "../../common/button";
import { useLocation } from "react-router-dom";
import Upload from "../../common/upload";
import PageLayout from "../../Layout/pageLayout";
import { AuthContext } from "../../context";

const HomePage = () => {
  const { vcoPermission } = useContext(AuthContext);
  const [pageNo, setPageNo] = useState(1);
  const [popupId, setPopupId] = useState();
  const [popup, setPopup] = useState(false);
  const [total, setTotal] = useState(VideoList.length);
  const [data, setData] = useState([]);
  const [uploadModal, setUploadModal] = useState(false);
  const [permissionData, setPermissionData] = useState({});
  const limit = 10;
  const location = useLocation();
  useEffect(() => {
    console.log("vcoPermission", vcoPermission);
    if (vcoPermission) {
      setPermissionData(vcoPermission);
    }
  }, [vcoPermission]);
  console.log(permissionData?.can_create, "permissionData");
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
  const closeModal = () => {
    setUploadModal(false);
  };
  window.onclick = function (e) {
    if (!e.target.matches(".dropdownBtn")) {
      setPopup(false);
    }
  };
  const getGenre = (data) => {
    let value = "";
    data.map((item) => {
      if (value === "") {
        value = item;
      } else {
        value = value + ", " + item;
      }
    });
    return value;
  };
  return (
    <PageLayout className="homeContainer">
      <div className="uploadButtonContainer">
        {permissionData && (
          <Button
            title={"Upload"}
            backgroundColor={
              permissionData?.can_create ? "#377dff" : "#377dff80"
            }
            color="white"
            onClick={handleUpload}
            // data={permissionData.can_create}
            // disabled={permissionData.can_create ? true : false}
          />
        )}
      </div>
      {permissionData?.can_read && (
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
                    <td width={"20%"}>{item?.name ?? "--"}</td>
                    <td width={"5%"}>{item?.imbd_rating ?? "--"}</td>
                    <td width={"20%"}>{item?.released_year ?? "--"}</td>
                    <td width={"15%"}>{item?.duration ?? "--"}</td>
                    <td width={"20%"}>{item?.uploadedOn ?? "--"}</td>
                    <td width={"10%"}>{item?.language ?? "--"}</td>
                    <td style={{ width: "200px" }}>
                      <div className="genreClass">
                        {/* {item?.genre.length > 0 &&
                          item?.genre.map((subItem) => {
                            return (
                              <>
                                {subItem}
                                {","}&nbsp;
                              </>
                            );
                          })} */}
                        {getGenre(item.genre)}
                      </div>
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
                          {permissionData?.can_update && (
                            <div className="popUpList">Edit</div>
                          )}
                          {permissionData?.can_delete && (
                            <div className="popUpList">Delete</div>
                          )}
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
      )}
      {uploadModal && (
        <Modal>
          <Upload close={closeModal} />
        </Modal>
      )}
    </PageLayout>
  );
};

export default HomePage;
