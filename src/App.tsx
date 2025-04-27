import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';
import Card from './components/Card/Card';
import CardBrand from "./components/CardBrand/CardBrand";
import CardNumberInput from './components/CardNumberInput/CardNumberInput';
import CardPeriodInput from './components/CardPeriod/CardPeriodInput';
import CardCVCInput from './components/CardCVCInput/CardCVCInput';
import CardPassword from "./components/CardPassword/CardPassword";
import Button from "./components/@common/Button/Button";
import {appLayout, cardLayout, mainLayout} from './App.style';
import {Global, ThemeProvider} from '@emotion/react';
import {useCardNumber, useCardExpiration, useCardCVC} from './hooks';
import {useMemo, useState} from "react";
import {CardBrandType} from "./types";

function App() {
  const [brand, setBrand] = useState<CardBrandType | null>(null);

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

  // Usememo나 변수로 마지막인풋 글자수 확인
  const isAllInputFilled = useMemo(() => {
    return (
      cardNumber.first !== null &&
      cardNumber.second !== null &&
      cardNumber.third !== null &&
      cardNumber.forth !== null &&
      cardExpirationDate.month !== null &&
      cardExpirationDate.year !== null &&
      cardCVC !== null
    );
  }, [cardNumber, cardExpirationDate, cardCVC]);

  return (
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyle}/>
      <div css={appLayout}>
        <main css={mainLayout}>
          <Card cardNumber={cardNumber} cardExpirationDate={cardExpirationDate} brand={brand}/>
          <section css={cardLayout}>
            <CardPassword/>
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
