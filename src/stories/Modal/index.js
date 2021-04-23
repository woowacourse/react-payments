import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const Modal = ({ children, onClick }) => {
  return (
    <div className="modal" onClick={onClick}>
      <div className="modal__inner">{children}</div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.element,
  onClick: PropTypes.func,
};
