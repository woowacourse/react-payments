import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import './index.css';
import AddCardPage from './pages/AddCardPage';
import CardListPage from './pages/CardListPage';
import CardNicknameInputChange from './pages/CardNicknameInputPage';
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
    {
      path: LOCATION.CARD_NICKNAME_INPUT_PAGRE,
      element: <CardNicknameInputChange />,
    },
  ],
  {
    basename: process.env.PUBLIC_URL,
  }
);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router} />);
