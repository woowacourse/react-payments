import { useEffect, useState } from 'react';
import styled from 'styled-components';
import GlobalStyles from './GlobalStyles';

import InputSection from './components/InputSection';
import Input from './components/composables/Input';
import Label from './components/composables/Label';
import CreditCard from './components/CreditCard';
import MasterCardImage from './assets/images/mastercard.png';
import VisaCardImage from './assets/images/visa.png';

import useCardNumber from './hooks/useCardNumber';
import useInput from './hooks/useInput';
import validate from './utils/validate';

import { CARD_NUMBER, EXPIRATION_PERIOD, OWNER_NAME } from './constants/cardSection';

export const StyledInput = styled.input`
  border: 1px solid #acacac;
  padding: 8px;
  font-size: 0.6875rem;
  border-radius: 2px;
  height: 32px;
`;

export type InitialCardNumberState = {
  value: string;
  isError: boolean;
};

const InitialCardNumberState: InitialCardNumberState = {
  value: '',
  isError: false,
};

const Container = styled.div`
  padding: 20px 30px;

  width: 376px;
  height: 680px;
  background-color: beige;
`;

const CardInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ErrorContainer = styled.div`
  height: 14px;
`;

const ErrorMessageSpan = styled.span`
  color: #ff3d3d;

  font-size: 0.5938rem;
  font-weight: 400;
  line-height: 0.875rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

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
      <Container>
        <CreditCard
          cardNumbers={cardNumbers}
          month={month}
          year={year}
          name={name}
          cardImageSrc={cardImageSrc}
        />
        <CardInfoContainer>
          <Wrapper>
            <InputSection
              title={CARD_NUMBER.title}
              description={CARD_NUMBER.description}
              inputTitle={CARD_NUMBER.inputTitle}
            >
              {cardNumbers.map((cardNumber, index) => {
                const uniqueId = 'cardNumbers' + index;
                return (
                  <>
                    <Label htmlFor={uniqueId} />
                    <Input
                      key={uniqueId}
                      id={uniqueId}
                      placeholder="1234"
                      type="text"
                      maxLength={4}
                      value={cardNumber.value}
                      onChange={(e) => cardNumbersChangeHandler(e, index)}
                      isError={cardNumber.isError}
                    />
                  </>
                );
              })}
            </InputSection>
            <ErrorContainer>
              <ErrorMessageSpan>
                {cardNumbers.some((cardNumber) => cardNumber.isError) && CARD_NUMBER.errorMessage}
              </ErrorMessageSpan>
            </ErrorContainer>
          </Wrapper>

          <Wrapper>
            <InputSection
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
                maxLength={2}
                onChange={monthChangeHandler}
                isError={monthError}
              />
              <Label htmlFor={'year'} />
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
            <ErrorContainer>
              <ErrorMessageSpan>
                {monthError && yearError ? EXPIRATION_PERIOD.monthErrorMessage : ''}
                {!monthError && yearError ? EXPIRATION_PERIOD.yearErrorMessage : ''}
                {monthError && !yearError ? EXPIRATION_PERIOD.monthErrorMessage : ''}
              </ErrorMessageSpan>
            </ErrorContainer>
          </Wrapper>

          <Wrapper>
            <InputSection title={OWNER_NAME.title} inputTitle={OWNER_NAME.inputTitle}>
              <Label htmlFor={'name'} />
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
            <ErrorContainer>
              <ErrorMessageSpan>{nameError && OWNER_NAME.errorMessage}</ErrorMessageSpan>
            </ErrorContainer>
          </Wrapper>
        </CardInfoContainer>
      </Container>
    </>
  );
}

export default App;
