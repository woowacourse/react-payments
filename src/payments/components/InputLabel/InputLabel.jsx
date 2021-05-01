import React from "react";
import PropTypes from "prop-types";

const InputLabel = ({ children }) => <div className="flex items-center justify-between mb-2 h-6">{children}</div>;

InputLabel.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default InputLabel;
