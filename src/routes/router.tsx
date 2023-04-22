import { createBrowserRouter, Navigate } from 'react-router-dom';
import CardList from '../components/pages/CardList';
import CardRegister from '../components/pages/CardRegister';
import App from '../App';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
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
