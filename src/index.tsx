import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import AddCardPage from './pages/AddCardPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CardListPage from './pages/CardListPage';
import { LOCATION } from './utils/constants';

const router = createBrowserRouter(
  [
    {
      path: LOCATION.CARD_LIST_PAGE,
      element: <CardListPage />,
    },
    {
      path: LOCATION.ADD_CARD_PAGE,
      element: <AddCardPage />,
    },
  ],
  {
    basename: process.env.PUBLIC_URL,
  }
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router} />);
