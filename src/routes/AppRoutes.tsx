import { Routes, Route } from 'react-router';

import { Flow } from '@/pages/payments/register/flow';
import { Form } from '@/pages/payments/register/form';
import { Complete } from '@/pages/payments/register/complete';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/payments/register" element={<Flow />}>
        <Route index element={<Form />} />
        <Route path="complete" element={<Complete cardNumber="5511" card="bc" />} />
      </Route>
    </Routes>
  );
};
