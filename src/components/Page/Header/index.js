import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

/**
 * Primary UI component for user interaction
 */
export const Header = ({ buttonText, titleText, ...props }) => {
  return (
    <Styled.Container>
      <Styled.Button {...props}>{buttonText}</Styled.Button>
      <Styled.Title>{titleText}</Styled.Title>
    </Styled.Container>
  );
};

Header.propTypes = {
  buttonText: PropTypes.string,
  titleText: PropTypes.string,
};

// Header.defaultProps = {};
