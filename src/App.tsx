import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage';

const router = createBrowserRouter([
  {
    path: '/react-payments',
    element: <HomePage />,
  },
  {
    path: '/react-payments/complete',
    element: <div>결제 완료</div>,
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
