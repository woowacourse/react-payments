import React from 'react';
import PropTypes from 'prop-types';

const Input = (props) => {
  return <input type={props.type} placeholder={props.placeholder} />;
};

export default Input;

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
};
