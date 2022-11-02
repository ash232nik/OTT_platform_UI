import React from "react";
import "./index.scss";

const PageLayout = (props) => {
  const { children, className } = props;
  return (
    <div {...props} className={`pageLayoutContainer ${className}`}>
      {children}
    </div>
  );
};

export default PageLayout;
