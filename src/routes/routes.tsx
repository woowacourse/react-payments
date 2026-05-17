import { createBrowserRouter, Navigate } from 'react-router-dom';
import CardRegistrationPage from '../pages/CardRegistrationPage';
import App from '../App';
import RegistrationCompletionPage from '../pages/RegistrationCompletionPage';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        { index: true, element: <Navigate to="/registration" replace /> },
        { path: 'registration', element: <CardRegistrationPage /> },
        { path: 'registration/completion', element: <RegistrationCompletionPage /> },
      ],
    },
  ],
  { basename: '/react-payments' }
);

export default router;
