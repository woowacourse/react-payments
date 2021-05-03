import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const SimpleButton = ({ type = "submit", innerText, onClick }) => {
  return (
    <button type={type} className="button" onClick={onClick}>
      {innerText}
    </button>
  );
};

export default SimpleButton;

SimpleButton.propTypes = {
  type: PropTypes.string,
  innerText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};
