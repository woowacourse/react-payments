import React from 'react';

import styled from 'styled-components';

/* type */
interface ButtonStyleProps {
  type: 'button' | 'submit';
  width?: string;
  height?: string;
  bgColor?: string;
  borderRadius?: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

interface ButtonProps extends ButtonStyleProps {
  children: React.ReactNode;
}

/* component */
const Button: React.FC<ButtonProps> = ({ children, type, ...rest }) => {
  return (
    <StyledButton type={type} {...rest}>
      {children}
    </StyledButton>
  );
};

/* styles */
const StyledButton = styled.button<ButtonStyleProps>`
  border: none;
  outline: none;
  cursor: pointer;
  color: #000;

  width: 50%;
  height: 20px;
  background-color: #fff;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => props.bgColor};
  border-radius: ${(props) => props.borderRadius};
`;

export default Button;
