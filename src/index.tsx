import React from 'react';
import { CardListContextProvider } from 'provider/CardContextProvider';
import { PageContextProvider } from 'provider/PageContextProvider';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
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
