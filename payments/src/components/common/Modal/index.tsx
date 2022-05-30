import React from "react";
import "./index.scss";

const Modal = ({
  children,
  closeModal,
}: {
  children: React.ReactNode;
  closeModal: () => void;
}) => {
  return (
    <div className="modal--container">
      <div className="deem" onClick={closeModal}></div>
      <div className="modal-contents">{children}</div>
    </div>
  );
};

export default Modal;
