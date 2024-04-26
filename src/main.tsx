import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { CardInfoProvider } from './hooks/useCardInfo.tsx';
import MainPage from './pages/MainPage.tsx';
import ConfirmPage from './pages/ConfirmPage.tsx';

import GlobalStyle from './Global.style.ts';

const router = createBrowserRouter([
  {
    path: '/',
    Component: MainPage,
  },
  {
    path: '/register-confirm',
    Component: ConfirmPage,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <CardInfoProvider>
      <RouterProvider router={router} />
    </CardInfoProvider>
  </React.StrictMode>,
);
