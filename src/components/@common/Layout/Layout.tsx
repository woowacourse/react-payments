import React from 'react';
import { Outlet } from 'react-router-dom';
import CardRegisterProvider from '../../../context/CardRegisterContext';
import Header from '../Header/Header';
import * as Styled from './Layout.styles';

export default function Layout() {
  return (
    <Styled.Root>
      <Header />
      <CardRegisterProvider>
        <Outlet />
      </CardRegisterProvider>
    </Styled.Root>
  );
}
