import React from "react";
import PropTypes from "prop-types";

const InputContent = ({ children }) => <div className="flex items-center w-full space-x-2">{children}</div>;

InputContent.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};
export default InputContent;
