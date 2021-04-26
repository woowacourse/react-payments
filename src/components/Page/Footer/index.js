import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

/**
 * Primary UI component for user interaction
 */
export const Footer = ({ text, ...props }) => {
  return (
    <Styled.Container>
      <Styled.Button {...props}>{text}</Styled.Button>
    </Styled.Container>
  );
};

Footer.propTypes = {
  text: PropTypes.string,
};

// Footer.defaultProps = {};
