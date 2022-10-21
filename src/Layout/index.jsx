import React from "react";
import "./index.scss";
import Setting from "../assets/images/setting.png";
import User from "../assets/images/user.png";
import Icon from "../common/icon";
import { useState, useEffect } from "react";
import Modal from "../common/modal";
import SettingPage from "../screens/settingPage";
import ProfilePage from "../screens/profilePage";
import { useLocation } from "react-router-dom";

const Layout = ({ children }) => {
  const { pathname } = useLocation();
  const [settingModal, setSettingModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  useEffect(() => {
    if (pathname.includes("login")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [window, window.location, window.location.pathname]);
  const handleModal = (value) => {
    if (value === "setting") {
      setSettingModal(true);
    }
    if (value === "user") {
      setProfileModal(true);
    }
  };
  const closeModal = () => {
    setSettingModal(false);
    setProfileModal(false);
  };
  return !isLogin ? (
    <div className="mainContainer">
      <div className="topNavBar">
        <div className="iconsContainer">
          <div onClick={() => handleModal("setting")}>
            {" "}
            <Icon src={Setting} />
          </div>
          <div onClick={() => handleModal("user")}>
            {" "}
            <Icon src={User} />
          </div>
        </div>
      </div>
      {children}
      {settingModal && (
        <Modal>
          <SettingPage close={closeModal} />
        </Modal>
      )}
      {profileModal && (
        <Modal>
          <ProfilePage photo={User} close={closeModal} />
        </Modal>
      )}
    </div>
  ) : (
    <div>{children}</div>
  );
};

export default Layout;
