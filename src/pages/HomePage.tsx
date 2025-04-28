import Card from "../components/Card/Card";
import CardPasswordInput from "../components/CardPassword/CardPasswordInput";
import CardCVCInput from "../components/CardCVCInput/CardCVCInput";
import CardPeriodInput from "../components/CardPeriod/CardPeriodInput";
import CardBrand from "../components/CardBrand/CardBrand";
import CardNumberInput from "../components/CardNumberInput/CardNumberInput";
import Button from "../components/@common/Button/Button";
import {Link} from "react-router-dom";
import {useMemo, useState} from "react";
import {CardBrandType} from "../types";
import {useCardCVC, useCardExpiration, useCardNumber, useCardPassword} from "../hooks";
import {cardLayout, mainLayout} from "../App.style";

function HomePage() {
  const [brand, setBrand] = useState<CardBrandType | null>(null);

  const {
    value: cardNumber,
    error: cardNumberError,
    inputRefs,
    onChange: handleCardNumberChange,
    onKeyDown: handleCardNumberKeyDown,
    onBlur: handleCardNumberBlur,
  } = useCardNumber({});

  const {
    value: cardExpirationDate,
    error: cardExpirationDateError,
    monthRef,
    yearRef,
    onChange: handleCardExpirationChange,
    onYearKeyDown: handleCardExpirationKeyDown,
    onBlur: handleCardExpirationBlur,
  } = useCardExpiration({});

  const {cardCVC, error, cvcRef, handleCardCVCChange} = useCardCVC({});

  const {
    cardPassword,
    cardPasswordError,
    handleCardPasswordChange,
    getCardPasswordErrorMessage,
  } = useCardPassword({});

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
    <main css={mainLayout}>
      <Card cardNumber={cardNumber} cardExpirationDate={cardExpirationDate} brand={brand}/>
      <section css={cardLayout}>
        <CardPasswordInput
          cardPassword={cardPassword}
          erorr={cardPasswordError}
          onChange={handleCardPasswordChange}
          getCardPasswordErrorMessage={getCardPasswordErrorMessage}
          tabIndex={9}
        />
        <CardCVCInput
          cardCVC={cardCVC}
          error={error}
          cvcRef={cvcRef}
          onChange={handleCardCVCChange}
          tabIndex={8}
        />
        <CardPeriodInput
          cardExpirationDate={cardExpirationDate}
          error={cardExpirationDateError}
          onChange={handleCardExpirationChange}
          monthRef={monthRef}
          yearRef={yearRef}
          onKeyDown={handleCardExpirationKeyDown}
          onBlur={handleCardExpirationBlur}
          tabIndex={6}
          autoFocus
        />
        <CardBrand
          value={brand}
          onChange={(newBrand) => setBrand(newBrand)}
        />
        <CardNumberInput
          cardNumber={cardNumber}
          error={cardNumberError}
          inputRefs={inputRefs}
          onChange={handleCardNumberChange}
          onKeyDown={handleCardNumberKeyDown}
          onBlur={handleCardNumberBlur}
          tabIndex={1}
          autoFocus
        />
      </section>
      {isAllInputFilled && (
        <Link to='/complete'>
          <Button content='확인' style="bottom"/>
        </Link>
      )}
    </main>
  );
}

export default HomePage;
