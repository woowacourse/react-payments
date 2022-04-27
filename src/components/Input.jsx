import React from 'react';
import PropTypes from 'prop-types';

function Input({ type, size, placeholder, length, minLength, updateNameLength }) {
  return (
    <input
      className={`input-basic ${size}`}
      type={type}
      placeholder={placeholder}
      maxLength={length}
      minLength={minLength || length}
      required
      onChange={(e) => updateNameLength(e.target.value)}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  size: PropTypes.string,
  placeholder: PropTypes.string,
  length: PropTypes.number,
  minLength: PropTypes.number,
  updateNameLength: PropTypes.func,
};

Input.defaultProps = {
  type: 'text',
  size: '',
  placeholder: '',
};

export default Input;
