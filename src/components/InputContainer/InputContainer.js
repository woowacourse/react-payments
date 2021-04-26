import React from 'react';
import PropTypes from 'prop-types';

const InputContainer = (props) => {
  const { title, children, width = 'full', bgColor = '' } = props;

  const widthTable = {
    full: 'w-full',
    half: 'w-5/12',
    quarter: 'w-3/12',
    small: 'w-1.5/12',
  };

  return (
    <div className="flex w-full flex-col mt-5">
      <label className="text-xs">{title}</label>
      <div className={`${widthTable[width]} flex items-center mt-1.5 font-gray-350 ${bgColor} rounded`}>{children}</div>
    </div>
  );
};

export default InputContainer;

InputContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
