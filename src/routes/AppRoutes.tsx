import { Navigate, Routes, Route } from 'react-router';

import { ROUTES } from '@/constants/routes';

import { Flow } from '@/pages/payments/register/flow';
import { Form } from '@/pages/payments/register/form';
import { Complete } from '@/pages/payments/register/complete';

import { Cards } from '@/pages/payments/cards';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path={ROUTES.HOME} element={<Navigate to={ROUTES.PAYMENTS.REGISTER} replace />} />
      <Route path={ROUTES.PAYMENTS.REGISTER} element={<Flow />}>
        <Route index element={<Form />} />
        <Route path="complete" element={<Complete />} />
      </Route>
      <Route path={ROUTES.PAYMENTS.CARDS} element={<Cards />}></Route>
    </Routes>
  );
};
