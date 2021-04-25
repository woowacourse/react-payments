import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const {
    width = 'full',
    type = 'text',
    name = '',
    maxLength,
    value,
    placeHolder = '',
    textAlign = 'text-center',
    onChange,
  } = props;

  const widthTable = {
    full: 'w-full',
    half: 'w-5/12',
    quarter: 'w-3/12',
    small: 'w-1.5/12',
  };

  return (
    <input
      type={type}
      name={name}
      maxLength={maxLength}
      placeHolder={placeHolder}
      value={value}
      className={`${widthTable[width]}  bg-gray-250 text-green-350 rounded mr-1 h-10 ${textAlign}`}
      required
      onChange={props.onChange}
    />
  );
};

export default Input;

Input.propTypes = {
  width: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  placeHolder: PropTypes.number,
  value: PropTypes.number,
  textAlign: PropTypes.string,
  maxLength: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
};
