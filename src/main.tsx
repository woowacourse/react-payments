import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import theme from './styles/theme.ts';
import GlobalStyle from './styles/GlobalStyle.ts';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
);
