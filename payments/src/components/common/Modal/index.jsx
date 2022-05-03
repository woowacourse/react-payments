import React from "react";
import "./index.scss";

const Modal = ({ children, closeModal }) => {
  return (
    <div className="modal--container">
      <div className="deem" onClick={closeModal}></div>
      {children}
    </div>
  );
};

export default Modal;
