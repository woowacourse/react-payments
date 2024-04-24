import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';

import '@styles/reset.css';
import '@styles/index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename="/react-payments/dist/">
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
