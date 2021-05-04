import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const Modal = ({ isVisible, children, close }) => {
  const onModalClick = ({ target, currentTarget }) => {
    if (target === currentTarget) {
      close();
      return;
    }
  };

  return (
    <div className={`modal ${isVisible ? "open" : ""}`} onClick={onModalClick}>
      <div className={`modal__inner ${isVisible ? "open" : ""}`}>
        {children}
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  children: PropTypes.element,
  close: PropTypes.func,
};
