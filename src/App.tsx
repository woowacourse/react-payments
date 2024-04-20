import GlobalStyles from './GlobalStyles';
import InputInfo from './components/InputSection';
import Input from './components/composables/Input';
import CreditCard from './components/CreditCard';
import useInput from './hooks/useInput';
import Label from './components/composables/Label';
import validate from './utils/validate';
import { CARD_NUMBER, EXPIRATION_PERIOD, OWNER_NAME } from './constants/cardSection';
import useCardBrandImage from './hooks/useCardBrandImage';
import * as React from 'react';
import useCardNumber, { InitialCardNumberState } from './hooks/useCardNumber';
import * as S from './app.style';

const initialCardNumberState: InitialCardNumberState = {
  value: '',
  isError: false,
};

const CARD_NUMBER_LENGTH = 4;

const MONTH = Object.freeze({
  MIN: 1,
  MAX: 12,
});

const MAX_LENGTH = Object.freeze({
  CARD_NUMBERS: 4,
  MONTH: 2,
  YEAR: 2,
  NAME: 30,
});

function App() {
  const { cardNumbers, cardNumbersChangeHandler } = useCardNumber(
    Array.from({ length: CARD_NUMBER_LENGTH }, () => initialCardNumberState),
  );
  const { cardBrand } = useCardBrandImage(cardNumbers);

  const {
    inputValue: month,
    onChange: monthChangeHandler,
    error: monthError,
  } = useInput([
    {
      fn: (value) =>
        validate.isNumberInRange({ min: MONTH.MIN, max: MONTH.MAX, compareNumber: Number(value) }),
    },
    { fn: (value) => validate.isValidDigit(value) },
  ]);

  const {
    inputValue: year,
    onChange: yearChangeHandler,
    error: yearError,
  } = useInput([{ fn: (value) => validate.isValidDigit(value) }]);

  const {
    inputValue: name,
    onChange: nameChangeHandler,
    error: nameError,
  } = useInput([{ fn: (value) => validate.isEnglish(value) }]);

  return (
    <>
      <GlobalStyles />
      <S.Container>
        <CreditCard
          cardNumbers={cardNumbers}
          month={month}
          year={year}
          name={name}
          cardBrand={cardBrand}
        />
        <S.CardInfoContainer>
          <S.Wrapper>
            <InputInfo
              title={CARD_NUMBER.title}
              description={CARD_NUMBER.description}
              inputTitle={CARD_NUMBER.inputTitle}
            >
              {cardNumbers.map((cardNumber, index) => {
                const uniqueId = 'cardNumbers' + index;
                return (
                  <React.Fragment key={uniqueId}>
                    <Label htmlFor={uniqueId} />
                    <Input
                      id={uniqueId}
                      placeholder="1234"
                      type="text"
                      maxLength={MAX_LENGTH.CARD_NUMBERS}
                      value={cardNumber.value}
                      onChange={(e) => cardNumbersChangeHandler(e, index)}
                      isError={cardNumber.isError}
                    />
                  </React.Fragment>
                );
              })}
            </InputInfo>
            <S.ErrorContainer>
              <S.ErrorMessageSpan>
                {cardNumbers.some((cardNumber) => cardNumber.isError) && CARD_NUMBER.errorMessage}
              </S.ErrorMessageSpan>
            </S.ErrorContainer>
          </S.Wrapper>

          <S.Wrapper>
            <InputInfo
              title={EXPIRATION_PERIOD.title}
              description={EXPIRATION_PERIOD.description}
              inputTitle={EXPIRATION_PERIOD.inputTitle}
            >
              <Label htmlFor={'month'} />
              <Input
                id={'month'}
                placeholder={'MM'}
                type="text"
                value={month}
                maxLength={MAX_LENGTH.MONTH}
                onChange={monthChangeHandler}
                isError={monthError}
              />
              <Label htmlFor={'year'} />
              <Input
                id={'year'}
                placeholder={'YY'}
                type="text"
                maxLength={MAX_LENGTH.YEAR}
                value={year}
                onChange={yearChangeHandler}
                isError={yearError}
              />
            </InputInfo>
            <S.ErrorContainer>
              <S.ErrorMessageSpan>
                {monthError && yearError ? EXPIRATION_PERIOD.monthErrorMessage : ''}
                {!monthError && yearError ? EXPIRATION_PERIOD.yearErrorMessage : ''}
                {monthError && !yearError ? EXPIRATION_PERIOD.monthErrorMessage : ''}
              </S.ErrorMessageSpan>
            </S.ErrorContainer>
          </S.Wrapper>

          <S.Wrapper>
            <InputInfo title={OWNER_NAME.title} inputTitle={OWNER_NAME.inputTitle}>
              <Label htmlFor={'name'} />
              <Input
                id="name"
                maxLength={MAX_LENGTH.NAME}
                onChange={nameChangeHandler}
                isError={nameError}
                placeholder="JOHN DOE"
                type="text"
                value={name}
              />
            </InputInfo>
            <S.ErrorContainer>
              <S.ErrorMessageSpan>{nameError && OWNER_NAME.errorMessage}</S.ErrorMessageSpan>
            </S.ErrorContainer>
          </S.Wrapper>
        </S.CardInfoContainer>
      </S.Container>
    </>
  );
}

export default App;
