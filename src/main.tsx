import React from 'react';

import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router';

import { router } from './routes/route.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
