import React from "react";
import "./index.scss";

const TextInput = ({
  placeholder = "",
  type = "text",
  label,
  className,
  value,
  width = "100%",
  onChange,
}) => {
  return (
    <div className="inputContainer" style={{ width: width }}>
      <div className="label">{label}</div>
      <input
        placeholder={placeholder}
        type={type}
        className={`inputField ${className}`}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default TextInput;
