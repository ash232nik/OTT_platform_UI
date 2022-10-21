import React from "react";
import "./index.scss";

const Modal = (props) => {
  const closeModal = () => {
    props.close();
  };
  return (
    <div className="modalContainer">
      <div>{props.children}</div>
    </div>
  );
};

export default Modal;
