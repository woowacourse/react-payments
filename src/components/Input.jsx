import React from 'react';
import PropTypes from 'prop-types';

const Input = function (props) {
  const { labelTitle, children } = props;

  return (
    <div className="input-container">
      <span className="input-title">{labelTitle}</span>
      {children}
    </div>
  );
};

Input.propTypes = {
  labelTitle: PropTypes.string,
  children: PropTypes.node,
};

export default Input;
