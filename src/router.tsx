import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import CardRegisterForm from './pages/CardRegisterForm/CardRegisterForm';
import SuccessRegister from './pages/SuccessRegister/SuccessRegister';
import URLS from './constants/Urls';

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <App />,
      children: [
        {
          path: URLS.register,
          element: <CardRegisterForm />,
        },
        {
          path: URLS.success,
          element: <SuccessRegister />,
        },
      ],
    },
  ],
  {
    basename: URLS.base,
  },
);

export default router;
