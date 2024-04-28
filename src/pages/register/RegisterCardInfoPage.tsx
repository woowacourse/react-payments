import CreditCard from '@/components/cards/CreditCard';
import useInput from '@/hooks/useInput';
import validate from '@/utils/validate';
import useCardNumber from '@/hooks/useCardNumber';
import * as S from '@/app.style';
import useRegister from '@/hooks/useRegister';
import useCardIssuer from '@/hooks/useCardIssuer';
import CvcCard from '@/components/cards/CvcCard';
import REGISTER_STEP from '@/constants/registerStep';
import { InitialCardNumberState } from '@/types';
import { MAX_LENGTH } from '@/constants/cardSection';
import RoutingButton from '@/components/registerSection/RoutingButton';
import useExpirationDate from '@/hooks/useExpirationDate';
import CardPasswordInputSection from '@/components/registerSection/CardPasswordInputSection';
import CardIssuerInputSection from '@/components/registerSection/CardIssuerInputSection';
import CardOwnerNameInputSection from '@/components/registerSection/CardOwnerNameInputSection';
import CardNumberInputSection from '@/components/registerSection/CardNumberInputSection';
import CardCVCInputSection from '@/components/registerSection/CardCVCInputSection';
import CardExpirationDateInputSection from '@/components/registerSection/CardExpirationDateInputSection';

const initialCardNumberState: InitialCardNumberState = {
  value: '',
  isError: false,
};

const CARD_NUMBER_LENGTH = 4;

export default function RegisterCardInfoPage() {
  const { step, Register, nextStepHandler } = useRegister([
    REGISTER_STEP.CARD_NUMBER,
    REGISTER_STEP.CARD_ISSUER,
    REGISTER_STEP.CARD_EXPIRATION_DATE,
    REGISTER_STEP.CARD_OWNER_NAME,
    REGISTER_STEP.CARD_CVC,
    REGISTER_STEP.CARD_PASSWORD,
  ] as const);

  const {
    inputValue: password,
    onChange: handlePassword,
    isError: passwordError,
    ref: passwordRef,
    onBlur: handlePasswordBlur,
  } = useInput({
    validators: [{ fn: (value) => validate.isValidDigit(value) }],
    maxLength: MAX_LENGTH.PASSWORD,
    onComplete: nextStepHandler,
    isActiveCurrentStep: step === REGISTER_STEP.CARD_PASSWORD,
  });

  const {
    inputValue: cvc,
    onChange: handleCvc,
    isError: cvcError,
    ref: cardCvcRef,
    onKeyDown: handleEnterCvc,
    onBlur: handleCvcBlur,
  } = useInput({
    validators: [{ fn: (value) => validate.isValidDigit(value) }],
    maxLength: MAX_LENGTH.CVC,
    onComplete: nextStepHandler,
    nextRef: passwordRef,
    isActiveCurrentStep: step === REGISTER_STEP.CARD_CVC,
  });

  const {
    inputValue: name,
    onChange: nameChangeHandler,
    isError: nameError,
    onKeyDown: handleEnterName,
    ref: nameRef,
    onBlur: handleNameBlur,
  } = useInput({
    validators: [{ fn: (value) => validate.isEnglish(value) }],
    maxLength: MAX_LENGTH.NAME,
    onComplete: nextStepHandler,
    nextRef: cardCvcRef,
    isActiveCurrentStep: step === REGISTER_STEP.CARD_OWNER_NAME,
  });

  const {
    month,
    monthChangeHandler,
    monthError,
    handleMonthBlur,
    year,
    yearChangeHandler,
    yearError,
    handleYearKeyDown,
    handleYearBlur,
  } = useExpirationDate({
    nextStepHandler,
    isActiveCurrentStep: step === REGISTER_STEP.CARD_EXPIRATION_DATE,
  });

  const {
    backgroundColor,
    handleCardIssuer,
    ref: cardIssuerRef,
    cardIssuer,
  } = useCardIssuer({
    nextStepHandler,
    isValidCurrentStep: step === REGISTER_STEP.CARD_ISSUER,
  });

  const { cardNumbers, cardNumbersChangeHandler, cardBrand, refs } = useCardNumber({
    initialCardNumberStates: Array.from(
      { length: CARD_NUMBER_LENGTH },
      () => initialCardNumberState,
    ),
    nextStepHandler,
    ref: cardIssuerRef,
    isValidCurrentStep: step === REGISTER_STEP.CARD_NUMBER,
  });

  const isValidAllFormStates = validate.isValidAllFormStates({
    cardNumbers,
    month,
    year,
    password,
    cvc,
    name,
  });

  return (
    <S.ContentCard>
      <S.Container>
        {step === REGISTER_STEP.CARD_CVC ? (
          <CvcCard cvc={cvc} />
        ) : (
          <CreditCard
            cardNumbers={cardNumbers}
            month={month}
            year={year}
            name={name}
            cardBrand={cardBrand}
            backgroundColor={backgroundColor}
          />
        )}

        <S.CardInfoContainer>
          {isValidAllFormStates && (
            <RoutingButton cardNumbers={cardNumbers[0].value} cardIssuer={cardIssuer} />
          )}

          <Register step={step}>
            <Register.Step name={REGISTER_STEP.CARD_PASSWORD}>
              <CardPasswordInputSection
                value={password}
                ref={passwordRef}
                onChange={handlePassword}
                isError={passwordError}
                onBlur={handlePasswordBlur}
              />
            </Register.Step>

            <Register.Step name={REGISTER_STEP.CARD_CVC}>
              <CardCVCInputSection
                value={cvc}
                onChange={handleCvc}
                onKeyDown={handleEnterCvc}
                isError={cvcError}
                ref={cardCvcRef}
                onBlur={handleCvcBlur}
              />
            </Register.Step>

            <Register.Step name={REGISTER_STEP.CARD_OWNER_NAME}>
              <CardOwnerNameInputSection
                onChange={nameChangeHandler}
                isError={nameError}
                value={name}
                ref={nameRef}
                onKeyDown={handleEnterName}
                onBlur={handleNameBlur}
              />
            </Register.Step>

            <Register.Step name={REGISTER_STEP.CARD_EXPIRATION_DATE}>
              <CardExpirationDateInputSection
                month={month}
                monthChangeHandler={monthChangeHandler}
                monthError={monthError}
                handleMonthBlur={handleMonthBlur}
                year={year}
                yearChangeHandler={yearChangeHandler}
                yearError={yearError}
                handleYearKeyDown={handleYearKeyDown}
                handleYearBlur={handleYearBlur}
              />
            </Register.Step>

            <Register.Step name={REGISTER_STEP.CARD_ISSUER}>
              <CardIssuerInputSection onChange={handleCardIssuer} />
            </Register.Step>

            <Register.Step name={REGISTER_STEP.CARD_NUMBER}>
              <CardNumberInputSection
                refs={refs}
                cardNumbers={cardNumbers}
                cardNumbersChangeHandler={cardNumbersChangeHandler}
              />
            </Register.Step>
          </Register>
        </S.CardInfoContainer>
      </S.Container>
    </S.ContentCard>
  );
}
