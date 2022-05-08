import React from 'react';
import styled from 'styled-components';

const Header = ({ children }) => {
  return <StyledHeader>{children}</StyledHeader>;
};

const StyledHeader = styled.header`
  position: absolute;
  margin: 22px 24px 0px;
  width: auto;
  font-weight: 500;
  font-size: 16px;
  line-height: 18px;
  display: flex;
  height: 24px;
  align-items: center;
  flex-direction: row;
  gap: 8px;
`;

export default Header;
