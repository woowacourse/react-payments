import type { PropsWithChildren } from 'react';
import React, { useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { App } from './App';
import { useMediaQuery } from './hooks/useMediaQuery';
import { CreditCardListPage } from './pages/CreditCardListPage';
import { ErrorPage } from './pages/ErrorPage';
import { NewCreditCardDisplayNamePage } from './pages/NewCreditCardDisplayNamePage';
import { NewCreditCardPage } from './pages/NewCreditCardPage';
import { GlobalStyle } from './styles/GlobalStyle';
import { ResetStyle } from './styles/ResetStyle';
import { dark, light } from './styles/theme';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '',
          element: <CreditCardListPage />,
        },
        {
          path: 'register',
          element: <NewCreditCardPage />,
        },
        {
          path: 'complete',
          element: <NewCreditCardDisplayNamePage />,
        },
      ],
    },
  ],
  {
    basename: process.env.PUBLIC_URL,
  },
);

const PaymentsThemeProvider = (props: PropsWithChildren) => {
  const { children } = props;
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(() => (prefersDarkMode ? dark : light), [prefersDarkMode]);

  return (
    <ThemeProvider theme={theme}>
      <ResetStyle />
      <GlobalStyle />

      {children}
    </ThemeProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <PaymentsThemeProvider>
      <RouterProvider router={router} />
    </PaymentsThemeProvider>
  </React.StrictMode>,
);
