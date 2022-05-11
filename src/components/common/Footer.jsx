import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

function Footer({ children }) {
  return <FooterContainer>{children}</FooterContainer>;
}

export default Footer;
