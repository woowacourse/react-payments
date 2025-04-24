import AddCard from './pages/AddCard';
import { createBrowserRouter } from 'react-router-dom';
import Success from './pages/Success';
import Layout from './pages/Layout';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Layout />,
      children: [
        { path: '/', element: <AddCard /> },
        { path: '/success', element: <Success /> },
      ],
    },
  ],
  { basename: '/react-payments/' }
);

export default router;
