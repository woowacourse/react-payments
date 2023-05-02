import App from 'App';
import CreditCardRegister from 'pages/CreditCardRegister';
import CreditCardRegisterDone from 'pages/CreditCardRegisterDone';
import Home from 'pages/Home';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
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
