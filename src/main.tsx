import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from '../styles/global.ts';
import App from './App.tsx';
import { BrowserRouter } from 'react-router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/react-payments">
      <GlobalStyle />
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
