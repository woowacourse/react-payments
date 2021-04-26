import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { type = 'text', name = '', maxLength, value, placeHolder = '', onChange, className = '' } = props;

  return (
    <input
      type={type}
      name={name}
      maxLength={maxLength}
      placeHolder={placeHolder}
      value={value}
      className={`bg-gray-250 text-green-350 h-10 w-full text-center outline-none focus:border border-gray-400 rounded ${className}`}
      required
      onChange={onChange}
    />
  );
};

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  placeHolder: PropTypes.number,
  value: PropTypes.number,
  textAlign: PropTypes.string,
  maxLength: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
