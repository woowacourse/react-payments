import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import CardRegistrationPage from './pages/CardRegistrationPage/CardRegistrationPage';
import CardRegistrationCompletedPage from './pages/CardRegistrationCompletedPage/CardRegistrationCompletedPage';
import { ROUTE_PATH } from './constants/constants';
import { CardProvider } from './contexts/CardContext';

function RootLayout() {
  return <Outlet />;
}

const router = createBrowserRouter([
  {
    path: ROUTE_PATH.ROOT,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <CardRegistrationPage />
      },
      {
        path: ROUTE_PATH.CARD_REGISTRATION_COMPLETED,
        element: <CardRegistrationCompletedPage />
      }
    ]
  }
]);

export default function App() {
  return (
    <CardProvider>
      <RouterProvider router={router} />
    </CardProvider>
  );
}
