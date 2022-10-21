import React from "react";
import "./index.scss";

const DetailsCard = (props) => {
  const { className, children } = props;
  return (
    <div {...props} className={`detailsCardContainer ${className}`}>
      {children}
    </div>
  );
};

export default DetailsCard;
