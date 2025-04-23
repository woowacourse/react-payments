import { createBrowserRouter } from 'react-router-dom';
import CardFormComplete from '../pages/CardFormComplete/CardFormComplete';
import CardPaymentPage from '../pages/CardPaymentPage/CardPaymentPage';
import { CardProvider } from '../context/CardContext';

const router = createBrowserRouter([
  {
    path: '/',
    element: (
      <CardProvider>
        <CardPaymentPage />
      </CardProvider>
    ),
  },
  {
    path: '/complete',
    element: <CardFormComplete />,
  },
]);

export default router;
