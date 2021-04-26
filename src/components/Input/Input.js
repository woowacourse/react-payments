import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    type = 'text',
    name = '',
    maxLength,
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
      maxLength={maxLength}
      placeholder={placeholder}
      value={value}
      className={`bg-gray-250 text-green-350 h-10 w-full text-left outline-none focus:border border-gray-400 rounded ${className}`}
      required
      onChange={onChange}
      disabled={disabled}
    />
  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  textAlign: PropTypes.string,
  maxLength: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
};
