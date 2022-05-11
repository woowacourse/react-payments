import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import BaseButton from './BaseButton';

const StyledCardButton = styled(BaseButton)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 208px;
  height: 130px;

  font-size: 30px;
  color: #575757;

  background: #e5e5e5;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  user-select: none;
`;

function CardButton({ children, ...rest }) {
  return <StyledCardButton {...rest}>{children}</StyledCardButton>;
}

CardButton.propTypes = {
  children: PropTypes.string,
};

export default CardButton;
