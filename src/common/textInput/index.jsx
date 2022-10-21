import React from "react";
import "./index.scss";

const TextInput = ({ placeholder = "", type = "text", label }) => {
  return (
    <div className="inputContainer">
      <div className="label">{label}</div>
      <input placeholder={placeholder} type={type} className="inputField" />
    </div>
  );
};

export default TextInput;
