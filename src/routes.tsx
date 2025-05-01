import AddCardPage from './pages/AddCardPage';
import { createBrowserRouter } from 'react-router-dom';
import SuccessPage from './pages/SuccessPage';
import Layout from './pages/Layout';
import PATH from './constants/paths';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: PATH.ADD_CARD, element: <AddCardPage /> },
        { path: PATH.SUCCESS, element: <SuccessPage /> },
      ],
    },
  ],
  { basename: '/react-payments/' }
);

export default router;
