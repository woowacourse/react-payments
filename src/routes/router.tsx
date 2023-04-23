import { createBrowserRouter, Navigate } from 'react-router-dom';
import CardList from '../components/pages/CardList';
import RegisterPage from '../components/pages/RegisterPage';
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
          element: <RegisterPage />,
        },
        {
          path: '/*',
          element: <Navigate to={''} />,
        },
      ],
    },
  ],
  {
    basename: '/',
  }
);

export default router;
