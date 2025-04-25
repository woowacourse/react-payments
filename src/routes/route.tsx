import { createBrowserRouter } from 'react-router-dom';

import App from '@/App';

import { CardForm } from '@/pages/CardForm';
import { Confirm } from '@/pages/Confirm';
import { NotFound } from '@/pages/NotFound';

export const router = createBrowserRouter([
  {
    path: 'card',
    element: <App />,
    children: [
      { index: true, path: 'activate', element: <CardForm /> },
      {
        path: 'confirm',
        element: <Confirm />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
