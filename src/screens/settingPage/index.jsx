import React from "react";
import ToggleSwitch from "../../common/toggle";
import "./index.scss";
import closeIcon from "../../assets/images/close.png";

const SettingPage = ({ close }) => {
  return (
    <div className="settingContainer">
      <div className="headingContainer">
        <div className="heading">Setting</div>
        <img
          className="close-icon"
          src={closeIcon}
          alt="close-icon"
          onClick={close}
          role="presentation"
          style={{ width: "15px" }}
        />
      </div>
      <div className="BoxContainer">
        <div className="boxContent">Notification</div>
        <ToggleSwitch label="Notifications" />
      </div>
      <div className="DropDownContainer">
        <div className="Heading">Country</div>
        <select name="country" id="country" className="dropdown">
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Australia">Australia</option>
          <option value="China">China</option>
        </select>
      </div>
      <div className="DropDownContainer">
        <div className="Heading">Currency</div>
        <select name="country" id="country" className="dropdown">
          <option value="India">US Dollar</option>
          <option value="USA">Rupee</option>
          <option value="Australia">Dollar</option>
          <option value="China">Dollar</option>
        </select>
      </div>
    </div>
  );
};

export default SettingPage;
