import React, { memo } from 'react';
import * as Styled from './index.styled';

interface Props {
  children: React.ReactNode;
}

const Header = ({ children }: Props) => {
  return <Styled.Container>{children}</Styled.Container>;
};

export default memo(Header);
