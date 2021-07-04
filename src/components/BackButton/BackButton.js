import React from 'react';
import PropTypes from 'prop-types';

const BackButton = (props) => {
  const { onClick } = props;

  return (
    <button className="w-4 h-4" onClick={onClick}>
      <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.30426 1L1.36476 8.78658L9.15134 15.7261" stroke="#525252" strokeWidth="1.5" />
      </svg>
    </button>
  );
};

BackButton.protoTypes = {
  onClick: PropTypes.func,
};

export default BackButton;
