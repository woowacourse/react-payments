import React from 'react';
// import PropTypes from 'prop-types';
import * as Styled from './style.js';

/**
 * Primary UI component for user interaction
 */
export const CardButton = ({ ...props }) => {
  return (
    <Styled.CardButtonContainer {...props}>
      <Styled.PlusSign>+</Styled.PlusSign>
    </Styled.CardButtonContainer>
  );
};

// CardButton.propTypes = {};

// CardButton.defaultProps = {};
