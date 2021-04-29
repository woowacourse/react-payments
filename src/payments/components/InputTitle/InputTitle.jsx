import React from "react";
import PropTypes from "prop-types";

const InputTitle = ({ innerText }) => <span className="text-custom-gray-300 text-xs font-medium">{innerText}</span>;

InputTitle.propTypes = {
  innerText: PropTypes.string.isRequired,
};

export default InputTitle;
