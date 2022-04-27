import React from 'react';

const Modal = ({ handleModal, children }) => {
  return (
    <>
      <div className="modal-dimmed" onClick={handleModal}></div>
      <div className="modal">{children}</div>
    </>
  );
};

export default Modal;
