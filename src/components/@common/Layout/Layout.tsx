import React from 'react';
import { Outlet } from 'react-router-dom';
import * as Styled from './Layout.styles';

export default function Layout() {
  return (
    <Styled.Root>
      <Outlet />
    </Styled.Root>
  );
}
