import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
// import App from './App';
import AddCardPage from './pages/AddCardPage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <div>카드 목록</div>,
  },
  {
    path: '/add',
    element: <AddCardPage />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(<RouterProvider router={router} />);
