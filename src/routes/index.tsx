import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Completion from './Completion';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/completion',
      element: <Completion />,
    },
  ],
  {
    basename: '/react-payments',
  },
);

export default function Router() {
  return <RouterProvider router={router} />;
}
