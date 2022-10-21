import React from "react";
import More from "../../assets/images/more.png";
import "./index.scss";

const DotMenu = ({ img = More, children, id = "dotMenu" }) => {
  return (
    <div className="dotMenuContainer">
      <input
        type={"checkbox"}
        key={id}
        className="checkBox"
        id="dotMenuCheck"
      />
      <label htmlFor="dotMenuCheck" className="iconContainer">
        <img src={img} alt="icon" />
      </label>
      <div className="menuContainer">{children}</div>
    </div>
  );
};

export default DotMenu;
