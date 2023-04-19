import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
// import App from './App';
import AddCardPage from './pages/AddCardPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CardListPage from './pages/CardListPage';

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

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router} />);
