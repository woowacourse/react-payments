import React from 'react';
// import PropTypes from 'prop-types';
import * as Styled from './style.js';

export const ClickableCard = ({ ...props }) => {
  return (
    <Styled.ClickableCardContainer {...props}>
      <Styled.PlusSign>+</Styled.PlusSign>
    </Styled.ClickableCardContainer>
  );
};

// ClickableCard.propTypes = {};

// ClickableCard.defaultProps = {};
