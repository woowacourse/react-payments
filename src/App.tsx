import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import Card from './component/Card/Card';
import CardNumberInput from './component/CardNumberInput/CardNumberInput';
import CardPeriodInput from './component/CardPeriod/CardPeriodInput';
import CvcInput from './component/CvcInput/CvcInput';
import { appLayout, mainLayout } from './App.style';
import { ChangeEvent, useState } from 'react';
import { Global, ThemeProvider } from '@emotion/react';

function App() {
  const [cardNumber, setCardNumber] = useState({
    first: '',
    second: '',
    third: '',
    forth: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCardNumber({
      ...cardNumber,
      [e.target.name]: value,
    });
    console.log('cardNumber', cardNumber);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <div css={appLayout}>
          <Card cardNumber={cardNumber} />
          <main css={mainLayout}>
            <CardNumberInput
              cardNumber={cardNumber}
              onChange={handleInputChange}
            />
            <CardPeriodInput />
            <CvcInput />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
