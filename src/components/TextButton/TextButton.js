import React from 'react';
import PropTypes from 'prop-types';

const TextButton = (props) => {
  const { text, type = 'submit', color = 'text-green-350', onClick } = props;

  return (
    <button type={type} className={`absolute right-10 ${color} font-bold`} onClick={onClick}>
      {text}
    </button>
  );
};

export default TextButton;

TextButton.propTypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  onClick: PropTypes.func,
};
