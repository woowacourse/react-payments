import React from 'react';
import { memo } from 'react';
import * as Styled from './index.styled';

interface Props {
  children: React.ReactNode;
}

const ErrorMessage = ({ children }: Props) => {
  return <Styled.Container>🚫 {children}</Styled.Container>;
};

export default memo(ErrorMessage);
