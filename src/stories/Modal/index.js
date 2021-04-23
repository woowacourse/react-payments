import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const Modal = ({ children }) => {
  return (
    <div className="modal">
      <div className="modal__inner">{children}</div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.element,
};
