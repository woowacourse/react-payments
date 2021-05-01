import React from "react";
import PropTypes from "prop-types";

const InputBox = ({ children }) => <div className="flex flex-col mb-2 w-full">{children}</div>;

InputBox.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default InputBox;
