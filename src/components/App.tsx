import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from '../pages/NotFound';
import Home from '../pages/Home';
import CardRegistration from '../pages/CardRegistration';
import styles from './App.module.css';
import { useState } from 'react';
import type { CardInfo } from '../types';
import CardRegistrationConfirmation from '../pages/CardRegistrationConfirmation';

const App = () => {
  const [cardInfo, setCardInfo] = useState<CardInfo[]>([]);

  const registerNewCard = ({ cardNumber, cardExpirationDate, cardOwnerName }: CardInfo) => {
    setCardInfo([...cardInfo, { cardNumber, cardExpirationDate, cardOwnerName }]);
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home cardInfo={cardInfo} />,
    },
    {
      path: '/card-registration',
      element: <CardRegistration registerNewCard={registerNewCard} />,
    },
    {
      path: '/card-registration-confirmation',
      element: <CardRegistrationConfirmation />,
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
