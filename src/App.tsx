import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import CardRegistrationPage from './pages/CardRegistrationPage/CardRegistrationPage';
import CardRegistrationCompletedPage from './pages/CardRegistrationCompletedPage/CardRegistrationCompletedPage';
import { useCardNumberInput } from './hooks/useCardNumberInput';
import { useCardCompanySelect } from './hooks/useCardCompanySelect';
import { ROUTE_PATH } from './constants/constants';

function RootLayout() {
  const { cardNumbers, handleCardNumberChange, cardNumberError } = useCardNumberInput();
  const { cardCompany, handleSelectChange } = useCardCompanySelect();

  return (
    <Outlet
      context={{
        cardNumbers,
        cardCompany,
        handleCardNumberChange,
        cardNumberError,
        handleSelectChange
      }}
    />
  );
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
  return <RouterProvider router={router} />;
}
