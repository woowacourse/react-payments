import React from "react";
import styled from "styled-components";

interface InputPageLayoutProps {
  children: React.ReactNode;
}

const InputPageLayout = ({ children }: InputPageLayoutProps) => {
  return <Layout>{children}</Layout>;
};

export default InputPageLayout;

const Layout = styled.main`
  padding: 18px 32px;
  width: 315px;
  height: 43.75rem;

  display: flex;
  flex-direction: column;

  background-color: #ffffff;

  border-radius: 8px;
`;
