import React from 'react';
import PropTypes from 'prop-types';
import * as Styled from './style.js';

/**
 * Primary UI component for user interaction
 */
export const Header = ({ titleText, hasButton, ...props }) => {
  return (
    <Styled.Container>
      {hasButton && <Styled.Button {...props}>{'◀︎'}</Styled.Button>}
      <Styled.Title>{titleText}</Styled.Title>
    </Styled.Container>
  );
};

Header.propTypes = {
  buttonText: PropTypes.string,
  titleText: PropTypes.string,
};

// Header.defaultProps = {};
