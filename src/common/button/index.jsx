import React from "react";
import "./index.scss";

const Button = ({ title, backgroundColor, color, onClick }) => {
  return (
    <button
      className="Button"
      style={{ backgroundColor: backgroundColor, color: color }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Button;
