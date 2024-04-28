import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ConfirmPage from './pages/confirm/ConfirmPage';
import NotFoundPage from './pages/error/NotFoundPage';
import ErrorPage from './pages/error/ErrorPage';
import PAGE_ROUTES from './constants/routes';
import RegisterCardInfoPage from './pages/register/RegisterCardInfoPage';

const routes = [
  {
    path: PAGE_ROUTES.MAIN,
    element: (
      <App>
        <RegisterCardInfoPage />
      </App>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: PAGE_ROUTES.CONFIRM,
    element: (
      <App>
        <ConfirmPage />
      </App>
    ),
    errorElement: <ErrorPage />,
  },

  { path: '*', element: <NotFoundPage /> },
];

const router = createBrowserRouter(routes, {
  basename: PAGE_ROUTES.MAIN,
});

createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <RouterProvider router={router} />,
  // </React.StrictMode>,
);
