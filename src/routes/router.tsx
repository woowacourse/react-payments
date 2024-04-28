import { createBrowserRouter } from 'react-router-dom';

import { CardRegisterCompletePage, CardRegisterPage, ErrorPage } from '@pages/index';

import { ROUTE_ENDPOINT_MAP } from '@routes/constant';

const BASE_URL = process.env.NODE_ENV === 'production' ? '/react-payments/' : '/';

const router = createBrowserRouter(
  [
    {
      path: '/',
      errorElement: <ErrorPage />,
      children: [
        {
          path: ROUTE_ENDPOINT_MAP.root,
          element: <CardRegisterPage />,
        },
        {
          path: ROUTE_ENDPOINT_MAP.cardRegisterComplete,
          element: <CardRegisterCompletePage />,
        },
      ],
    },
  ],
  {
    basename: BASE_URL,
  },
);

export default router;
