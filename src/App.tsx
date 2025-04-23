import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import Card from './component/Card/Card';
import CardBrand from "./component/CardBrand/CardBrand";
import CardNumberInput from './component/CardNumberInput/CardNumberInput';
import CardPeriodInput from './component/CardPeriod/CardPeriodInput';
import CardCVCInput from './component/CardCVCInput/CardCVCInput';
import { appLayout, mainLayout } from './App.style';
import { Global, ThemeProvider } from '@emotion/react';
import { useCardNumber, useCardExpiration, useCardCVC } from './hooks';

function App() {
  const {
    cardNumber,
    cardNumberError,
    handleCardNumberChange,
    getCardNumberErrorMessage,
  } = useCardNumber();

  const {
    cardExpirationDate,
    cardExpirationDateError,
    handleCardExpirationChange,
    getMonthErrorMessage,
    getYearErrorMessage,
  } = useCardExpiration();

  const { cardCVC, cardCVCError, handleCardCVCChange, getCardCVCErrorMessage } =
    useCardCVC();

  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle} />
      <div css={appLayout}>
        <Card cardNumber={cardNumber} cardExpirationDate={cardExpirationDate} />
        <main css={mainLayout}>
          <CardBrand />
          <CardNumberInput
            cardNumber={cardNumber}
            onChange={handleCardNumberChange}
            errorState={cardNumberError}
            getCardNumberErrorMessage={getCardNumberErrorMessage}
          />
          <CardPeriodInput
            cardExpirationDate={cardExpirationDate}
            onChange={handleCardExpirationChange}
            errorState={cardExpirationDateError}
            getMonthErrorMessage={getMonthErrorMessage}
            getYearErrorMessage={getYearErrorMessage}
          />
          <CardCVCInput
            cardCVC={cardCVC}
            onChange={handleCardCVCChange}
            hasError={cardCVCError}
            getCardCVCErrorMessage={getCardCVCErrorMessage}
          />
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
