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

import {
  isCardNumberComplete,
  isCardBrandComplete,
  isSecretNumberComplete,
  isExpiryDateComplete,
  isCVCComplete,
  isFormComplete,
} from '../validation/validationCardCompleting';

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
    if (
      isCardNumberComplete(cardInput, errorMessages) &&
      !visibleSteps.cardBrand
    ) {
      setVisibleSteps(prev => ({ ...prev, cardBrand: true }));
      setTimeout(() => {
        cardBrandRef.current?.querySelector('select')?.focus();
      }, 300);
    }

    if (
      isCardBrandComplete(cardInput, errorMessages) &&
      isCardNumberComplete(cardInput, errorMessages) &&
      !visibleSteps.secretNumber
    ) {
      setVisibleSteps(prev => ({ ...prev, secretNumber: true }));
      setTimeout(() => {
        secretNumberRef.current?.querySelector('input')?.focus();
      }, 300);
    }

    if (
      isSecretNumberComplete(cardInput, errorMessages) &&
      isCardBrandComplete(cardInput, errorMessages) &&
      isCardNumberComplete(cardInput, errorMessages) &&
      !visibleSteps.expiryDate
    ) {
      setVisibleSteps(prev => ({ ...prev, expiryDate: true }));
      setTimeout(() => {
        expiryDateRef.current?.querySelector('input')?.focus();
      }, 300);
    }

    if (
      isExpiryDateComplete(cardInput, errorMessages) &&
      isSecretNumberComplete(cardInput, errorMessages) &&
      isCardBrandComplete(cardInput, errorMessages) &&
      isCardNumberComplete(cardInput, errorMessages) &&
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
      {isFormComplete(cardInput, errorMessages) && <SubmitButton />}
    </>
  );
};

export default AddCard;
