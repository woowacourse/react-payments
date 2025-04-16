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

  const [cardExpirationDate, setCardExpirationDate] = useState({
    month: '',
    year: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCardNumber({
      ...cardNumber,
      [e.target.name]: value,
    });
    console.log('cardNumber', cardNumber);
  };

  const handleExpirationDateChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCardExpirationDate({
      ...cardExpirationDate,
      [e.target.name]: value,
    });
    console.log('cardExpirationDate', cardExpirationDate);
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyle} />
        <div css={appLayout}>
          <Card
            cardNumber={cardNumber}
            cardExpirationDate={cardExpirationDate}
          />
          <main css={mainLayout}>
            <CardNumberInput
              cardNumber={cardNumber}
              onChange={handleInputChange}
            />
            <CardPeriodInput
              cardExpirationDate={cardExpirationDate}
              onChange={handleExpirationDateChange}
            />
            <CvcInput />
          </main>
        </div>
      </ThemeProvider>
    </>
  );
}

export default App;
