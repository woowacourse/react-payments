import AppLayout from 'layouts/AppLayout';
import CreditCardRegisterLayout from 'layouts/CreditCardRegisterLayout';
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
          path: '/register',
          element: (
            <CreditCardRegisterLayout>
              <Outlet />
            </CreditCardRegisterLayout>
          ),
          children: [
            {
              path: '',
              element: <CreditCardRegister />,
            },
            {
              path: 'done',
              element: <CreditCardRegisterDone />,
            },
          ]
        },
      ],
    },
  ],
  {
    basename: '/react-payments',
  }
);

export default router;
