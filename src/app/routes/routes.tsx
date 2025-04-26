import { createBrowserRouter } from 'react-router';
import CardPage from '../../pages/CardPage/CardPage';
import RegisterPage from '../../pages/RegisterPage/RegisterPage';

export const router = createBrowserRouter([
  {
    path: '/card',
    element: <CardPage />,
  },
  {
    path: '/register',
    element: <RegisterPage />,
  },
]);
