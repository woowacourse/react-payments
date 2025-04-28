import { createBrowserRouter, RouterProvider } from 'react-router';

import { Home } from './pages/Home';
import { Register } from './pages/Register';
import { Result } from './pages/Result';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/register',
      element: <Register />,
    },
    {
      path: '/result',
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
