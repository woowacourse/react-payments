import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';
import CardRegistration from '../pages/CardRegistration/CardRegistration';
import styles from './App.module.css';
import CardRegistrationConfirmation from '../pages/CardRegistrationConfirmation/CardRegistrationConfirmation';
import useCardInfo from '../hook/useCardInfo';
import Root from '../pages/Root/Root';

const App = () => {
  const { cardInfo, registerNewCard } = useCardInfo();

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <NotFound />,
      children: [
        { index: true, element: <Home cardInfo={cardInfo} /> },
        { path: '/card-registration', element: <CardRegistration /> },
        {
          path: '/card-registration-confirmation',
          element: <CardRegistrationConfirmation registerNewCard={registerNewCard} />,
        },
      ],
    },
  ]);

  return (
    <div className={styles.container}>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
