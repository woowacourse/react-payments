import React from 'react';

import styled, { css } from 'styled-components';

/* type */
interface ButtonStyleProps {
  type: 'button' | 'submit';
  kind: 'next' | 'previous' | 'register';
}

interface ButtonProps extends ButtonStyleProps {
  children: React.ReactNode;
}

/* component */
const Button: React.FC<ButtonProps> = ({ children, type, kind }) => {
  return (
    <StyledButton type={type} kind={kind}>
      {children}
    </StyledButton>
  );
};

/* styles */
const StyledButton = styled.button<ButtonStyleProps>`
  border: none;
  outline: none;
  cursor: pointer;

  ${(props) => {
    return (
      props.kind === 'previous' &&
      css`
        width: 20px;
        height: 20px;
      `
    );
  }}

  ${(props) => {
    return (
      props.kind === 'next' &&
      css`
        width: 50px;
        height: 30px;
        font-weight: 700;
        font-size: 14px;
        color: #000;
        line-height: 16px;
      `
    );
  }}
  
  ${(props) => {
    return (
      props.kind === 'register' &&
      css`
        width: 212px;
        height: 124px;
        background: #e5e5e5;
        border-radius: 5px;
        font-size: 30px;
        color: #575757;
      `
    );
  }}
`;

export default Button;
