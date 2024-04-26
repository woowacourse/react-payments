import React from 'react';
import ReactDOM from 'react-dom/client';
import theme from './styles/theme.ts';
import GlobalStyle from './styles/GlobalStyle.ts';
import { ThemeProvider } from 'styled-components';
import { RouterProvider } from 'react-router-dom';
import router from './router.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>,
);
