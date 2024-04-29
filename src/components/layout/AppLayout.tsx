import React from 'react';
import styled from 'styled-components';

interface AppLayoutProps {}

const AppLayout = ({ children }: React.PropsWithChildren<AppLayoutProps>) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.div`
  height: 100vh;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: #f5f5f5;
  overflow-y: scroll;
`;

export default AppLayout;
