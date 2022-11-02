import React from "react";
import "./index.scss";

const Button = ({ title, backgroundColor, color, onClick, disabled }) => {
  console.log("backgroundColor", backgroundColor);
  return (
    <button
      className="Button"
      style={{ backgroundColor: backgroundColor, color: color }}
      disabled={disabled}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
