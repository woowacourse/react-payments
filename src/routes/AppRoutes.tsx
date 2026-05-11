import { Routes, Route } from 'react-router';

import { Payments } from '@/pages/payments';
import { Complete } from '@/pages/complete';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Payments />} />
      <Route path="/payments/register" element={<Payments />} />
      <Route path="/payments/complete" element={<Complete cardNumber="5511" card="bc" />} />
    </Routes>
  );
};
