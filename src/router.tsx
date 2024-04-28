import { createBrowserRouter } from 'react-router-dom';
import NewCardPage from './pages/newCard/NewCardPage';
import CardRegistrationCompletePage from './pages/cardRegistrationComplete/CardRegistrationCompletePage';
import App from './App';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: 'new-card',
          element: <NewCardPage />,
        },
        {
          path: 'registration-complete',
          element: <CardRegistrationCompletePage />,
        },
      ],
    },
  ],
  { basename: '/react-payments/' },
);

export default router;
