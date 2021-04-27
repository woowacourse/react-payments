import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    type = 'text',
    name = '',
    min,
    max,
    minLength,
    length,
    required = true,
    value,
    placeholder = '',
    onChange,
    className = '',
    disabled = false,
  } = props;

  return (
    <input
      type={type}
      name={name}
      min={min}
      max={max}
      minLength={minLength ?? length}
      maxLength={length}
      placeholder={placeholder}
      value={value}
      className={`bg-gray-250 text-green-350 h-10 w-full text-left outline-none focus:border border-gray-400 rounded ${className}`}
      required={required}
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default Input;

Input.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  textAlign: PropTypes.string,
  length: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
