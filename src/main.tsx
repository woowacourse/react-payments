import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ConfirmButtonProvider } from './context/ConfirmButtonContext.tsx';
import { CardFormProvider } from './context/CardFormContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <CardFormProvider>
      <ConfirmButtonProvider>
        <App />
      </ConfirmButtonProvider>
    </CardFormProvider>
  </React.StrictMode>
);
