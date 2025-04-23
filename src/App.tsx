import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import { Global, ThemeProvider } from '@emotion/react';
import { RouterProvider } from 'react-router-dom';
import router from './router/Router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
