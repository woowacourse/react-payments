import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import CardRegistrationPage from './pages/CardRegistrationPage/CardRegistrationPage';
import CardRegistrationCompletePage from './pages/CardRegistrationCompletePage/CardRegistrationCompletePage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

import theme from './styles/theme';
import GlobalStyles from './styles/Global.style';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <CardRegistrationPage />,
        errorElement: <ErrorPage />,
      },
      {
        path: '/complete',
        element: <CardRegistrationCompletePage />,
      },
      {
        path: '/error',
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
