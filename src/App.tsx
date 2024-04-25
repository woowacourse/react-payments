import GlobalStyles from './GlobalStyles';
import CreditCard from './components/cards/CreditCard';
import useInput from './hooks/useInput';
import validate from './utils/validate';
import useCardNumber from './hooks/useCardNumber';
import * as S from './app.style';
import useRegister from './hooks/useRegister';
import RegisterCardNumber from './components/registerSection/RegisterCardNumber';
import RegisterExpirationDate from './components/registerSection/RegisterExpirationDate';
import RegisterName from './components/registerSection/RegisterName';
import RegisterCardIssuer from './components/registerSection/RegisterCardIssuer';
import useCardIssuer from './hooks/useCardIssuer';
import RegisterCVC from './components/registerSection/RegisterCVC';
import RegisterPassword from './components/registerSection/RegisterPassword';
import Button from './components/composables/Button';
import { useNavigate } from 'react-router-dom';
import CvcCard from './components/cards/CvcCard';
import REGISTER_STEP from './constants/registerStep';
import { InitialCardNumberState } from 'types';
import useDetectComplete from './hooks/useDetectComplete';
import PAGE_ROUTES from './constants/routes';
import { MAX_LENGTH } from './constants/cardSection';

const initialCardNumberState: InitialCardNumberState = {
  value: '',
  isError: false,
};

const CARD_NUMBER_LENGTH = 4;

const MONTH = Object.freeze({
  MIN: 1,
  MAX: 12,
});

function App() {
  const navigate = useNavigate();

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
    nextStepHandler,
    isValidCurrentStep: step === REGISTER_STEP.CARD_PASSWORD,
  });

  const {
    inputValue: cvc,
    onChange: handleCvc,
    isError: cvcError,
    ref: cardCvcRef,
    onEnter: handleEnterCvc,
    onBlur: handleCvcBlur,
  } = useInput({
    validators: [{ fn: (value) => validate.isValidDigit(value) }],
    maxLength: MAX_LENGTH.CVC,
    nextStepHandler,
    nextRef: passwordRef,
    isValidCurrentStep: step === REGISTER_STEP.CARD_CVC,
  });

  const {
    inputValue: name,
    onChange: nameChangeHandler,
    isError: nameError,
    onEnter: handleEnterName,
    ref: nameRef,
    onBlur: handleNameBlur,
  } = useInput({
    validators: [{ fn: (value) => validate.isEnglish(value) }],
    maxLength: MAX_LENGTH.NAME,
    nextStepHandler,
    nextRef: cardCvcRef,
    isValidCurrentStep: step === REGISTER_STEP.CARD_OWNER_NAME,
  });

  const {
    inputValue: year,
    onChange: yearChangeHandler,
    isError: yearError,
    ref: yearRef,
    onEnter: handleYearKeyDown,
    onBlur: handleYearBlur,
  } = useInput({
    validators: [{ fn: (value) => validate.isValidDigit(value) }],
    nextStepHandler,
    nextRef: nameRef,
    maxLength: MAX_LENGTH.YEAR,
    isValidCurrentStep: step === REGISTER_STEP.CARD_EXPIRATION_DATE,
  });

  const {
    inputValue: month,
    onChange: monthChangeHandler,
    isError: monthError,
    ref: monthRef,
    onEnter: handleMonthKeyDown,
    onBlur: handleMonthBlur,
  } = useInput({
    validators: [
      {
        fn: (value) =>
          validate.isNumberInRange({
            min: MONTH.MIN,
            max: MONTH.MAX,
            compareNumber: Number(value),
          }),
      },
      { fn: (value) => validate.isValidDigit(value) },
    ],
    nextRef: yearRef,
    maxLength: MAX_LENGTH.MONTH,
    isValidCurrentStep: step === REGISTER_STEP.CARD_EXPIRATION_DATE,
  });

  const {
    backgroundColor,
    handleCardIssuer,
    ref: cardIssuerRef,
    cardIssuer,
  } = useCardIssuer({
    nextStepHandler,
    nextRef: monthRef,
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

  const { isValidAllFormStates } = useDetectComplete({
    cardNumbers,
    month,
    year,
    password,
    cvc,
    name,
  });

  const handleNavigateToConfirmPage = () => {
    navigate(PAGE_ROUTES.CONFIRM, {
      state: {
        isSucceed: true,
        cardNumbers: cardNumbers[0].value,
        cardIssuer: cardIssuer,
      },
    });
  };

  return (
    <>
      <GlobalStyles />
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
              <S.ButtonContainer>
                <Button text="확인" onClick={handleNavigateToConfirmPage} />
              </S.ButtonContainer>
            )}

            <Register step={step}>
              <Register.Step name={REGISTER_STEP.CARD_PASSWORD}>
                <RegisterPassword
                  ref={passwordRef}
                  value={password}
                  onChange={handlePassword}
                  isError={passwordError}
                  onBlur={handlePasswordBlur}
                />
              </Register.Step>

              <Register.Step name={REGISTER_STEP.CARD_CVC}>
                <RegisterCVC
                  value={cvc}
                  onChange={handleCvc}
                  onEnter={handleEnterCvc}
                  isError={cvcError}
                  ref={cardCvcRef}
                  onBlur={handleCvcBlur}
                />
              </Register.Step>

              <Register.Step name={REGISTER_STEP.CARD_OWNER_NAME}>
                <RegisterName
                  onChange={nameChangeHandler}
                  isError={nameError}
                  value={name}
                  ref={nameRef}
                  onEnter={handleEnterName}
                  onBlur={handleNameBlur}
                />
              </Register.Step>

              <Register.Step name={REGISTER_STEP.CARD_EXPIRATION_DATE}>
                <RegisterExpirationDate
                  month={month}
                  monthChangeHandler={monthChangeHandler}
                  monthError={monthError}
                  monthRef={monthRef}
                  handleMonthKeyDown={handleMonthKeyDown}
                  handleMonthBlur={handleMonthBlur}
                  year={year}
                  yearChangeHandler={yearChangeHandler}
                  yearError={yearError}
                  yearRef={yearRef}
                  handleYearKeyDown={handleYearKeyDown}
                  handleYearBlur={handleYearBlur}
                />
              </Register.Step>

              <Register.Step name={REGISTER_STEP.CARD_ISSUER}>
                <RegisterCardIssuer ref={cardIssuerRef} onChange={handleCardIssuer} />
              </Register.Step>

              <Register.Step name={REGISTER_STEP.CARD_NUMBER}>
                <RegisterCardNumber
                  refs={refs}
                  cardNumbers={cardNumbers}
                  cardNumbersChangeHandler={cardNumbersChangeHandler}
                />
              </Register.Step>
            </Register>
          </S.CardInfoContainer>
        </S.Container>
      </S.ContentCard>
    </>
  );
}

export default App;
