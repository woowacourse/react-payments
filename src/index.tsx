import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import GlobalStyle from './GlobalStyle';
import { CardContextProvider } from './context/CardContext';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <CardContextProvider>
      <App />
    </CardContextProvider>
  </React.StrictMode>
);
