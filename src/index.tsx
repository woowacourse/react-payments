import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from 'router';
import CardFormProvider from 'CardFormProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CardFormProvider>
      <RouterProvider router={router} />
    </CardFormProvider>
  </React.StrictMode>
);
