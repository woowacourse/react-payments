import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  children: React.ReactNode;
  color: string;
  backgroundColor: string;
}

const StyledButton = styled.button<ButtonProps>`
  background: none;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  text-align: right;
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: ${(props) => props.color || props.theme.MINT};
  background-color: ${(props) => props.backgroundColor || 'transparent'};

  &:active,
  &:hover,
  &:focus {
    opacity: 0.8;
  }

  &:disabled {
    cursor: default;
    opacity: 0.5;
  }
`;

const Button = ({ children, color, backgroundColor, ...rest }: ButtonProps) => {
  return (
    <StyledButton
      className="button"
      type="button"
      color={color}
      backgroundColor={backgroundColor}
      {...rest}
    >
      {children}
    </StyledButton>
  );
};

export default Button;
