import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from 'router';
import CardFormProvider from 'CardFormProvider';
import { StrictMode } from 'react';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <CardFormProvider>
      <RouterProvider router={router} />
    </CardFormProvider>
  </StrictMode>
);
