import type { ReactNode } from 'react';
import { Navigate } from 'react-router';

import { ROUTES } from '@/constants/routes';

import { Flow } from '@/pages/payments/register/flow';
import { Form } from '@/pages/payments/register/form';

import { Complete } from '@/pages/payments/register/complete';

import { Cards } from '@/pages/payments/cards';

interface Route {
  path: string;
  element: ReactNode;
  children?: Route[];
}

export const routes: Route[] = [
  { path: ROUTES.HOME, element: <Navigate to={ROUTES.PAYMENTS.REGISTER} replace /> },
  {
    path: ROUTES.PAYMENTS.REGISTER,
    element: <Flow />,
    children: [
      { path: '', element: <Form /> },
      { path: 'complete', element: <Complete /> },
    ],
  },
  { path: ROUTES.PAYMENTS.CARDS, element: <Cards /> },
];
