import React from 'react';
import styled from 'styled-components';

interface InputPageLayoutProps {}

const InputPageLayout = ({ children }: React.PropsWithChildren<InputPageLayoutProps>) => {
  return <Layout>{children}</Layout>;
};

export default InputPageLayout;

const Layout = styled.main`
  padding: 18px 32px 0px 32px;
  width: 376px;
  height: 43.75rem;

  display: flex;
  flex-direction: column;

  position: relative;

  background-color: #ffffff;

  border-radius: 8px;
`;
