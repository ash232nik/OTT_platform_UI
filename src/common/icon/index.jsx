import React from "react";
import "./index.scss";

const Icon = (props) => {
  return (
    <div className="iconContainer">
      <img src={props.src} alt="icon" id="profile" />
    </div>
  );
};

export default Icon;
