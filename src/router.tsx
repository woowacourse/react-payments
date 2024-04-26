import { createBrowserRouter } from 'react-router-dom';
import CardRegister from './pages/CardRegister/CardRegister';
import RegisterConfirm from './pages/RegisterConfirm/RegisterConfirm';
import GeneralLayout from './components/GeneralLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <GeneralLayout />,
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
