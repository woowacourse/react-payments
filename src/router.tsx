import App from 'App';
import Home from 'pages/Home';
import CreditCardRegister from 'pages/CreditCardRegister';
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
]);

export default router;
