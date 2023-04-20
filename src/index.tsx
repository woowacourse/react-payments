import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';

import './styles/index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <BrowserRouter
      basename={
        process.env.NODE_ENV === 'production' ? process.env.PUBLIC_URL : ''
      }
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
