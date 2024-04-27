import { createBrowserRouter } from 'react-router-dom';
import NewCardPage from './pages/newCardPage/NewCardPage';
import CardRegistrationCompletePage from './pages/cardRegistrationCompletePage/CardRegistrationCompletePage';
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
