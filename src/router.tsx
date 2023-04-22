import App from 'App';
import { createBrowserRouter } from 'react-router-dom';

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
          element: <CreditCardRegister />,
        },
      ],
    },
  ],
  {
    basename: '/react-payments',
  },
);

export default router;
