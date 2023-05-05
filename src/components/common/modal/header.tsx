import React from 'react';
import styled from 'styled-components';
import { getCustomChildren } from '../../../utils/getCustomChildren';

interface ChildProps {
  children: React.ReactNode;
}

export interface HeaderProps extends ChildProps {
  isCustom?: boolean;
}

const Header: React.FC<HeaderProps> = ({ children, isCustom }) => {
  return isCustom ? (
    getCustomChildren(children, {})
  ) : (
    <StyledDefaultHeader>{children}</StyledDefaultHeader>
  );
};

const StyledDefaultHeader = styled.header`
  width: 100%;

  font-size: 18px;
  font-weight: 700;
  padding: 10px;
`;

export default Header;
