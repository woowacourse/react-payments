import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  position: absolute;
  width: 51px;
  height: 34px;
  right: 25px;
  bottom: 16px;

  text-align: right;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.color || '#04c09e'};
  background-color: ${(props) => props.backgroundColor || 'transparent'};

  &:active,
  &:hover,
  &:focus {
    opacity: 0.3;
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

const Button = ({ children, color, backgroundColor }) => {
  return (
    <StyledButton color={color} backgroundColor={backgroundColor}>
      {children}
    </StyledButton>
  );
};

export default Button;
