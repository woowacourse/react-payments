import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const AddCardButton = ({ onClick }) => {
  return (
    <button type="button" onClick={onClick} className="add-card-button">
      <div className="add-card-button__inner">+</div>
    </button>
  );
};

AddCardButton.propTypes = {
  onClick: PropTypes.func,
};

export default AddCardButton;
