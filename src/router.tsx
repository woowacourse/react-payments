import App from 'App';
import { createBrowserRouter } from 'react-router-dom';

import CreditCardAlias from '@Pages/CreditCardAlias';
import CreditCardRegister from '@Pages/CreditCardRegister';
import Home from '@Pages/Home';

import CreditCardRegisterProvider from '@Contexts/CreditCardRegisterContext';

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
              element: (
                <CreditCardRegisterProvider>
                  <CreditCardRegister />
                </CreditCardRegisterProvider>
              ),
            },
            {
              path: 'alias',
              element: (
                <CreditCardRegisterProvider>
                  <CreditCardAlias />
                </CreditCardRegisterProvider>
              ),
            },
          ],
        },
      ],
    },
  ],
  {
    basename: '/',
  },
);

export default router;
