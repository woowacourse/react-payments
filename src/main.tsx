import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AddCardPage from './components/pages/AddCard/AddCardPage.tsx';
import ConfirmAddCardPage from './components/pages/ConfirmAddCard/ConfirmAddCardPage.tsx';
import NotFoundPage from './components/pages/NotFound/NotFoundPage.tsx';
import ErrorBoundary from './components/pages/ErrorBoundary/ErrorBoundary.tsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: <AddCardPage />,
      },
      {
        path: '/confirm',
        element: <ConfirmAddCardPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
