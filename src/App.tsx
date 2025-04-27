import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import Card from './components/Card/Card';
import CardBrand from "./components/CardBrand/CardBrand";
import CardNumberInput from './components/CardNumberInput/CardNumberInput';
import CardPeriodInput from './components/CardPeriod/CardPeriodInput';
import CardCVCInput from './components/CardCVCInput/CardCVCInput';
import CardPasswordInput from "./components/CardPassword/CardPasswordInput.tsx";
import Button from "./components/@common/Button/Button";
import {useMemo, useState} from "react";
import {appLayout, cardLayout, mainLayout} from './App.style';
import {Global, ThemeProvider} from '@emotion/react';
import {useCardNumber, useCardExpiration, useCardCVC, useCardPassword} from './hooks';
import {CardBrandType} from "./types";

function App() {
  const [brand, setBrand] = useState<CardBrandType | null>(null);

  const {
    cardPassword,
    cardPasswordError,
    handleCardPasswordChange,
    getCardPasswordErrorMessage,
  } = useCardPassword();

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

  const {cardCVC, cardCVCError, handleCardCVCChange, getCardCVCErrorMessage} =
    useCardCVC();

  const isAllInputFilled = useMemo(() => {
    return (
      cardNumber.first !== null &&
      cardNumber.second !== null &&
      cardNumber.third !== null &&
      cardNumber.forth !== null &&
      cardExpirationDate.month !== null &&
      cardExpirationDate.year !== null &&
      cardCVC !== null &&
      cardPassword !== null
    );
  }, [cardNumber, cardExpirationDate, cardCVC, cardPassword]);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle}/>
      <div css={appLayout}>
        <main css={mainLayout}>
          <Card cardNumber={cardNumber} cardExpirationDate={cardExpirationDate} brand={brand}/>
          <section css={cardLayout}>
            <CardPasswordInput
              cardPassword={cardPassword}
              onChange={handleCardPasswordChange}
              hasError={cardPasswordError}
              getCardPasswordErrorMessage={getCardPasswordErrorMessage}
            />
            <CardCVCInput
              cardCVC={cardCVC}
              onChange={handleCardCVCChange}
              hasError={cardCVCError}
              getCardCVCErrorMessage={getCardCVCErrorMessage}
            />
            <CardPeriodInput
              cardExpirationDate={cardExpirationDate}
              onChange={handleCardExpirationChange}
              errorState={cardExpirationDateError}
              getMonthErrorMessage={getMonthErrorMessage}
              getYearErrorMessage={getYearErrorMessage}
            />
            <CardBrand value={brand} onChange={(newBrand) => setBrand(newBrand)}/>
            <CardNumberInput
              cardNumber={cardNumber}
              onChange={handleCardNumberChange}
              errorState={cardNumberError}
              getCardNumberErrorMessage={getCardNumberErrorMessage}
            />
          </section>
          {isAllInputFilled && (
            <Button content='확인' style="bottom"/>
          )}
        </main>
      </div>
    </ThemeProvider>
  )
    ;
}

export default App;
