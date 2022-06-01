import React, { PropsWithChildren } from 'react';
import * as Styled from './index.styled';

type Props = React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({ children, ...rest }: PropsWithChildren<Props>) => {
  return <Styled.Button {...rest}>{children}</Styled.Button>;
};

export default Button;
