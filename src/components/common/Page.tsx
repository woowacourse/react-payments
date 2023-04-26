import type { PropsWithChildren } from 'react';
import styled from 'styled-components';
import { PageHeader } from './PageHeader';

const StyledPage = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  max-width: 600px;
`;

export const Page = (props: PropsWithChildren) => {
  const { children } = props;

  return <StyledPage>{children}</StyledPage>;
};

Page.Header = PageHeader;
