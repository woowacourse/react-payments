import Router from "./Router";
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import {appLayout} from './App.style';
import {Global, ThemeProvider} from '@emotion/react';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle}/>
      <div css={appLayout}>
        <Router/>
      </div>
    </ThemeProvider>
  );
}

export default App;
