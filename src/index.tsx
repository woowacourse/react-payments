import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createHashRouter } from 'react-router-dom';

import App from './App';
import CardRegisterPage from './pages/CardRegisterPage';
import HoldingCardsPage from './pages/HoldingCardsPage';
import CardNicknameInputPage from './pages/CardNicknameInputPage';
import WaitingPage from './pages/WaitingPage';
import CompletePage from './pages/CompletePage';
import ErrorPage from './pages/ErrorPage';

import './styles/index.css';

const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
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
        path: 'card-nickname/:cardId',
        element: <CardNicknameInputPage />,
      },
      {
        path: 'waiting/:cardId',
        element: <WaitingPage />,
      },
      {
        path: 'complete/:cardId',
        element: <CompletePage />,
      },
      {
        path: 'error',
        element: <ErrorPage />,
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
