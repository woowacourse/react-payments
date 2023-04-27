import { createBrowserRouter } from 'react-router-dom';
import CardListPage from '../components/pages/CardListPage';
import RegisterPage from '../components/pages/RegisterPage';
import App from '../App';
import SuccessPage from '../components/pages/SuccessPage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: '',
          element: <CardListPage />,
        },
        {
          path: 'card-register',
          element: <RegisterPage />,
        },
        {
          path: 'register-success',
          element: <SuccessPage />,
        },
      ],
    },
  ],
  {
    basename: '/react-payments',
  }
);

export default router;
