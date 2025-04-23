import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage/HomePage';
import { CardRegisterSuccessPage } from './pages/CardRegisterSuccessPage/CardRegisterSuccessPage';

const router = createBrowserRouter([
  {
    path: '/react-payments',
    element: <HomePage />,
  },
  {
    path: '/react-payments/complete',
    element: <CardRegisterSuccessPage />,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
