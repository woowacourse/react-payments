import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

/**
 * Primary UI component for user interaction
 */
export const InputButton = ({ text, ...props }) => {
  return <Styled.Button {...props}>{text}</Styled.Button>;
};

InputButton.propTypes = {
  text: PropTypes.string,
};

// InputButton.defaultProps = {};
