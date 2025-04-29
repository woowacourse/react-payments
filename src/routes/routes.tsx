import { createBrowserRouter, Navigate } from 'react-router-dom';
import CardRegisterPage from '../pages/card-register/CardRegisterPage';
import CardRegisterCompletePage from '../pages/card-register-complete/CardRegisterCompletePage';

export const PATH = {
  ROOT: '/',
  CARD_REGISTER: '/card-register',
  CARD_REGISTER_COMPLETE: '/card-register-complete',
};

export const router = createBrowserRouter(
  [
    {
      path: PATH.ROOT,
      element: <Navigate to={PATH.CARD_REGISTER} replace />,
    },
    {
      path: PATH.CARD_REGISTER,
      element: <CardRegisterPage />,
    },
    {
      path: PATH.CARD_REGISTER_COMPLETE,
      element: <CardRegisterCompletePage />,
    },
  ],
  {
    basename: '/react-payments',
  }
);
