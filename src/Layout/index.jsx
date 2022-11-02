import React from "react";
import "./index.scss";
import Setting from "../assets/images/setting.png";
import User from "../assets/images/user.png";
import Icon from "../common/icon";
import { useState, useEffect } from "react";
// import Modal from "../common/modal";
// import SettingPage from "../screens/settingPage";
// import ProfilePage from "../screens/profilePage";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Dashboard from "../assets/images/dashboard.png";
import Client from "../assets/images/customer.png";
import UserImage from "../assets/images/userImage.png";
import Approval from "../assets/images/approval.png";
import Payment from "../assets/images/credit-card.png";
import Profile from "../assets/images/profileImage.png";
import SettingsImage from "../assets/images/settingsImage.png";
import { UserData } from "../data/user";

const Layout = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [settingModal, setSettingModal] = useState(false);
  const [profileModal, setProfileModal] = useState(false);
  const [popup, setPopup] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [activeIndex, setActiveIndex] = useState();
  const [tabData, setTabData] = useState();
  useEffect(() => {
    if (pathname.includes("login")) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  }, [window, window.location, window.location.pathname]);
  useEffect(() => {
    const userRole = localStorage.getItem("user");
    const tabList = UserData.user.find((item) => item.role === userRole);
    setTabData(tabList);
  }, []);

  const handleModal = (value) => {
    if (value === "setting") {
      setSettingModal(true);
    }
    if (value === "user") {
      setProfileModal(true);
      setPopup(false);
    }
  };
  const handlePopUp = () => {
    setPopup(!popup);
  };
  const closeModal = () => {
    setSettingModal(false);
    setProfileModal(false);
  };
  const handleLogout = () => {
    localStorage.removeItem("user");
    // setLogOut(false);
    navigate("/login");
  };
  window.onclick = function (e) {
    if (!e.target.matches("#profile")) {
      setPopup(false);
    }
  };
  const TopBar = () => (
    <div className="topNavBar">
      <div className="iconsContainer">
        <div onClick={() => handleModal("setting")}>
          {" "}
          <Icon src={Setting} />
        </div>
        <div onClick={() => handlePopUp()}>
          {" "}
          <Icon src={User} />
        </div>
        {popup && (
          <div className="popUp">
            <div className="popUpList" onClick={() => handleModal("user")}>
              Profile
            </div>
            <div className="popUpList" onClick={() => handleLogout()}>
              Logout
            </div>
          </div>
        )}
      </div>
    </div>
  );
  const handleActiveTab = (index) => {
    setActiveIndex(index);
  };
  const menu = [
    {
      content: "Dashboard",
      icon: Dashboard,
      path: "/home",
    },
    {
      content: "Clients",
      icon: Client,
      path: "/clients",
    },
    {
      content: "Users",
      icon: UserImage,
      path: "/users",
    },
    {
      content: "Approvals",
      icon: Approval,
      path: "/approvals",
    },
    {
      content: "Payment",
      icon: Payment,
      path: "/payment",
    },
    {
      content: "Profile",
      icon: Profile,
      path: "/profile",
    },
    {
      content: "Settings",
      icon: SettingsImage,
      path: "/settings",
    },
  ];
  const SideBar = () => (
    <div className="sideNavBar">
      {tabData?.tabs.map((item, index) => {
        return (
          <NavLink
            to={item.path}
            className={({ isActive }) =>
              isActive ? "sideBarList activeSideBarList" : "sideBarList"
            }
            // style={({ isActive }) => ({
            //   // console.log(isActive, "isActive");
            //   color: isActive ? "#fff" : "",
            //   background: isActive ? "#377dff" : "",
            // })}
            // end
            // activeStyle={{
            //   fontWeight: "bold",
            //   color: "red",
            //   backgroundColor: "#377dff",
            // }}
            // onClick={() => handleActiveTab(index)}
            // style={{ backgroundColor: index === activeIndex ? "#377dff" : "" }}
          >
            <div>
              <img src={item.icon} width={"3rem"} />
            </div>
            <div>
              <span>{item.content}</span>
            </div>
          </NavLink>
        );
      })}

      {/* <div className="sideBarList">Dashboard</div>
      <div className="sideBarList">Users</div>
      <div className="sideBarList">Profile</div>
      <div className="sideBarList">Payment</div>
      <div className="sideBarList">Setting</div> */}
    </div>
  );
  return !isLogin ? (
    <div className="mainContainer">
      <TopBar />
      <div className="adminLayout">
        <SideBar />
        <div className="pageMainViewContainer">{children}</div>
      </div>
      {/* {settingModal && (
        <Modal>
          <SettingPage close={closeModal} />
        </Modal>
      )} */}
      {/* {profileModal && (
        <Modal>
          <ProfilePage photo={User} close={closeModal} />
        </Modal>
      )} */}
    </div>
  ) : (
    <div>{children}</div>
  );
};

export default Layout;
