import React, { useState, useRef, useEffect } from 'react';
import Card from '../component/card/Card';
import styled from 'styled-components';
import { CardInputProps } from '../types/CardInputTypes';
import {
  validateCardExpirationDateMM,
  validateCardExpirationDateYY,
  validateCardCVC,
} from '../validation/validation';
import { justifyBrandLogo } from './util/justifyBrandLogo';
import { CardNumberInput } from '../component/cardDetails/CardNumberInput';
import { ExpiryDateInput } from '../component/cardDetails/ExpiryDateInput';
import { CVCInput } from '../component/cardDetails/CVCInput';
import { ErrorMessagesType } from '../types/ErrorMessagesType';
import CardBrandSelect from '../component/cardDetails/CardBrandSelect';
import { SecretNumberInput } from '../component/cardDetails/SecretNumberInput';
import { SubmitButton } from '../component/SubmitButton';

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 376px;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: 77px;
  height: 100%;
  gap: 45px;
`;

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  gap: 16px;
`;

const FormSection = styled.div<{ isVisible: boolean }>`
  width: 100%;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  height: ${({ isVisible }) => (isVisible ? 'auto' : 0)};
  overflow: hidden;
  transition:
    opacity 0.3s ease,
    height 0.3s ease;
  margin-bottom: ${({ isVisible }) => (isVisible ? '16px' : 0)};
`;

const AddCard = () => {
  const [cardInput, setCardInput] = useState<CardInputProps>({
    first: null,
    second: null,
    third: null,
    fourth: null,
    MM: null,
    YY: null,
    CVC: null,
    secretNumber: null,
  });

  const [errorMessages, setErrorMessages] = useState<ErrorMessagesType>({
    first: '',
    second: '',
    third: '',
    fourth: '',
    MM: '',
    YY: '',
    CVC: '',
    cardBrand: '',
    secretNumber: '',
  });

  const cardNumberRef = useRef<HTMLDivElement>(null);
  const cardBrandRef = useRef<HTMLDivElement>(null);
  const secretNumberRef = useRef<HTMLDivElement>(null);
  const expiryDateRef = useRef<HTMLDivElement>(null);
  const cvcRef = useRef<HTMLDivElement>(null);

  const [visibleSteps, setVisibleSteps] = useState({
    cardNumber: true,
    cardBrand: false,
    secretNumber: false,
    expiryDate: false,
    cvc: false,
  });

  const isCardNumberComplete = () => {
    const allFieldsFilled =
      cardInput.first !== null &&
      cardInput.second !== null &&
      cardInput.third !== null &&
      cardInput.fourth !== null;

    const noErrors =
      !errorMessages.first &&
      !errorMessages.second &&
      !errorMessages.third &&
      !errorMessages.fourth;

    const correctLength =
      cardInput.first !== null &&
      String(cardInput.first).length === 4 &&
      cardInput.second !== null &&
      String(cardInput.second).length === 4 &&
      cardInput.third !== null &&
      String(cardInput.third).length === 4 &&
      cardInput.fourth !== null &&
      String(cardInput.fourth).length === 4;

    return allFieldsFilled && noErrors && correctLength;
  };

  const isCardBrandComplete = () => {
    return (
      cardInput.cardBrand !== undefined &&
      cardInput.cardBrand !== null &&
      cardInput.cardBrand !== '' &&
      !errorMessages.cardBrand
    );
  };

  const isSecretNumberComplete = () => {
    const secretNumberStr = String(cardInput.secretNumber || '');
    return (
      cardInput.secretNumber !== null &&
      !errorMessages.secretNumber &&
      (secretNumberStr.length === 2 || secretNumberStr.length === 4)
    );
  };

  const isExpiryDateComplete = () => {
    const mmStr = String(cardInput.MM || '');
    const yyStr = String(cardInput.YY || '');

    const validMM =
      cardInput.MM !== null &&
      mmStr.length === 2 &&
      parseInt(mmStr) >= 1 &&
      parseInt(mmStr) <= 12;
    const validYY = cardInput.YY !== null && yyStr.length === 2;

    return validMM && validYY && !errorMessages.MM && !errorMessages.YY;
  };

  const isCVCComplete = () => {
    const cvcStr = String(cardInput.CVC || '');

    return cardInput.CVC !== null && !errorMessages.CVC && cvcStr.length === 3;
  };

  const isFormComplete = () => {
    return (
      isSecretNumberComplete() &&
      isCardBrandComplete() &&
      isCardNumberComplete() &&
      isExpiryDateComplete() &&
      isCVCComplete()
    );
  };

  const handleErrorMessages = (
    key: keyof ErrorMessagesType,
    message: string,
  ) => {
    setErrorMessages(prev => ({
      ...prev,
      [key]: message,
    }));
  };

  const handleCardNumberErrorMessages = () => {
    const filterErrorMessage = [
      errorMessages.first,
      errorMessages.second,
      errorMessages.third,
      errorMessages.fourth,
    ].filter(message => message.length !== 0);
    return filterErrorMessage[0];
  };

  const handlePeriodErrorMessages = () => {
    const filterErrorMessage = [errorMessages.YY, errorMessages.MM].filter(
      message => message.length !== 0,
    );
    return filterErrorMessage[0];
  };

  useEffect(() => {
    if (isCardNumberComplete() && !visibleSteps.cardBrand) {
      setVisibleSteps(prev => ({ ...prev, cardBrand: true }));
      setTimeout(() => {
        cardBrandRef.current?.querySelector('select')?.focus();
      }, 300);
    }

    if (
      isCardBrandComplete() &&
      isCardNumberComplete() &&
      !visibleSteps.secretNumber
    ) {
      setVisibleSteps(prev => ({ ...prev, secretNumber: true }));
      setTimeout(() => {
        secretNumberRef.current?.querySelector('input')?.focus();
      }, 300);
    }

    if (
      isSecretNumberComplete() &&
      isCardBrandComplete() &&
      isCardNumberComplete() &&
      !visibleSteps.expiryDate
    ) {
      setVisibleSteps(prev => ({ ...prev, expiryDate: true }));
      setTimeout(() => {
        expiryDateRef.current?.querySelector('input')?.focus();
      }, 300);
    }

    if (
      isExpiryDateComplete() &&
      isSecretNumberComplete() &&
      isCardBrandComplete() &&
      isCardNumberComplete() &&
      !visibleSteps.cvc
    ) {
      setVisibleSteps(prev => ({ ...prev, cvc: true }));
      setTimeout(() => {
        cvcRef.current?.querySelector('input')?.focus();
      }, 300);
    }
  }, [cardInput, errorMessages, visibleSteps]);

  return (
    <>
      <Wrap>
        <Card
          cardNumber={cardInput}
          cardType={
            cardInput.first ? justifyBrandLogo(cardInput.first) : 'default'
          }
          cardColor={cardInput.cardBrand}
        />
        <Form>
          {visibleSteps.cvc && (
            <FormSection isVisible={true} ref={cvcRef}>
              <CVCInput
                validateCardCVC={validateCardCVC}
                setCardInput={setCardInput}
                handleErrorMessages={handleErrorMessages}
                errorMessages={errorMessages}
              />
            </FormSection>
          )}

          {visibleSteps.expiryDate && (
            <FormSection isVisible={true} ref={expiryDateRef}>
              <ExpiryDateInput
                handlePeriodErrorMessages={handlePeriodErrorMessages}
                validateCardExpirationDateMM={validateCardExpirationDateMM}
                validateCardExpirationDateYY={validateCardExpirationDateYY}
                setCardInput={setCardInput}
                handleErrorMessages={handleErrorMessages}
              />
            </FormSection>
          )}

          {visibleSteps.secretNumber && (
            <FormSection isVisible={true} ref={secretNumberRef}>
              <SecretNumberInput
                errorMessages={errorMessages}
                setCardInput={setCardInput}
                handleErrorMessages={handleErrorMessages}
              />
            </FormSection>
          )}

          {visibleSteps.cardBrand && (
            <FormSection isVisible={true} ref={cardBrandRef}>
              <CardBrandSelect
                setCardInput={setCardInput}
                onColorChange={color => {
                  setCardInput(prev => ({
                    ...prev,
                    cardBrand: color,
                  }));
                }}
              />
            </FormSection>
          )}

          <FormSection isVisible={visibleSteps.cardNumber} ref={cardNumberRef}>
            <CardNumberInput
              cardInput={cardInput}
              setCardInput={setCardInput}
              errorMessages={errorMessages}
              handleErrorMessages={handleErrorMessages}
              handleCardNumberErrorMessages={handleCardNumberErrorMessages}
            />
          </FormSection>
        </Form>
      </Wrap>
      {isFormComplete() && <SubmitButton />}
    </>
  );
};

export default AddCard;
