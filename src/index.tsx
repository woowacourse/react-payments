import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import App from './App';
import CardRegisterPage from './pages/CardRegisterPage';
import HoldingCardsPage from './pages/HoldingCardsPage';
import CardNicknameInputPage from './pages/CardNicknameInputPage';

import './styles/index.css';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <HoldingCardsPage />,
      },
      {
        path: 'card-register',
        element: <CardRegisterPage />,
      },
      {
        path: 'card-nickname',
        element: <CardNicknameInputPage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
