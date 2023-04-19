import type { PropsWithChildren, ReactNode } from 'react';
import styled from 'styled-components';
import { Text } from './Text';

const Header = styled.header`
  display: flex;
  align-items: center;
  gap: 16px;

  padding: 20px 36px;
`;

type PageHeaderProps = PropsWithChildren<{
  leading?: ReactNode;
}>;

export const PageHeader = (props: PageHeaderProps) => {
  const { leading, children } = props;

  return (
    <Header>
      {leading}
      <Text size="large">{children}</Text>
    </Header>
  );
};
