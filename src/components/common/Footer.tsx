import React from "react";
import styled from "styled-components";

interface FooterProps {
  children: React.ReactNode;
}

const FooterContainer = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

function Footer({ children }: FooterProps) {
  return <FooterContainer>{children}</FooterContainer>;
}

export default Footer;
