import React from 'react';
import PropTypes from 'prop-types';

const InputContainer = (props) => {
  const { title } = props;

  return (
    <div className="flex flex-col">
      <label>{title}</label>
      <div className=" flex"></div>
    </div>
  );
};

export default InputContainer;

InputContainer.propTypes = {
  title: PropTypes.string.isRequired,
};
