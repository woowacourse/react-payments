// App.tsx
import { createBrowserRouter, RouterProvider } from 'react-router';
import useCardInfo from '../../features/cardInfo/hooks/useCardInfo';
import CardPage from '../../pages/CardPage/CardPage';
import CompletePage from '../../pages/CompletePage/CompletePage';

function App() {
  const cardInfo = useCardInfo();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <CardPage {...cardInfo} />,
    },
    {
      path: '/complete',
      element: <CompletePage cardNumber={cardInfo.cardNumber[0]} cardIssuer={cardInfo.cardIssuer} />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
