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
import useInput, { ValidationType } from './hooks/useInput';
import validate from './utils/validate';

import { CARD_NUMBER, EXPIRATION_PERIOD, OWNER_NAME } from './constants/cardSection';

export type CardNumberState = {
  value: string;
  isError: boolean;
  errorMessage: string;
};

const INITIAL_CARD_NUMBER_STATE: CardNumberState = {
  value: '',
  isError: false,
  errorMessage: '',
};

function App() {
  const { cardNumbers, cardNumbersChangeHandler, cardNumbersFocusOutHandler } = useCardNumber(
    Array.from({ length: 4 }, () => INITIAL_CARD_NUMBER_STATE),
  );
  const [cardImageSrc, setCardImageSrc] = useState('');

  const twoDigitValidation = {
    isError: (state: string) => state !== '' && !validate.isSatisfiedLength(2, state.length),
    errorMessage: '2자리 숫자를 입력해주세요.',
  };

  const monthOnChangeValidations: ValidationType[] = [
    {
      isError: (state: string) => state !== '' && !validate.isValidDigit(state),
      errorMessage: EXPIRATION_PERIOD.monthErrorMessage,
    },
  ];

  const yearOnChangeValidations: ValidationType[] = [
    {
      isError: (state: string) => state !== '' && !validate.isValidDigit(state),
      errorMessage: EXPIRATION_PERIOD.yearErrorMessage,
    },
  ];

  const nameOnChangeValidations: ValidationType[] = [
    {
      isError: (state: string) => state !== '' && !validate.isEnglish(state),
      errorMessage: OWNER_NAME.errorMessage,
    },
  ];

  const {
    inputState: month,
    inputChangeHandler: monthChangeHandler,
    inputFocusOutHandler: monthFocusOutHandler,
    error: monthError,
  } = useInput(monthOnChangeValidations, [twoDigitValidation]);

  const {
    inputState: year,
    inputChangeHandler: yearChangeHandler,
    error: yearError,
  } = useInput(yearOnChangeValidations, [twoDigitValidation]);

  const {
    inputState: name,
    inputChangeHandler: nameChangeHandler,
    error: nameError,
  } = useInput(nameOnChangeValidations);

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
                      onBlur={(e) => cardNumbersFocusOutHandler(e, index)}
                      isError={cardNumber.isError}
                    />
                  </Fragment>
                );
              })}
            </InputSection>
            <S.ErrorWrapper>
              <S.ErrorMessage>
                {cardNumbers.find(({ isError }) => isError)?.errorMessage}
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
                isError={monthError.state}
                onBlur={monthFocusOutHandler}
              />
              <ScreenReaderOnlyLabel htmlFor={'year'} description={'년도 입력'} />
              <Input
                id={'year'}
                placeholder={'YY'}
                type="text"
                maxLength={2}
                value={year}
                onChange={yearChangeHandler}
                isError={yearError.state}
              />
            </InputSection>
            <S.ErrorWrapper>
              <S.ErrorMessage>
                {monthError.state && yearError.state && monthError.message}
                {!monthError.state && yearError.state && yearError.message}
                {monthError.state && !yearError.state && monthError.message}
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
                isError={nameError.state}
                placeholder="JOHN DOE"
                type="text"
                value={name.toUpperCase()}
              />
            </InputSection>
            <S.ErrorWrapper>
              <S.ErrorMessage>{nameError.state && OWNER_NAME.errorMessage}</S.ErrorMessage>
            </S.ErrorWrapper>
          </S.Wrapper>
        </S.CardInfoContainer>
      </S.Container>
    </>
  );
}

export default App;
