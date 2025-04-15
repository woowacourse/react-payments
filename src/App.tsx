import { Global, ThemeProvider } from '@emotion/react';
import './App.css';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
      </ThemeProvider>
    </>
  );
}

export default App;
