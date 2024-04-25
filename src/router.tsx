import { createBrowserRouter } from 'react-router-dom';
import CardRegister from './pages/CardRegister/CardRegister';
import RegisterConfirm from './pages/RegisterConfirm/RegisterConfirm';

export const router = createBrowserRouter([
  {
    path: '/',
    children: [
      {
        path: '',
        element: <CardRegister />,
      },
      {
        path: 'confirm',
        element: <RegisterConfirm />,
      },
    ],
  },
]);
