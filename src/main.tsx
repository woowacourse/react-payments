import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './reset.css';
import { BrowserRouter } from 'react-router';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter basename={import.meta.env.VITE_BASE_URL}>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
