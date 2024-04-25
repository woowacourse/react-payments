import { Fragment, useState } from 'react';
import * as S from './CardRegister.style';

import InputSection from '../../components/InputSection';
import Input from '../../components/composables/Input';
import Select from '../../components/composables/Select';
import ScreenReaderOnlyLabel from '../../components/composables/ScreenReaderOnlyLabel';
import CardPreview from '../../components/CardPreview/CardPreview';
import useInput from '../../hooks/useInput';
import useCardNumbers from '../../hooks/useCardNumbers';
import useExpirationDate from '../../hooks/useExpirationDate';
import validate from '../../utils/validate';

import {
  CARD_COMPANY,
  CARD_COMPANY_COLOR,
  CARD_NUMBER,
  CVC_NUMBER,
  EXPIRATION_PERIOD,
  OWNER_NAME,
  PASSWORD,
} from '../../constants/cardSection';

export type CardNumberState = {
  value: string;
  isError: boolean;
  errorMessage: string;
};

export default function CardRegister() {
  const [isFlip, setIsFlip] = useState(false);
  const [cardBrandDisplayed, setCardBrandDisplayed] = useState(false);
  const [expirationDateDisplayed, setExpirationDateDisplayed] = useState(false);
  const [nameDisplayed, setNameDisplayed] = useState(false);
  const [cvcDisplayed, setCvcDisplayed] = useState(false);
  const [passwordDisplayed, setPasswordDisplayed] = useState(false);

  const { cardImageSrc, cardNumbersArray } = useCardNumbers<HTMLInputElement>();
  const cardCompany = useInput<HTMLSelectElement>();
  const { month, year } = useExpirationDate();
  const name = useInput<HTMLInputElement>({
    isError: (state: string) => state !== '' && !validate.isEnglish(state),
    errorMessage: OWNER_NAME.errorMessage,
  });

  const cvc = useInput<HTMLInputElement>(
    {
      isError: (state: string) => state !== '' && !validate.isValidDigit(state),
      errorMessage: '문자 입력은 불가능합니다.',
    },
    [
      {
        isError: (state: string) => !validate.isSatisfiedLength(3, state.length),
        errorMessage: '3자리 숫자를 입력해주세요.',
      },
    ],
  );

  const password = useInput<HTMLInputElement>(
    {
      isError: (state: string) => state !== '' && !validate.isValidDigit(state),
      errorMessage: '숫자만 입력 가능합니다.',
    },
    [
      {
        isError: (state: string) => !validate.isSatisfiedLength(2, state.length),
        errorMessage: '2자리 숫자를 입력해주세요.',
      },
    ],
  );

  return (
    <>
      <S.SubContainer>
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
                      isAutoFocus={index === 0}
                      id={'cardNumbers' + section}
                      placeholder="1234"
                      type="text"
                      maxLength={4}
                      value={value}
                      onChange={(e) => {
                        onChangeHandler(e);
                        if (e.target.value.length === 4) {
                          if (cardNumbersArray.length - 1 !== index) {
                            cardNumbersArray[index + 1].ref.current?.focus();
                          } else {
                            setCardBrandDisplayed(true);
                          }
                        }
                      }}
                      onBlur={onBlurHandler}
                      isError={isError}
                      ref={cardNumbers.ref}
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
          {cardBrandDisplayed && (
            <S.Wrapper>
              <InputSection title={CARD_COMPANY.title} description={CARD_COMPANY.description}>
                <Select
                  ref={cardCompany.ref}
                  options={[...CARD_COMPANY.options]}
                  value={cardCompany.value}
                  placeholder={CARD_COMPANY.placeholder}
                  isError={cardCompany.isError}
                  onChange={(e) => {
                    cardCompany.onChangeHandler(e);
                    if (e.target.value !== '') {
                      setExpirationDateDisplayed(true);
                    }
                  }}
                  onBlur={cardCompany.onBlurHandler}
                />
              </InputSection>
              <S.ErrorWrapper>
                <S.ErrorMessage>{cardCompany.isError && cardCompany.errorMessage}</S.ErrorMessage>
              </S.ErrorWrapper>
            </S.Wrapper>
          )}

          {/* 유효기간 입력 */}
          {expirationDateDisplayed && (
            <S.Wrapper>
              <InputSection
                title={EXPIRATION_PERIOD.title}
                description={EXPIRATION_PERIOD.description}
                inputTitle={EXPIRATION_PERIOD.inputTitle}
              >
                <ScreenReaderOnlyLabel htmlFor={'month'} description={'월 입력'} />
                <Input
                  isAutoFocus={true}
                  ref={month.ref}
                  id={'month'}
                  placeholder={'MM'}
                  type="text"
                  value={month.value}
                  maxLength={2}
                  onChange={(e) => {
                    month.onChangeHandler(e);
                    if (e.target.value.length === 2) {
                      year.ref.current?.focus();
                    }
                  }}
                  onBlur={month.onBlurHandler}
                  isError={month.isError}
                />
                <ScreenReaderOnlyLabel htmlFor={'year'} description={'년도 입력'} />
                <Input
                  ref={year.ref}
                  id={'year'}
                  placeholder={'YY'}
                  type="text"
                  maxLength={2}
                  value={year.value}
                  onChange={(e) => {
                    year.onChangeHandler(e);
                    if (e.target.value.length === 2) {
                      setNameDisplayed(true);
                    }
                  }}
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
          )}

          {/* 카드 소유자 입력 */}
          {nameDisplayed && (
            <S.Wrapper>
              <InputSection title={OWNER_NAME.title} inputTitle={OWNER_NAME.inputTitle}>
                <ScreenReaderOnlyLabel htmlFor={'name'} description={'이름 입력'} />
                <Input
                  isAutoFocus={true}
                  ref={name.ref}
                  id="name"
                  maxLength={30}
                  onChange={name.onChangeHandler}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      setCvcDisplayed(true);
                    }
                  }}
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
          )}

          {/* CVC 번호 입력 */}
          {/* TODO: 아이디 등 매직넘버 문자열 상수화 */}
          {cvcDisplayed && (
            <S.Wrapper>
              <InputSection title={CVC_NUMBER.title} inputTitle={CVC_NUMBER.inputTitle}>
                <ScreenReaderOnlyLabel htmlFor={'cvc'} description={'CVC 번호 입력'} />
                <Input
                  isAutoFocus={true}
                  ref={cvc.ref}
                  id="cvc"
                  maxLength={3}
                  onChange={(e) => {
                    cvc.onChangeHandler(e);
                    if (e.target.value.length === 3) {
                      setPasswordDisplayed(true);
                    }
                  }}
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
          )}
          {/* 비밀번호 입력 */}
          {passwordDisplayed && (
            <S.Wrapper>
              <InputSection title={PASSWORD.title} inputTitle={PASSWORD.inputTitle}>
                <ScreenReaderOnlyLabel htmlFor={'password'} description={'비밀번호 입력'} />
                <Input
                  isAutoFocus={true}
                  ref={password.ref}
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
          )}
        </S.CardInfoContainer>
      </S.SubContainer>
      <S.SubmitContainer>
        {!cardNumbersArray[0].isError &&
          cardNumbersArray[0].value &&
          !cardNumbersArray[1].isError &&
          cardNumbersArray[1].value &&
          !cardNumbersArray[2].isError &&
          cardNumbersArray[2].value &&
          !cardNumbersArray[3].isError &&
          cardNumbersArray[3].value &&
          !cardCompany.isError &&
          cardCompany.value &&
          !month.isError &&
          month.value &&
          !year.isError &&
          year.value &&
          !name.isError &&
          name.value &&
          !cvc.isError &&
          cvc.value &&
          !password.isError &&
          password.value && <S.SubmitButton>확인</S.SubmitButton>}
      </S.SubmitContainer>
    </>
  );
}
