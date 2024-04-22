import React from "react";
import styled from "styled-components";

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  return <Layout>{children}</Layout>;
};

export default AppLayout;

const Layout = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f5f5f5;
  overflow-y: scroll;
`;
