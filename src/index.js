import React from 'react';
import ReactDOM from 'react-dom/client';

import 'styles/index.css';

import { CardContextProvider } from 'contexts';

import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CardContextProvider>
      <App />
    </CardContextProvider>
  </React.StrictMode>,
);
