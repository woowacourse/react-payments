import type { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { PageHeader } from './PageHeader';

const StyledPage = styled.div`
  width: 100%;
  max-width: 600px;
`;

export const Page = (props: PropsWithChildren) => {
  const { children } = props;

  return <StyledPage>{children}</StyledPage>;
};

Page.Header = PageHeader