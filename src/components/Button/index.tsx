import React from 'react';
import * as Styled from './index.styled';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button = ({ children, ...rest }: Props) => {
  return <Styled.Button {...rest}>{children}</Styled.Button>;
};

export default Button;
