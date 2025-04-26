import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';
import GlobalStyle from './GlobalStyle.styles.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/react-payments">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
