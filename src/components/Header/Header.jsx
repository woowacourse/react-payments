import React from 'react';
import styled from 'styled-components';

const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

const StyledHeader = styled.header`
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  height: 28px;
  align-items: center;
  flex-direction: row;
  gap: 8px;
`;

export default Header;
