import { createBrowserRouter } from 'react-router';
import CardPage from '../../pages/CardPage/CardPage';
import CompletePage from '../../pages/CompletePage/CompletePage';

export const router = () => {
  return createBrowserRouter([
    {
      path: '/',
      element: <CardPage />,
    },
    {
      path: '/complete',
      element: <CompletePage />,
    },
  ]);
};
