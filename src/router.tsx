import { Outlet, createBrowserRouter } from 'react-router-dom';
import { CreditCardListPage } from './pages/CreditCardListPage';
import { ErrorPage } from './pages/ErrorPage';
import { NewCreditCardDisplayNamePage } from './pages/NewCreditCardDisplayNamePage';
import { NewCreditCardPage } from './pages/NewCreditCardPage';

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
          path: 'register',
          element: <NewCreditCardPage />,
        },
        {
          path: 'complete',
          element: <NewCreditCardDisplayNamePage />,
        },
      ],
    },
  ],
  {
    basename: process.env.PUBLIC_URL,
  },
);
