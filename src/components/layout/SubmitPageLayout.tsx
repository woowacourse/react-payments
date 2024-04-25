import React from 'react';
import styled from 'styled-components';

interface SubmitPageLayoutProps {}

const SubmitPageLayout = ({ children }: React.PropsWithChildren<SubmitPageLayoutProps>) => {
  return <Layout>{children}</Layout>;
};

export default SubmitPageLayout;

const Layout = styled.main`
  padding: 18px 32px 0px 32px;
  width: 376px;
  height: 43.75rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #ffffff;

  border-radius: 8px;
`;
