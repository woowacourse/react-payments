import AddCardPage from './pages/AddCardPage';
import { createBrowserRouter } from 'react-router-dom';
import SuccessPage from './pages/SuccessPage';
import Layout from './pages/Layout';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <AddCardPage /> },
        { path: '/success', element: <SuccessPage /> },
      ],
    },
  ],
  { basename: '/react-payments/' }
);

export default router;
