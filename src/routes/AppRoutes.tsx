import { Routes, Route } from 'react-router';

import { Form } from '@/pages/payments/register/form';
import { Complete } from '@/pages/payments/register/complete';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/payments/register" element={<Form />} />
      <Route path="/payments/complete" element={<Complete cardNumber="5511" card="bc" />} />
    </Routes>
  );
};
