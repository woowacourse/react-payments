import App from 'App';
import { createBrowserRouter } from 'react-router-dom';

import CreditCardAlias from '@Pages/CreditCardAlias';
import CreditCardRegister from '@Pages/CreditCardRegister';
import Home from '@Pages/Home';

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
          children: [
            {
              path: '',
              element: <CreditCardRegister />,
            },
            {
              path: 'alias',
              element: <CreditCardAlias />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: '/react-payments',
  },
);

export default router;
