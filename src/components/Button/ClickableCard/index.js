import React from 'react';
// import PropTypes from 'prop-types';
import * as Styled from './style.js';

/**
 * Primary UI component for user interaction
 */
export const ClickableCard = ({ ...props }) => {
  return (
    <Styled.ClickableCardContainer {...props}>
      <Styled.PlusSign>+</Styled.PlusSign>
    </Styled.ClickableCardContainer>
  );
};

// ClickableCard.propTypes = {};

// ClickableCard.defaultProps = {};
