import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AddCardPage from '../pages/AddCard/AddCardPage';
import CardListPage from '../pages/CardList/CardListPage';
import CardAliasPage from '../pages/CardAlias';
import { CurrentCardProvider } from '../context/CurrentCardProvider';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CardListPage />,
  },
  {
    path: '/add',
    element: (
      <CurrentCardProvider>
        <AddCardPage />
      </CurrentCardProvider>
    ),
  },
  {
    path: '/alias',
    element: (
      <CurrentCardProvider>
        <CardAliasPage />
      </CurrentCardProvider>
    ),
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
