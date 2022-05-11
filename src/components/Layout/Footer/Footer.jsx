import React from 'react';
import styled from 'styled-components';

const Footer = ({ children }) => {
  return <StyledFooter>{children}</StyledFooter>;
};

const StyledFooter = styled.footer`
  position: absolute;
  display: flex;
  flex-direction: row;
  height: 34px;
  right: 25px;
  bottom: 16px;
  float: right;
`;

export default Footer;
