import { createBrowserRouter, RouterProvider } from 'react-router';

import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Result } from './pages/Result';

const ROUTE_PATH = {
  HOME: '/',
  REGISTER: '/register',
  RESULT: '/result',
};

const router = createBrowserRouter(
  [
    {
      path: ROUTE_PATH.HOME,
      element: <Home />,
    },
    {
      path: ROUTE_PATH.REGISTER,
      element: <Register />,
    },
    {
      path: ROUTE_PATH.RESULT,
      element: <Result />,
    },
  ],
  {
    basename: '/react-payments/',
  }
);

export const Router = () => {
  return <RouterProvider router={router} />;
};
