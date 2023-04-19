import type { PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';
import { Text } from './Text';

const StyledHeader = styled.header`
  padding: 20px 36px;
`;

type PageHeaderProps = PropsWithChildren<{
  leading?: ReactNode;
}>;

export const PageHeader = (props: PageHeaderProps) => {
  const { leading, children } = props;

  return (
    <StyledHeader>
      {leading}  
      <Text size="large">{children}</Text>
    </StyledHeader>
  );
};
