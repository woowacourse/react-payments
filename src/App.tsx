import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import CardRegistrationPage from './pages/CardRegistrationPage/CardRegistrationPage';
import CardRegistrationCompletePage from './pages/CardRegistrationCompletePage/CardRegistrationCompletePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

import { ROUTES } from '../src/constants/Routes';

import theme from './styles/theme';
import GlobalStyles from './styles/Global.style';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: ROUTES.HOME,
        element: <CardRegistrationPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: ROUTES.COMPLETE,
        element: <CardRegistrationCompletePage />,
      },
      {
        path: ROUTES.ERROR,
        element: <ErrorPage />,
      },
    ],
    { basename: '/react-payments/' },
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
