import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';
import CardRegistration from '../pages/CardRegistration/CardRegistration';
import styles from './App.module.css';
import { useState } from 'react';
import type { CardInfo } from '../types';
import CardRegistrationConfirmation from '../pages/CardRegistrationConfirmation/CardRegistrationConfirmation';
import { CardInfoProvider } from '../context/CardInfoContext';

const App = () => {
  const [cardInfo, setCardInfo] = useState<CardInfo[]>([]);

  const registerNewCard = ({ cardNumber, expirationDate, cardOwnerName, selectedCard }: CardInfo) => {
    setCardInfo([...cardInfo, { cardNumber, expirationDate, cardOwnerName, selectedCard }]);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home cardInfo={cardInfo} />,
    },
    {
      path: '/card-registration',
      element: (
        <CardInfoProvider>
          <CardRegistration registerNewCard={registerNewCard} />,
        </CardInfoProvider>
      ),
    },
    {
      path: '/card-registration-confirmation',
      element: (
        <CardInfoProvider>
          <CardRegistrationConfirmation />,
        </CardInfoProvider>
      ),
    },
    {
      path: '*',
      element: <NotFound />,
    },
  ]);

  return (
    <div className={styles.container}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
