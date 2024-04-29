import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import CardRegisterPage from './pages/CardRegisterPage';
import CardRegisterComplete from './pages/CardRegisterCompletePage/CardRegisterCompletePage';

import ENDPOINTS from './constants/endpoints';

const router = createBrowserRouter([
  {
    path: ENDPOINTS.cardRegister,
    element: <CardRegisterPage />,
  },
  {
    path: ENDPOINTS.cardRegisterComplete,
    element: <CardRegisterComplete />,
  }
])

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}
