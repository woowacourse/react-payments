import { Fragment, useEffect, useState } from 'react';
import GlobalStyles from './GlobalStyles';
import * as S from './App.style';

import InputSection from './components/InputSection';
import Input from './components/composables/Input';
import ScreenReaderOnlyLabel from './components/composables/ScreenReaderOnlyLabel';
import CreditCard from './components/CreditCard';
import MasterCardImage from './assets/images/mastercard.png';
import VisaCardImage from './assets/images/visa.png';

import useCardNumber from './hooks/useCardNumber';
import useInput from './hooks/useInput';
import validate from './utils/validate';

import { CARD_NUMBER, EXPIRATION_PERIOD, OWNER_NAME } from './constants/cardSection';

export type InitialCardNumberState = {
  value: string;
  isError: boolean;
};

const InitialCardNumberState: InitialCardNumberState = {
  value: '',
  isError: false,
};

function App() {
  const { cardNumbers, cardNumbersChangeHandler } = useCardNumber(
    Array.from({ length: 4 }, () => InitialCardNumberState),
  );
  const [cardImageSrc, setCardImageSrc] = useState('');

  const {
    inputState: month,
    inputChangeHandler: monthChangeHandler,
    error: monthError,
    setError: setMonthError,
  } = useInput();

  const {
    inputState: year,
    inputChangeHandler: yearChangeHandler,
    error: yearError,
    setError: setYearError,
  } = useInput();

  const {
    inputState: name,
    inputChangeHandler: nameChangeHandler,
    error: nameError,
    setError: setNameError,
  } = useInput();

  useEffect(() => {
    if (
      month !== '' &&
      (!validate.isNumberInRange({ min: 1, max: 12, compareNumber: Number(month) }) ||
        !validate.isValidDigit(month))
    ) {
      setMonthError(true);

      return;
    }

    setMonthError(false);
  }, [month, monthError]);

  useEffect(() => {
    if (year !== '' && !validate.isValidDigit(year)) {
      setYearError(true);

      return;
    }

    setYearError(false);
  }, [year, yearError]);

  useEffect(() => {
    if (name !== '' && !validate.isEnglish(name)) {
      setNameError(true);

      return;
    }

    setNameError(false);
  }, [name, nameError]);

  useEffect(() => {
    setCardImageSrc('');

    const cardNumberString = cardNumbers.map((cardNumber) => cardNumber.value).join('');

    if (validate.isVisa(cardNumberString)) {
      setCardImageSrc(VisaCardImage);
    }

    if (validate.isMasterCard(cardNumberString)) {
      setCardImageSrc(MasterCardImage);
    }
  }, [cardNumbers]);

  return (
    <>
      <GlobalStyles />
      <S.Container>
        <CreditCard
          cardNumbers={cardNumbers}
          month={month}
          year={year}
          name={name}
          cardImageSrc={cardImageSrc}
        />
        <S.CardInfoContainer>
          <S.Wrapper>
            <InputSection
              title={CARD_NUMBER.title}
              description={CARD_NUMBER.description}
              inputTitle={CARD_NUMBER.inputTitle}
            >
              {cardNumbers.map((cardNumber, index) => {
                const uniqueId = 'cardNumbers' + index;
                return (
                  <Fragment key={uniqueId}>
                    <ScreenReaderOnlyLabel
                      htmlFor={uniqueId}
                      description={`카드 번호 ${index + 1}번째 입력 섹션`}
                    />
                    <Input
                      id={uniqueId}
                      placeholder="1234"
                      type="text"
                      maxLength={4}
                      value={cardNumber.value}
                      onChange={(e) => cardNumbersChangeHandler(e, index)}
                      isError={cardNumber.isError}
                    />
                  </Fragment>
                );
              })}
            </InputSection>
            <S.ErrorWrapper>
              <S.ErrorMessage>
                {cardNumbers.some((cardNumber) => cardNumber.isError) && CARD_NUMBER.errorMessage}
              </S.ErrorMessage>
            </S.ErrorWrapper>
          </S.Wrapper>

          <S.Wrapper>
            <InputSection
              title={EXPIRATION_PERIOD.title}
              description={EXPIRATION_PERIOD.description}
              inputTitle={EXPIRATION_PERIOD.inputTitle}
            >
              <ScreenReaderOnlyLabel htmlFor={'month'} description={'월 입력'} />
              <Input
                id={'month'}
                placeholder={'MM'}
                type="text"
                value={month}
                maxLength={2}
                onChange={monthChangeHandler}
                isError={monthError}
              />
              <ScreenReaderOnlyLabel htmlFor={'year'} description={'년도 입력'} />
              <Input
                id={'year'}
                placeholder={'YY'}
                type="text"
                maxLength={2}
                value={year}
                onChange={yearChangeHandler}
                isError={yearError}
              />
            </InputSection>
            <S.ErrorWrapper>
              <S.ErrorMessage>
                {monthError && yearError ? EXPIRATION_PERIOD.monthErrorMessage : ''}
                {!monthError && yearError ? EXPIRATION_PERIOD.yearErrorMessage : ''}
                {monthError && !yearError ? EXPIRATION_PERIOD.monthErrorMessage : ''}
              </S.ErrorMessage>
            </S.ErrorWrapper>
          </S.Wrapper>

          <S.Wrapper>
            <InputSection title={OWNER_NAME.title} inputTitle={OWNER_NAME.inputTitle}>
              <ScreenReaderOnlyLabel htmlFor={'name'} description={'이름 입력'} />
              <Input
                id="name"
                maxLength={30}
                onChange={nameChangeHandler}
                isError={nameError}
                placeholder="JOHN DOE"
                type="text"
                value={name}
              />
            </InputSection>
            <S.ErrorWrapper>
              <S.ErrorMessage>{nameError && OWNER_NAME.errorMessage}</S.ErrorMessage>
            </S.ErrorWrapper>
          </S.Wrapper>
        </S.CardInfoContainer>
      </S.Container>
    </>
  );
}

export default App;
