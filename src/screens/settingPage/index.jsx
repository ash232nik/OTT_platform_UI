import React from "react";
import ToggleSwitch from "../../common/toggle";
import "./index.scss";
import closeIcon from "../../assets/images/close.png";
import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PageLayout from "../../Layout/pageLayout";

const SettingPage = ({ close }) => {
  const [permissionData, setPermissionData] = useState({});
  // const location = useLocation();
  // useEffect(() => {
  //   const access = location.state.access_data.find(
  //     (item) => item.module === "settings"
  //   );
  //   if (access.permission) {
  //     setPermissionData(access.permission);
  //   }
  // }, []);
  // console.log(permissionData.can_create, "permissionData setting");
  return (
    <PageLayout>
      <div className="settingContainer">
        {/* <img
          className="close-icon"
          src={closeIcon}
          alt="close-icon"
          onClick={close}
          role="presentation"
          style={{ width: "15px" }}
        /> */}
        <div className="headingContainer">
          <div className="heading">Settings</div>
        </div>
        <div className="BoxContainer">
          <div className="boxContent">Notification</div>
          <ToggleSwitch
            label="Notifications"
            // disabled={permissionData.can_create}
          />
        </div>
        <div className="DropDownContainer">
          <div className="Heading">Country</div>
          <select
            name="country"
            id="country"
            className="dropdown"
            // disabled={!permissionData.can_create}
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Australia">Australia</option>
            <option value="China">China</option>
          </select>
        </div>
        <div className="DropDownContainer">
          <div className="Heading">Currency</div>
          <select
            name="country"
            id="country"
            className="dropdown"
            // disabled={!permissionData.can_create}
          >
            <option value="India">US Dollar</option>
            <option value="USA">Rupee</option>
            <option value="Australia">Dollar</option>
            <option value="China">Dollar</option>
          </select>
        </div>
        {/* <div className="BoxContainer">
        <div className="boxContent">Notification</div>
        <ToggleSwitch
          label="Notifications"
          disabled={permissionData.can_create}
        />
      </div> */}
        <div className="DropDownContainer">
          <div className="Heading">Country</div>
          <select
            name="country"
            id="country"
            className="dropdown"
            // disabled={!permissionData.can_create}
          >
            <option value="India">India</option>
            <option value="USA">USA</option>
            <option value="Australia">Australia</option>
            <option value="China">China</option>
          </select>
        </div>
        <div className="DropDownContainer">
          <div className="Heading">Currency</div>
          <select
            name="country"
            id="country"
            className="dropdown"
            // disabled={!permissionData.can_create}
          >
            <option value="India">US Dollar</option>
            <option value="USA">Rupee</option>
            <option value="Australia">Dollar</option>
            <option value="China">Dollar</option>
          </select>
        </div>
      </div>
    </PageLayout>
  );
};

export default SettingPage;
