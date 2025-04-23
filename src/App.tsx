import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import { Global, ThemeProvider } from '@emotion/react';
import { CardProvider } from './context/CardContext';
import CardPaymentPage from './pages/CardPaymentPage/CardPaymentPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <CardProvider>
        <CardPaymentPage />
      </CardProvider>
    </ThemeProvider>
  );
}

export default App;
