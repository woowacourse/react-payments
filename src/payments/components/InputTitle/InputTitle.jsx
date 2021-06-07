import React from "react";
import PropTypes from "prop-types";

const InputTitle = ({ children }) => <span className="text-custom-gray-300 text-xs font-medium">{children}</span>;

InputTitle.propTypes = {
  children: PropTypes.node.isRequired,
};

export default InputTitle;
