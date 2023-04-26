import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AddCardPage from '../pages/AddCard/AddCardPage';
import CardListPage from '../pages/CardListPage';

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

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
