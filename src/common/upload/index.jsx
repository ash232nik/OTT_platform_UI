import React from "react";
import { useRef } from "react";
import "./index.scss";
import Folder from "../../assets/images/folder.png";
import closeIcon from "../../assets/images/close.png";
import Button from "../button";
import DragDrop from "../dragDropFile";

const Upload = ({ close }) => {
  const inputFile = useRef(null);
  const onButtonClick = () => {
    inputFile.current.click();
  };
  return (
    <div className="uploadContainer">
      <img
        className="close-icon"
        src={closeIcon}
        alt="close-icon"
        onClick={close}
        role="presentation"
        style={{ width: "15px" }}
      />
      <div className="dataContainer">
        {" "}
        <DragDrop />
      </div>

      {/* <div className="dataContainer">
        <input
          type="file"
          id="file"
          accept="mp4"
          ref={inputFile}
          style={{ display: "none" }}
        />

        <div className="imageContainer" onClick={onButtonClick}>
          <img src={Folder} alt="folder image" />
        </div>
        <div className="text">Click to Upload</div>
      </div>
      */}
      <div className="buttonContainer">
        <Button
          title={"Attach File"}
          backgroundColor={"#377dff"}
          color="white"
          onClick={close}
        />
      </div>
    </div>
  );
};

export default Upload;
