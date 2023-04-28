import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { App } from './App';
import { CreditCardListPage } from './pages/CreditCardListPage';
import { ErrorPage } from './pages/ErrorPage';
import { NewCreditCardDisplayNamePage } from './pages/NewCreditCardDisplayNamePage';
import { NewCreditCardPage } from './pages/NewCreditCardPage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '',
          element: <CreditCardListPage />,
        },
        {
          path: 'register',
          element: <NewCreditCardPage />,
        },
        {
          path: 'complete',
          element: <NewCreditCardDisplayNamePage />,
        },
      ],
    },
  ],
  {
    basename: process.env.PUBLIC_URL,
  },
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
