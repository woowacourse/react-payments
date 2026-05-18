import type { ReactNode } from 'react';
import { Navigate } from 'react-router';

import { ROUTES } from '@/constants/routes';

import { Flow } from '@/pages/payments/register/flow';
import { Form } from '@/pages/payments/register/form';

import { Complete } from '@/pages/payments/register/complete';

import { Cards } from '@/pages/payments/cards';

export interface RouteItem {
  path: string;
  element: ReactNode;
  children?: RouteItem[];
}

export const routes: RouteItem[] = [
  { path: ROUTES.HOME, element: <Navigate to={ROUTES.PAYMENTS.CARDS} replace /> },
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
