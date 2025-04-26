import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ConfirmButtonProvider } from './hooks/confirmButtonContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfirmButtonProvider>
      <App />
    </ConfirmButtonProvider>
  </React.StrictMode>
);
