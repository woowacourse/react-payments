import { createBrowserRouter, Navigate } from 'react-router-dom';
import CardRegisterPage from '../pages/card-register/CardRegisterPage';
import CardRegisterCompletePage from '../pages/card-register-complete/CardRegisterCompletePage';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Navigate to='/card-register' replace />,
    },
    {
      path: '/card-register',
      element: <CardRegisterPage />,
    },
    {
      path: '/card-register-complete',
      element: <CardRegisterCompletePage />,
    },
  ],
  {
    basename: '/react-payments',
  }
);
