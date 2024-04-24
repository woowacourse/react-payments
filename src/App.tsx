import { Fragment, useState } from 'react';
import GlobalStyles from './GlobalStyles';
import * as S from './App.style';

import InputSection from './components/InputSection';
import Input from './components/composables/Input';
import Select from './components/composables/Select';
import ScreenReaderOnlyLabel from './components/composables/ScreenReaderOnlyLabel';
import CardPreview from './components/CardPreview/CardPreview';
import useInput from './hooks/useInput';
import useCardNumbers from './hooks/useCardNumbers';
import useExpirationDate from './hooks/useExpirationDate';
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

  const { cardImageSrc, cardNumbersArray } = useCardNumbers();
  const cardCompany = useInput<HTMLSelectElement>([]);
  const { month, year } = useExpirationDate();
  const name = useInput<HTMLInputElement>([
    {
      isError: (state: string) => state !== '' && !validate.isEnglish(state),
      errorMessage: OWNER_NAME.errorMessage,
    },
  ]);

  const cvc = useInput<HTMLInputElement>(
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

  const password = useInput(
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
          cardNumbers={cardNumbersArray.map(({ value }) => value)}
          month={month.value}
          year={year.value}
          name={name.value.toUpperCase()}
          cvc={cvc.value}
          cardImageSrc={cardImageSrc}
          cardColor={CARD_COMPANY_COLOR[cardCompany.value]}
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
              const { value, isError, onChangeHandler, onBlurHandler } = cardNumbers;
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
                    value={value}
                    onChange={onChangeHandler}
                    onBlur={onBlurHandler}
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
              value={cardCompany.value}
              placeholder={CARD_COMPANY.placeholder}
              isError={cardCompany.isError}
              onChange={cardCompany.onChangeHandler}
              onBlur={cardCompany.onBlurHandler}
            />
          </InputSection>
          <S.ErrorWrapper>
            <S.ErrorMessage>{cardCompany.isError && cardCompany.errorMessage}</S.ErrorMessage>
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
              value={month.value}
              maxLength={2}
              onChange={month.onChangeHandler}
              onBlur={month.onBlurHandler}
              isError={month.isError}
            />
            <ScreenReaderOnlyLabel htmlFor={'year'} description={'년도 입력'} />
            <Input
              id={'year'}
              placeholder={'YY'}
              type="text"
              maxLength={2}
              value={year.value}
              onChange={year.onChangeHandler}
              onBlur={year.onBlurHandler}
              isError={year.isError}
            />
          </InputSection>
          <S.ErrorWrapper>
            <S.ErrorMessage>
              {month.isError && year.isError && month.errorMessage}
              {!month.isError && year.isError && year.errorMessage}
              {month.isError && !year.isError && month.errorMessage}
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
              onChange={name.onChangeHandler}
              onBlur={name.onBlurHandler}
              isError={name.isError}
              placeholder="JOHN DOE"
              type="text"
              value={name.value.toUpperCase()}
            />
          </InputSection>
          <S.ErrorWrapper>
            <S.ErrorMessage>{name.isError && name.errorMessage}</S.ErrorMessage>
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
              onChange={cvc.onChangeHandler}
              onBlur={(e) => {
                cvc.onBlurHandler(e);
                setIsFlip(false);
              }}
              isError={cvc.isError}
              placeholder={CVC_NUMBER.placeholder}
              onFocus={() => {
                setIsFlip(true);
              }}
              type="text"
              value={cvc.value}
            />
          </InputSection>
          <S.ErrorWrapper>
            <S.ErrorMessage>{cvc.isError && cvc.errorMessage}</S.ErrorMessage>
          </S.ErrorWrapper>
        </S.Wrapper>

        {/* 비밀번호 입력 */}
        <S.Wrapper>
          <InputSection title={PASSWORD.title} inputTitle={PASSWORD.inputTitle}>
            <ScreenReaderOnlyLabel htmlFor={'password'} description={'비밀번호 입력'} />
            <Input
              id="password"
              maxLength={2}
              onChange={password.onChangeHandler}
              onBlur={password.onBlurHandler}
              isError={password.isError}
              placeholder={PASSWORD.placeholder}
              type="password"
              value={password.value}
            />
          </InputSection>
          <S.ErrorWrapper>
            <S.ErrorMessage>{password.isError && password.errorMessage}</S.ErrorMessage>
          </S.ErrorWrapper>
        </S.Wrapper>
      </S.CardInfoContainer>
    </S.Container>
  );
}

export default App;
