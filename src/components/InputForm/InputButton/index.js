import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

export const InputButton = ({ text, ...props }) => {
  return <Styled.Button {...props}>{text}</Styled.Button>;
};

InputButton.propTypes = {
  text: PropTypes.string,
};
