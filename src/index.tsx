import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import MyCardPage from './pages/MyCardPage';
import AddCardPage from './pages/AddCardPage';
import AddCardNamePage from './pages/AddCardNamePage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <MyCardPage />,
      },
      {
        path: 'addCard',
        element: <AddCardPage />,
      },
      {
        path: 'addCardName',
        element: <AddCardNamePage />,
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
