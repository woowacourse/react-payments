import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from '../styles/global.ts';
import App from './App.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
