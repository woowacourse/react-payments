import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from '../pages/NotFound/NotFound';
import Home from '../pages/Home/Home';
import CardRegistration from '../pages/CardRegistration/CardRegistration';
import CardRegistrationConfirmation from '../pages/CardRegistrationConfirmation/CardRegistrationConfirmation';
import Root from './Root';
import { CardInfo } from '../types';

type RouterProps = {
  cardInfo: CardInfo[];
  registerNewCard: (newCardInfo: CardInfo) => void;
};

const Router = ({ cardInfo, registerNewCard }: RouterProps) => {
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

  return <RouterProvider router={router} />;
};

export default Router;
