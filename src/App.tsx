import { Global, ThemeProvider } from '@emotion/react';
import Card from './component/Card/Card';
import { appLayout, mainLayout } from './App.style';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import CardNumberInput from './component/CardNumberInput/CardNumberInput';
import CardPeriodInput from './component/CardPeriod/CardPeriodInput';
import CvcInput from './component/CvcInput/CvcInput';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <div css={appLayout}>
          <Card />
          <main css={mainLayout}>
            <CardNumberInput />
            <CardPeriodInput />
            <CvcInput />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
