import { createBrowserRouter, Navigate } from 'react-router-dom';
import CardRegistrationPage from '../pages/CardRegistrationPage';
import App from '../App';
import RegistrationCompletionPage from '../pages/RegistrationCompletionPage';
import CardListPage from '../pages/CardListPage';
import FormLayout from '../components/Layout/FormLayout';
import CardListLayout from '../components/Layout/CardListLayout';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <Navigate to="/registration" replace /> },
        {
          element: <FormLayout />,
          children: [
            { path: 'registration', element: <CardRegistrationPage /> },
            { path: 'registration/completion', element: <RegistrationCompletionPage /> },
          ],
        },
        {
          element: <CardListLayout />,
          children: [
            {
              path: 'list',
              element: <CardListPage />,
            },
          ],
        },
      ],
    },
  ],
  { basename: '/react-payments' }
);

export default router;
