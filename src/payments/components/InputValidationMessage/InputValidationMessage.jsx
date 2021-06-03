import React from "react";
import PropTypes from "prop-types";

const InputValidationMessage = ({ id, children }) => (
  <p id={id} className="flex py-2 text-rose-600 text-xs">
    {children}
  </p>
);

InputValidationMessage.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default InputValidationMessage;
