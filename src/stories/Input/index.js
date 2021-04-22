import React from "react";
import PropTypes from "prop-types";
import "./style.css";

const Input = ({ type, placeHolder, isCenter = false, option = {} }) => {
  console.log(isCenter);
  return (
    <input
      className={`input ${isCenter ? "text-center" : ""}`}
      type={type}
      placeholder={placeHolder}
      {...option}
    />
  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  isCenter: PropTypes.bool,
  option: PropTypes.object,
};
