import React from 'react';
import PropTypes from 'prop-types';

const InputContainer = (props) => {
  const { title, children, width = 'full', bgColor = '', count = false } = props;

  const widthTable = {
    full: 'w-full',
    half: 'w-5/12',
    quarter: 'w-3/12',
    small: 'w-1.5/12',
  };

  console.log(count);

  return (
    <div className="flex w-full flex-col mt-5">
      <div className="flex justify-between items-center">
        <label className="text-xs ">{title}</label>
        <span className="mr-1 text-xs">{count || count === 0 ? `${count}/30` : ''}</span>
      </div>
      <div className={`${widthTable[width]} flex items-center mt-1.5 font-gray-350 ${bgColor} rounded`}>{children}</div>
    </div>
  );
};

export default InputContainer;

InputContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
