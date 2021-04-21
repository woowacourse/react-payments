import React from 'react';
import PropTypes from 'prop-types';

const InputContainer = (props) => {
  return (
    <div className="flex flex-col">
      <label>{props.title}</label>
      <div className={`ring-4 h-10 ${props.width ?? 'w-full'}`}></div>
    </div>
  );
};

export default InputContainer;

InputContainer.propTypes = {
  title: PropTypes.string.isRequired,
  width: PropTypes.number,
};
