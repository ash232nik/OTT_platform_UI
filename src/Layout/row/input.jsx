import React from "react";
import "./index.scss";

const Row = (props) => {
  const { children, className } = props;
  return <div className={`rowLayoutContainer ${className}`}>{children}</div>;
};

export default Row;
