import { Outlet, createBrowserRouter } from 'react-router-dom';
import { CreditCardListPage } from './pages/CreditCardListPage';
import { ErrorPage } from './pages/ErrorPage';
import { NewCreditCardCompletionPage } from './pages/NewCreditCardCompletionPage';
import { NewCreditCardPage } from './pages/NewCreditCardPage';
import { NewCreditCardRegistrationPage } from './pages/NewCreditCardRegistrationPage';

export const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Outlet />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: '',
          element: <CreditCardListPage />,
        },
        {
          path: 'new',
          element: <NewCreditCardPage />,
        },
        {
          path: 'register',
          element: <NewCreditCardRegistrationPage />,
        },
        {
          path: 'complete',
          element: <NewCreditCardCompletionPage />,
        },
      ],
    },
  ],
  {
    basename: process.env.PUBLIC_URL,
  },
);
