import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  const { width = 'full' } = props;

  const widthTable = {
    full: 'w-full',
    half: 'w-5/12',
    quarter: 'w-3/12',
    small: 'w-1.5/12',
  };

  return <input className={`${widthTable[width]} bg-gray-250 text-green-350 rounded mr-1`} />;
};

export default Input;

Input.propTypes = { width: PropTypes.string };
