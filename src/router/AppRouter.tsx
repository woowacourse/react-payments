import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import AddCardPage from '../pages/AddCard';
import CardListPage from '../pages/CardList';
import CardAliasPage from '../pages/CardAlias';
import { CurrentCardProvider } from '../context/CurrentCardProvider';
import { IsAccessAliasPageProvider } from '../context/IsAccessAliasPageProvider';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <CardListPage />,
  },
  {
    path: '/add',
    element: (
      <IsAccessAliasPageProvider>
        <CurrentCardProvider>
          <AddCardPage />
        </CurrentCardProvider>
      </IsAccessAliasPageProvider>
    ),
  },
  {
    path: '/alias',
    element: (
      <IsAccessAliasPageProvider>
        <CurrentCardProvider>
          <PrivateRoute>
            <CardAliasPage />
          </PrivateRoute>
        </CurrentCardProvider>
      </IsAccessAliasPageProvider>
    ),
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
