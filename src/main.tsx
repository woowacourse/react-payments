import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ConfirmPage from './pages/confirm/ConfirmPage';
import NotFoundPage from './pages/error/NotFoundPage';
import ErrorPage from './pages/error/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: '/confirm',
    element: <ConfirmPage />,
    errorElement: <ErrorPage />,
  },

  { path: '*', element: <NotFoundPage /> },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <RouterProvider router={router} />,
  // </React.StrictMode>,
);
