import React from 'react';
import styled from 'styled-components';

const Footer = ({ children }) => {
  return <StyledFooter>{children}</StyledFooter>;
};

const StyledFooter = styled.footer`
  position: absolute;
  width: 51px;
  height: 34px;
  right: 25px;
  bottom: 16px;
`;

export default Footer;
