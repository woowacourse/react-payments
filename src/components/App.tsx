import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';
import CardRegistration from '../pages/CardRegistration/CardRegistration';
import styles from './App.module.css';
import CardRegistrationConfirmation from '../pages/CardRegistrationConfirmation/CardRegistrationConfirmation';
import { CardInfoProvider } from '../context/CardInfoContext';
import useCardInfo from '../hook/useCardInfo';

const App = () => {
  const { cardInfo, registerNewCard } = useCardInfo();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home cardInfo={cardInfo} />,
    },
    {
      path: '/card-registration',
      element: (
        <CardInfoProvider>
          <CardRegistration />,
        </CardInfoProvider>
      ),
    },
    {
      path: '/card-registration-confirmation',
      element: (
        <CardInfoProvider>
          <CardRegistrationConfirmation registerNewCard={registerNewCard} />,
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
