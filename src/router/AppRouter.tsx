import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AddCardPage from '../pages/AddCardPage';
import CardListPage from '../pages/CardListPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CardListPage />,
  },
  {
    path: '/add',
    element: <AddCardPage />,
  },
]);

const AppRouter = () => {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
};

export default AppRouter;
