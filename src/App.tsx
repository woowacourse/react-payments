import { Global, ThemeProvider } from '@emotion/react';
import './App.css';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import Card from './component/Card/Card';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <Card />
      </ThemeProvider>
    </>
  );
}

export default App;
