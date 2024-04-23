import { Fragment } from 'react';
import GlobalStyles from './GlobalStyles';
import * as S from './App.style';

import InputSection from './components/InputSection';
import Input from './components/composables/Input';
import Select from './components/composables/Select';
import ScreenReaderOnlyLabel from './components/composables/ScreenReaderOnlyLabel';
import CardPreview from './components/CardPreview/CardPreview';

import useCardNumber from './hooks/useCardNumber';
import useInput, { ValidationType } from './hooks/useInput';
import validate from './utils/validate';

import {
  CARD_COMPANY,
  CARD_COMPANY_COLOR,
  CARD_NUMBER,
  EXPIRATION_PERIOD,
  OWNER_NAME,
} from './constants/cardSection';

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

  const monthOnBlurValidations: ValidationType[] = [
    twoDigitValidation,
    {
      isError: (state: string) =>
        state !== '' &&
        !validate.isNumberInRange({
          min: 1,
          max: 12,
          compareNumber: Number(state),
        }),
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

  const { cardImageSrc, cardNumbers, cardNumbersChangeHandler, cardNumbersFocusOutHandler } =
    useCardNumber(Array.from({ length: 4 }, () => INITIAL_CARD_NUMBER_STATE));

  const {
    inputState: cardCompany,
    inputChangeHandler: cardCompanyChangeHandler,
    error: cardCompanyError,
  } = useInput([]);

  const {
    inputState: month,
    inputChangeHandler: monthChangeHandler,
    inputFocusOutHandler: monthFocusOutHandler,
    error: monthError,
  } = useInput(monthOnChangeValidations, monthOnBlurValidations);

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

  return (
    <S.Container>
      <GlobalStyles />
      <S.CardPreviewWrapper>
        <CardPreview
          cardNumbers={cardNumbers.map(({ value }) => value)}
          month={month}
          year={year}
          name={name}
          cardImageSrc={cardImageSrc}
          cardColor={CARD_COMPANY_COLOR[cardCompany]}
        />
      </S.CardPreviewWrapper>
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
          <InputSection title={CARD_COMPANY.title} description={CARD_COMPANY.description}>
            <Select
              options={[...CARD_COMPANY.options]}
              value={cardCompany}
              placeholder={CARD_COMPANY.placeholder}
              isError={cardCompanyError.state}
              onChange={cardCompanyChangeHandler}
            />
          </InputSection>
          <S.ErrorWrapper>
            <S.ErrorMessage>{cardCompanyError.state && cardCompanyError.message}</S.ErrorMessage>
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
  );
}

export default App;
