import React from 'react';
import PropTypes from 'prop-types';

const InputContainer = (props) => {
  const { title, children, width, bgColor = '', count = false } = props;

  return (
    <div className="flex w-full flex-col mt-5">
      <div className="flex justify-between items-center">
        <label className="text-xs ">{title}</label>
        <span className="mr-1 text-xs">{count || count === 0 ? `${count}/30` : ''}</span>
      </div>
      <div className={`${width} flex items-center mt-1.5 font-gray-350 ${bgColor} rounded`}>{children}</div>
    </div>
  );
};

export default InputContainer;

InputContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element,
};
