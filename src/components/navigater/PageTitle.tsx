import React from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

const PageTitleStyled = styled.p(css`
  font-size: 1.5rem;
`);

function PageTitle({ children }: { children: React.ReactNode }) {
  return <PageTitleStyled>{children}</PageTitleStyled>;
}

export default PageTitle;
