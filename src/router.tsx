import App from 'App';
import CreditCardRegister from 'pages/CreditCardRegister';
import Home from 'pages/Home';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'register',
        element: <CreditCardRegister />,
      },
    ],
  },
], {
  basename: '/react-payments'
});

export default router;
