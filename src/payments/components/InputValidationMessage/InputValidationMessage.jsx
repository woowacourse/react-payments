import React from "react";
import PropTypes from "prop-types";

const InputValidationMessage = ({ id, children }) => (
  <span id={id} className="py-2 text-rose-600 text-sm">
    {children}
  </span>
);

InputValidationMessage.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default InputValidationMessage;
