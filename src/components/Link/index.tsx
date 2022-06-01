import React from 'react';
import * as Styled from './index.styled';

interface Props {
  children: React.ReactNode;
  to: string;
  state: unknown;
}

const Link = ({ children, ...rest }: Props) => {
  return <Styled.Anchor {...rest}>{children}</Styled.Anchor>;
};

export default Link;
