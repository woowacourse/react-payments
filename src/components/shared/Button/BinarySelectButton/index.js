import React from "react";
import PropTypes from "prop-types";

import "./style.css";

const BinarySelectButton = ({ firstOption, secondOption }) => {
  return (
    <div className="binary-select-button">
      <button onClick={firstOption.handler}>{firstOption.name}</button>
      <button onClick={secondOption.handler}>{secondOption.name}</button>
    </div>
  );
};

BinarySelectButton.propTypes = {
  firstOption: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
  }),
  secondOption: PropTypes.shape({
    name: PropTypes.string.isRequired,
    handler: PropTypes.func.isRequired,
  }),
};

export default BinarySelectButton;