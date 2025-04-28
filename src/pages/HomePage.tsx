import Card from "../components/Card/Card";
import CardPasswordInput from "../components/CardPassword/CardPasswordInput";
import CardCVCInput from "../components/CardCVCInput/CardCVCInput";
import CardPeriodInput from "../components/CardPeriod/CardPeriodInput";
import CardBrand from "../components/CardBrand/CardBrand";
import CardNumberInput from "../components/CardNumberInput/CardNumberInput";
import Button from "../components/@common/Button/Button";
import {Link} from "react-router-dom";
import {useCardBrand, useCardCVC, useCardExpiration, useCardNumber, useCardPassword, useProgressForm} from "../hooks";
import {cardLayout, mainLayout} from "../App.style";

function HomePage() {
  const {
    showCardBrand,
    showCardPeriod,
    showCardCVC,
    showCardPassword,
    showBrandStep,
    showPeriodStep,
    showCVCStep,
    showPasswordStep
  } = useProgressForm();

  const {
    value: cardNumber,
    error: cardNumberError,
    inputRefs,
    onChange: handleCardNumberChange,
    onKeyDown: handleCardNumberKeyDown,
    onBlur: handleCardNumberBlur,
    isValid: isCardNumberValid,
  } = useCardNumber(() => {
    showBrandStep();
    setTimeout(() => brandRef.current?.focus(), 1);
  });

  const {
    brand,
    brandRef,
    onChange,
    isValid: isCardBrandValid,
  } = useCardBrand(() => {
    showPeriodStep();
    setTimeout(() => monthRef.current?.focus(), 100);
  });

  const {
    value: cardExpirationDate,
    cardExpirationDateError: cardExpirationDateError,
    monthRef,
    yearRef,
    onChange: handleCardExpirationChange,
    onYearKeyDown: handleCardExpirationKeyDown,
    onBlur: handleCardExpirationBlur,
    isValid: isCardExpirationValid,
  } = useCardExpiration(() => {
    showCVCStep();
    setTimeout(() => cvcRef.current?.focus(), 100);
  });

  const {
    cardCVC,
    cardCVCError,
    cvcRef,
    handleCardCVCChange,
    isValid: isCardCVCValid,
  } = useCardCVC(() => {
    showPasswordStep();
    setTimeout(() => passwordRef.current?.focus(), 100);
  });

  const {
    cardPassword,
    cardPasswordError,
    passwordRef,
    handleCardPasswordChange,
    getCardPasswordErrorMessage,
    isValid: isCardPasswordValid,
  } = useCardPassword();

  const showConfirmButton = (
    isCardNumberValid && isCardBrandValid && isCardExpirationValid && isCardCVCValid && isCardPasswordValid
  );

  console.log(showConfirmButton);

  return (
    <main css={mainLayout}>
      <Card cardNumber={cardNumber} cardExpirationDate={cardExpirationDate} brand={brand}/>
      <section css={cardLayout}>
        {showCardPassword &&
          <CardPasswordInput
            cardPassword={cardPassword}
            erorr={cardPasswordError}
            onChange={handleCardPasswordChange}
            getCardPasswordErrorMessage={getCardPasswordErrorMessage}
            tabIndex={9}
          />
        }
        {
          showCardCVC &&
          <CardCVCInput
            cardCVC={cardCVC}
            error={cardCVCError}
            cvcRef={cvcRef}
            onChange={handleCardCVCChange}
            tabIndex={8}
          />
        }
        {
          showCardPeriod &&
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
        }
        {
          showCardBrand &&
          <CardBrand
            value={brand}
            onChange={onChange}
            brandRef={brandRef}
            error={cardNumberError}
            tabIndex={2}
          />
        }
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
      {showConfirmButton && (
        <Link to='/complete'>
          <Button content='확인' style="bottom"/>
        </Link>
      )}
    </main>
  );
}

export default HomePage;
