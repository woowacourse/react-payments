import React, { PropsWithChildren } from 'react';
import Header from '../Header/Header';
import * as Styled from './Layout.styles';

interface LayoutProps {
  header?: boolean;
}

export default function Layout({ children, header = true }: PropsWithChildren<LayoutProps>) {
  return (
    <Styled.Root>
      {header && <Header />}
      {children}
    </Styled.Root>
  );
}
