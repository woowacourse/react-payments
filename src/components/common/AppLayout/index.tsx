import { PropsWithChildren } from 'react';
import { StyledAppLayoutContainer } from './AppLayout.styled';

export const AppLayout = ({ children }: PropsWithChildren) => {
  return <StyledAppLayoutContainer>{children}</StyledAppLayoutContainer>;
};
