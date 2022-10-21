import React from "react";
import "./index.scss";

const TextInput = ({
  placeholder = "",
  type = "text",
  label,
  className,
  width = "100%",
}) => {
  return (
    <div className="inputContainer" style={{ width: width }}>
      <div className="label">{label}</div>
      <input
        placeholder={placeholder}
        type={type}
        className={`inputField ${className}`}
      />
    </div>
  );
};

export default TextInput;
