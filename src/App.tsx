import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import CardRegistrationPage from './pages/CardRegistrationPage';

import theme from './styles/theme';
import GlobalStyles from './styles/Global.style';

function App() {
  const router = createBrowserRouter(
    [
      {
        path: '/',
        element: <CardRegistrationPage />,
      },
    ],
    { basename: '/react-payments/' },
  );

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles></GlobalStyles>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
