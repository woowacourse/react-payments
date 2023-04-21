import { createBrowserRouter, Navigate } from 'react-router-dom';
import CardList from '../pages/CardList';
import CardRegister from '../pages/CardRegister';
import App from '../App';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: 'card-list',
          element: <CardList />,
        },
        {
          path: 'card-register',
          element: <CardRegister />,
        },
        {
          path: '/*',
          element: <Navigate to={'card-list'} />,
        },
      ],
    },
  ],
  {
    basename: '/',
  }
);

export default router;
