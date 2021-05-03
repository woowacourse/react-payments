import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import "./style.css";

const Input = forwardRef(
  (
    {
      type,
      placeHolder,
      isCenter = false,
      value = "",
      onChange = null,
      ...option
    },
    ref
  ) => {
    return (
      <input
        className={`input ${isCenter ? "text-center" : ""}`}
        type={type}
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        ref={ref ?? null}
        {...option}
      />
    );
  }
);

export default Input;

Input.propTypes = {
  type: PropTypes.string.isRequired,
  placeHolder: PropTypes.string,
  isCenter: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  option: PropTypes.object,
};
