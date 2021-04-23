import React from 'react';
import PropTypes from 'prop-types';

const InputContainer = (props) => {
  const { title, children } = props;

  return (
    <div className="flex flex-col mt-5">
      <label className="text-xs">{title}</label>
      <div className="flex mt-1.5">{children}</div>
    </div>
  );
};

export default InputContainer;

InputContainer.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
};
