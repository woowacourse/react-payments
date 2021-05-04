import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

const Input = props => {
  const {
    label,
    isValid,
    className,
    id,
    type,
    minLength,
    maxLength,
    required,
    placeholder,
    onChange,
    value,
    name,
    inputmode,
  } = props;

  return (
    <>
      <label className="only:w-full" htmlFor={id}>
        <span className="sr-only">{label}</span>
        <input
          className={classNames(
            "placeholder-center p-3 h-11 text-custom-mint text-lg font-medium bg-custom-gray-100 rounded-md",
            !isValid && "outline-none ring-2 ring-rose-400",
            className
          )}
          {...{
            id,
            type,
            minLength,
            maxLength,
            required,
            placeholder,
            onChange,
            value,
            name,
            inputMode: inputmode,
          }}
        />
      </label>
    </>
  );
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  minLength: PropTypes.string.isRequired,
  maxLength: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  isValid: PropTypes.bool,
  type: PropTypes.string,
  name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  required: PropTypes.bool,
  placeholder: PropTypes.string,
  inputmode: PropTypes.string,
};

Input.defaultProps = {
  className: "",
  isValid: true,
  type: "text",
  name: Input.id,
  required: false,
  placeholder: "",
  inputmode: "text",
};

export default Input;
