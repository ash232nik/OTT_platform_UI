import React from "react";
import TextInput from "../../common/textInput";
import "./index.scss";

import closeIcon from "../../assets/images/close.png";

const ProfilePage = ({ photo, close }) => {
  return (
    <div className="profileContainer">
      <img
        className="close-icon"
        src={closeIcon}
        alt="close-icon"
        onClick={close}
        role="presentation"
        style={{ width: "15px" }}
      />
      <div className="photoContainer">
        <div className="photoBox">
          <img src={photo} />
        </div>
        <div className="headingContainer">
          <div className="profileHeading">Profile</div>
          <div className="profileSubHeading">
            Update your photo and personal details
          </div>
        </div>
      </div>
      <div className="detailsContainer">
        <div>
          <TextInput placeholder="Enter your First Name" label="First Name" />
        </div>
        <div>
          <TextInput placeholder="Enter your Last Name" label="Last Name" />
        </div>
        <div>
          <TextInput placeholder="Enter your Address" label="Address" />
          <div className="addressBox">
            <input placeholder="City" type={"text"} />
            <input placeholder="State" type={"text"} />
          </div>
          <div className="addressBox">
            <input placeholder="Pincode" type={"text"} />
          </div>
        </div>
        <div className="flexClass">
          <div style={{ width: "10rem" }} className="flexLeftClass">
            Pack Expires on
          </div>
          <div className="BoxContainer">12/08/2022</div>
        </div>
        <div className="flexClass">
          <div style={{ width: "10rem" }} className="flexLeftClass">
            Daily Limit
          </div>
          <div className="BoxContainer">15GB</div>
        </div>
        <div className="flexClass">
          <div style={{ width: "10rem" }} className="flexLeftClass">
            Pack Expires on
          </div>
          <div className="BoxContainer">12/08/2022</div>
        </div>
        <div className="flexClass">
          <div style={{ width: "10rem" }} className="flexLeftClass">
            Daily Limit
          </div>
          <div className="BoxContainer">15GB</div>
        </div>
        <div className="flexClass">
          <div style={{ width: "10rem" }} className="flexLeftClass">
            Pack Expires on
          </div>
          <div className="BoxContainer">12/08/2022</div>
        </div>
        <div className="flexClass">
          <div style={{ width: "10rem" }} className="flexLeftClass">
            Daily Limit
          </div>
          <div className="BoxContainer">15GB</div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
