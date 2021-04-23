import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const Button = ({ innerText, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {innerText}
    </button>
  );
};

export default Button;

Button.propTypes = {};
