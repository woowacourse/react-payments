import { createBrowserRouter } from 'react-router-dom';
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
      ],
    },
  ],
  {
    basename: '/react-payments',
  }
);

export default router;
