import App from 'App';
import { createBrowserRouter } from 'react-router-dom';

import CreditCardAlias from '@Pages/CreditCardAlias';
import CreditCardRegister from '@Pages/CreditCardRegister';
import Home from '@Pages/Home';

import { PATH_ALIAS, PATH_NAME } from '@Constants/routes';

const router = createBrowserRouter(
  [
    {
      path: PATH_ALIAS.home,
      element: <App />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: PATH_NAME.register,
          children: [
            {
              path: '',
              element: <CreditCardRegister />,
            },
            {
              path: PATH_NAME.alias,
              element: <CreditCardAlias />,
            },
          ],
        },
      ],
    },
  ],
  {
    basename: PATH_ALIAS.base,
  },
);

export default router;
