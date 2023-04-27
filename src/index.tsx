import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './GlobalStyles';
import App from './App';
import { CardInfoProvider } from './context/CardInfoContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <CardInfoProvider>
      <App />
    </CardInfoProvider>
  </React.StrictMode>
);
