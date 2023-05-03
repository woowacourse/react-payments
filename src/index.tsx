import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyles from './GlobalStyles';
import App from './App';

import { CardInfoProvider } from './context/CardInfoContext';
import { CardListProvider } from './context/CardListContext';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <CardListProvider>
      <CardInfoProvider>
        <App />
      </CardInfoProvider>
    </CardListProvider>
  </React.StrictMode>
);
