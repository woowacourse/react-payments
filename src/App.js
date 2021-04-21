import { ThemeProvider } from '@emotion/react';
import GlobalStyle from './GlobalStyle';
import theme from './theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
  </ThemeProvider>
);

export default App;
