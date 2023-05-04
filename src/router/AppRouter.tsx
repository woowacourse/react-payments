import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AddCardPage from '../pages/AddCard';
import CardListPage from '../pages/CardList';
import CardAliasPage from '../pages/CardAlias';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CardListPage />,
  },
  {
    path: '/add',
    element: <AddCardPage />,
  },
  {
    path: '/alias',
    element: <CardAliasPage />,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
