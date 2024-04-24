import { Fragment, useState } from 'react';
import GlobalStyles from './GlobalStyles';
import * as S from './App.style';
import { ValidationType } from './hooks/useValidations';

import InputSection from './components/InputSection';
import Input from './components/composables/Input';
import Select from './components/composables/Select';
import ScreenReaderOnlyLabel from './components/composables/ScreenReaderOnlyLabel';
import CardPreview from './components/CardPreview/CardPreview';
import useCardNumbers from './hooks/useCardNumbers';
import useInput from './hooks/useInput';
import validate from './utils/validate';

import {
  CARD_COMPANY,
  CARD_COMPANY_COLOR,
  CARD_NUMBER,
  CVC_NUMBER,
  EXPIRATION_PERIOD,
  OWNER_NAME,
  PASSWORD,
} from './constants/cardSection';

export type CardNumberState = {
  value: string;
  isError: boolean;
  errorMessage: string;
};

function App() {
  const [isFlip, setIsFlip] = useState(false);

  const monthValidations: ValidationType[] = [
    {
      isError: (state: string) => state !== '' && !validate.isValidDigit(state),
      errorMessage: EXPIRATION_PERIOD.monthErrorMessage,
    },
  ];

  const yearValidations: ValidationType[] = [
    {
      isError: (state: string) => state !== '' && !validate.isValidDigit(state),
      errorMessage: EXPIRATION_PERIOD.yearErrorMessage,
    },
  ];

  const nameValidations: ValidationType[] = [
    {
      isError: (state: string) => state !== '' && !validate.isEnglish(state),
      errorMessage: OWNER_NAME.errorMessage,
    },
  ];

  const { cardImageSrc, cardNumbersArray } = useCardNumbers();

  const {
    inputState: cardCompany,
    inputChangeHandler: cardCompanyChangeHandler,
    inputOnBlurHandler: cardCompanyOnBlurHandler,
    isError: isCardCompanyError,
    errorMessage: cardCompanyErrorMessage,
  } = useInput<HTMLSelectElement>([]);

  const {
    inputState: month,
    inputChangeHandler: monthChangeHandler,
    inputOnBlurHandler: monthOnBlurHandler,
    isError: isMonthError,
    errorMessage: monthErrorMessage,
  } = useInput<HTMLInputElement>(monthValidations, [
    {
      isError: (state: string) => state !== '' && !validate.isSatisfiedLength(2, state.length),
      errorMessage: '2자리 숫자를 입력해주세요.',
    },
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
  ]);

  const {
    inputState: year,
    inputChangeHandler: yearChangeHandler,
    inputOnBlurHandler: yearOnBlurHandler,
    isError: isYearError,
    errorMessage: yearErrorMessage,
  } = useInput<HTMLInputElement>(yearValidations, [
    {
      isError: (state: string) => state !== '' && !validate.isSatisfiedLength(2, state.length),
      errorMessage: '2자리 숫자를 입력해주세요.',
    },
  ]);

  const {
    inputState: name,
    inputChangeHandler: nameChangeHandler,
    inputOnBlurHandler: nameOnBlurHandler,
    isError: isNameError,
    errorMessage: nameErrorMessage,
  } = useInput<HTMLInputElement>(nameValidations);

  const {
    inputState: cvc,
    inputChangeHandler: cvcChangeHandler,
    inputOnBlurHandler: cvcOnBlurHandler,
    isError: isCvcError,
    errorMessage: cvcErrorMessage,
  } = useInput<HTMLInputElement>(
    [
      {
        isError: (state: string) => state !== '' && !validate.isValidDigit(state),
        errorMessage: '문자 입력은 불가능합니다.',
      },
    ],
    [
      {
        isError: (state: string) => state !== '' && !validate.isSatisfiedLength(3, state.length),
        errorMessage: '3자리 숫자를 입력해주세요.',
      },
    ],
  );

  const {
    inputState: password,
    inputChangeHandler: passwordChangeHandler,
    inputOnBlurHandler: passwordOnBlurHandler,
    isError: isPasswordError,
    errorMessage: passwordErrorMessage,
  } = useInput(
    [
      {
        isError: (state: string) => state !== '' && !validate.isValidDigit(state),
        errorMessage: '숫자만 입력 가능합니다.',
      },
    ],
    [
      {
        isError: (state: string) => state !== '' && !validate.isSatisfiedLength(2, state.length),
        errorMessage: '2자리 숫자를 입력해주세요.',
      },
    ],
  );

  return (
    <S.Container>
      <GlobalStyles />
      <S.CardPreviewWrapper>
        <CardPreview
          isFlip={isFlip}
          cardNumbers={cardNumbersArray.map(({ inputState }) => inputState)}
          month={month}
          year={year}
          name={name.toUpperCase()}
          cvc={cvc}
          cardImageSrc={cardImageSrc}
          cardColor={CARD_COMPANY_COLOR[cardCompany]}
        />
      </S.CardPreviewWrapper>
      <S.CardInfoContainer>
        {/* 카드 번호 입력 */}
        <S.Wrapper>
          <InputSection
            title={CARD_NUMBER.title}
            description={CARD_NUMBER.description}
            inputTitle={CARD_NUMBER.inputTitle}
          >
            {cardNumbersArray.map((cardNumbers, index) => {
              const { inputState, isError, inputChangeHandler, inputOnBlurHandler } = cardNumbers;
              const section = index + 1;

              return (
                <Fragment key={index}>
                  <ScreenReaderOnlyLabel
                    htmlFor={'cardNumbers' + section}
                    description={`카드 번호 ${section}번째 입력 섹션`}
                  />
                  <Input
                    id={'cardNumbers' + section}
                    placeholder="1234"
                    type="text"
                    maxLength={4}
                    value={inputState}
                    onChange={inputChangeHandler}
                    onBlur={inputOnBlurHandler}
                    isError={isError}
                  />
                </Fragment>
              );
            })}
          </InputSection>
          <S.ErrorWrapper>
            <S.ErrorMessage>
              {cardNumbersArray.find(({ isError }) => isError)?.errorMessage}
            </S.ErrorMessage>
          </S.ErrorWrapper>
        </S.Wrapper>

        {/* 카드사 선택 */}
        <S.Wrapper>
          <InputSection title={CARD_COMPANY.title} description={CARD_COMPANY.description}>
            <Select
              options={[...CARD_COMPANY.options]}
              value={cardCompany}
              placeholder={CARD_COMPANY.placeholder}
              isError={isCardCompanyError}
              onChange={cardCompanyChangeHandler}
              onBlur={cardCompanyOnBlurHandler}
            />
          </InputSection>
          <S.ErrorWrapper>
            <S.ErrorMessage>{isCardCompanyError && cardCompanyErrorMessage}</S.ErrorMessage>
          </S.ErrorWrapper>
        </S.Wrapper>

        {/* 유효기간 입력 */}
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
              onBlur={monthOnBlurHandler}
              isError={isMonthError}
            />
            <ScreenReaderOnlyLabel htmlFor={'year'} description={'년도 입력'} />
            <Input
              id={'year'}
              placeholder={'YY'}
              type="text"
              maxLength={2}
              value={year}
              onChange={yearChangeHandler}
              onBlur={yearOnBlurHandler}
              isError={isYearError}
            />
          </InputSection>
          <S.ErrorWrapper>
            <S.ErrorMessage>
              {isMonthError && isYearError && monthErrorMessage}
              {!isMonthError && isYearError && yearErrorMessage}
              {isMonthError && !isYearError && monthErrorMessage}
            </S.ErrorMessage>
          </S.ErrorWrapper>
        </S.Wrapper>

        {/* 카드 소유자 입력 */}
        <S.Wrapper>
          <InputSection title={OWNER_NAME.title} inputTitle={OWNER_NAME.inputTitle}>
            <ScreenReaderOnlyLabel htmlFor={'name'} description={'이름 입력'} />
            <Input
              id="name"
              maxLength={30}
              onChange={nameChangeHandler}
              onBlur={nameOnBlurHandler}
              isError={isNameError}
              placeholder="JOHN DOE"
              type="text"
              value={name.toUpperCase()}
            />
          </InputSection>
          <S.ErrorWrapper>
            <S.ErrorMessage>{isNameError && nameErrorMessage}</S.ErrorMessage>
          </S.ErrorWrapper>
        </S.Wrapper>

        {/* CVC 번호 입력 */}
        {/* TODO: 아이디 등 매직넘버 문자열 상수화 */}
        <S.Wrapper>
          <InputSection title={CVC_NUMBER.title} inputTitle={CVC_NUMBER.inputTitle}>
            <ScreenReaderOnlyLabel htmlFor={'cvc'} description={'CVC 번호 입력'} />
            <Input
              id="cvc"
              maxLength={3}
              onChange={cvcChangeHandler}
              onBlur={(e) => {
                cvcOnBlurHandler(e);
                setIsFlip(false);
              }}
              isError={isCvcError}
              placeholder={CVC_NUMBER.placeholder}
              onFocus={() => {
                setIsFlip(true);
              }}
              type="text"
              value={cvc}
            />
          </InputSection>
          <S.ErrorWrapper>
            <S.ErrorMessage>{isCvcError && cvcErrorMessage}</S.ErrorMessage>
          </S.ErrorWrapper>
        </S.Wrapper>

        {/* 비밀번호 입력 */}
        <S.Wrapper>
          <InputSection title={PASSWORD.title} inputTitle={PASSWORD.inputTitle}>
            <ScreenReaderOnlyLabel htmlFor={'password'} description={'비밀번호 입력'} />
            <Input
              id="password"
              maxLength={2}
              onChange={passwordChangeHandler}
              onBlur={passwordOnBlurHandler}
              isError={isPasswordError}
              placeholder={PASSWORD.placeholder}
              type="password"
              value={password}
            />
          </InputSection>
          <S.ErrorWrapper>
            <S.ErrorMessage>{isPasswordError && passwordErrorMessage}</S.ErrorMessage>
          </S.ErrorWrapper>
        </S.Wrapper>
      </S.CardInfoContainer>
    </S.Container>
  );
}

export default App;
