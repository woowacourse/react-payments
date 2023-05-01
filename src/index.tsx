import React from 'react';
import ReactDOM from 'react-dom/client';
import { createHashRouter, RouterProvider } from 'react-router-dom';
import { App } from './components/App';
import { CreditCardListPage } from './components/pages/CreditCardListPage';
import { NewCreditCardPage } from './components/pages/NewCreditCardPage';
import { AddNickNamePage } from './components/pages/AddNickNamePage';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
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
        path: 'addnickname',
        element: <AddNickNamePage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
