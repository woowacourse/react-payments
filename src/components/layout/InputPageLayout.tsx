import React from 'react';
import styled from 'styled-components';

interface InputPageLayoutProps {}

const InputPageLayout = ({ children }: React.PropsWithChildren<InputPageLayoutProps>) => {
  return <Layout>{children}</Layout>;
};

const Layout = styled.main`
  padding: 18px 32px 0px 32px;
  width: 376px;
  height: 700px;

  display: flex;
  flex-direction: column;

  position: relative;

  background-color: #ffffff;

  border-radius: 8px;
`;

export default InputPageLayout;
