import AppLayout from 'layouts/AppLayout';
import CreditCardRegister from 'pages/CreditCardRegister';
import CreditCardRegisterDone from 'pages/CreditCardRegisterDone';
import Home from 'pages/Home';
import { Outlet, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: (
        <AppLayout>
          <Outlet />
        </AppLayout>
      ),
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: 'register',
          element: <CreditCardRegister />,
        },
        {
          path: 'register-done',
          element: <CreditCardRegisterDone />,
        },
      ],
    },
  ],
  {
    basename: '/react-payments',
  }
);

export default router;
