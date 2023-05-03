import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import { CardListContextProvider } from '@providers/CardContextProvider';
import { PageContextProvider } from '@providers/PageContextProvider';

import App from './App';
import GlobalStyle from './styles/globalStyles';
import { theme } from './styles/theme';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <GlobalStyle />
      <CardListContextProvider>
        <PageContextProvider>
          <App />
        </PageContextProvider>
      </CardListContextProvider>
    </React.StrictMode>
  </ThemeProvider>
);
