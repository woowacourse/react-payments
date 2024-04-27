import { createBrowserRouter } from 'react-router-dom';
import CardRegistration from './pages/CardRegistration/CardRegistration';
import RegistrationConfirm from './pages/RegistrationConfirm/RegistrationConfirm';
import GeneralLayout from './components/GeneralLayout';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <GeneralLayout />,
    children: [
      {
        path: '',
        element: <CardRegistration />,
      },
      {
        path: 'confirm',
        element: <RegistrationConfirm />,
      },
    ],
  },
]);
