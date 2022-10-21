import React from "react";
import More from "../../assets/images/more.png";
import "./index.scss";

const DotMenu = ({ img = More, children }) => {
  return (
    <div className="dotMenuContainer">
      <input type={"checkbox"} className="checkBox" id="dotMenuCheck" />
      <label htmlFor="dotMenuCheck">
        <img
          src={img}
          alt="icon"
          style={{ width: "15px", cursor: "pointer" }}
        />
      </label>
      <div className="menuContainer">{children}</div>
    </div>
  );
};

export default DotMenu;
