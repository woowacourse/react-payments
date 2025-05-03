import React, { useState, useRef, useEffect } from 'react';
import Card from '../component/card/Card';
import styled from 'styled-components';
import { CardInputProps } from '../types/CardInputTypes';

import { justifyBrandLogo } from './util/justifyBrandLogo';
import { CardNumberInput } from '../component/cardDetails/CardNumberInput';
import { ExpiryDateInput } from '../component/cardDetails/ExpiryDateInput';
import { CVCInput } from '../component/cardDetails/CVCInput';
import { ErrorMessagesType } from '../types/ErrorMessagesType';
import CardBrandSelect from '../component/cardDetails/CardBrandSelect';
import { SecretNumberInput } from '../component/cardDetails/SecretNumberInput';
import { SubmitButton } from '../component/SubmitButton';

import {
  validateCardForm,
  getCardNumberErrorMessage,
  getExpiryDateErrorMessage,
} from '../services/cardFormService';

export const Wrap = styled.div`
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
  const [selectedCardBrand, setSelectedCardBrand] = useState<string>('');

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

  const sectionRefs = {
    cardNumber: useRef<HTMLDivElement>(null),
    cardBrand: useRef<HTMLDivElement>(null),
    expiryDate: useRef<HTMLDivElement>(null),
    cvc: useRef<HTMLDivElement>(null),
    secretNumber: useRef<HTMLDivElement>(null),
  };

  const [visibleSteps, setVisibleSteps] = useState({
    cardNumber: true,
    cardBrand: false,
    expiryDate: false,
    cvc: false,
    secretNumber: false,
  });

  const validation = validateCardForm(cardInput, errorMessages);

  const handleErrorMessages = (
    key: keyof ErrorMessagesType,
    message: string,
  ) => {
    setErrorMessages(prev => ({
      ...prev,
      [key]: message,
    }));
  };

  const handleCardNumberErrorMessages = () =>
    getCardNumberErrorMessage(errorMessages);
  const handlePeriodErrorMessages = () =>
    getExpiryDateErrorMessage(errorMessages);

  const formSteps = [
    {
      key: 'cardNumber',
      condition: () => true,
      component: (
        <CardNumberInput
          cardInput={cardInput}
          setCardInput={setCardInput}
          errorMessages={errorMessages}
          handleErrorMessages={handleErrorMessages}
          handleCardNumberErrorMessages={handleCardNumberErrorMessages}
        />
      ),
    },
    {
      key: 'cardBrand',
      condition: () => validation.isCardNumberComplete,
      component: (
        <CardBrandSelect
          setCardInput={setCardInput}
          onColorChange={(color, brand) => {
            setCardInput(prev => ({
              ...prev,
              cardBrand: color,
            }));
            setSelectedCardBrand(brand);
          }}
        />
      ),
    },
    {
      key: 'expiryDate',
      condition: () =>
        validation.isCardNumberComplete && validation.isCardBrandComplete,
      component: (
        <ExpiryDateInput
          cardInput={cardInput}
          errorMessages={errorMessages}
          handlePeriodErrorMessages={handlePeriodErrorMessages}
          setCardInput={setCardInput}
          handleErrorMessages={handleErrorMessages}
        />
      ),
    },
    {
      key: 'cvc',
      condition: () =>
        validation.isCardNumberComplete &&
        validation.isCardBrandComplete &&
        validation.isExpiryDateComplete,
      component: (
        <CVCInput
          cardInput={cardInput}
          errorMessages={errorMessages}
          setCardInput={setCardInput}
          handleErrorMessages={handleErrorMessages}
        />
      ),
    },
    {
      key: 'secretNumber',
      condition: () =>
        validation.isCardNumberComplete &&
        validation.isCardBrandComplete &&
        validation.isExpiryDateComplete &&
        validation.isCVCComplete,
      component: (
        <SecretNumberInput
          cardInput={cardInput}
          errorMessages={errorMessages}
          setCardInput={setCardInput}
          handleErrorMessages={handleErrorMessages}
        />
      ),
    },
  ];

  useEffect(() => {
    formSteps.forEach(({ key, condition }) => {
      if (condition() && !visibleSteps[key as keyof typeof visibleSteps]) {
        setVisibleSteps(prev => ({ ...prev, [key]: true }));

        setTimeout(() => {
          const input =
            sectionRefs[key as keyof typeof sectionRefs].current?.querySelector(
              'input, select',
            );
          if (input) {
            (input as HTMLElement).focus();
          }
        }, 300);
      }
    });
  }, [cardInput, errorMessages, visibleSteps]);

  const renderOrder = [
    'secretNumber',
    'cvc',
    'expiryDate',
    'cardBrand',
    'cardNumber',
  ];

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
          {renderOrder.map(stepKey => {
            const step = formSteps.find(s => s.key === stepKey);
            if (!step) return null;

            return (
              <FormSection
                key={step.key}
                isVisible={visibleSteps[step.key as keyof typeof visibleSteps]}
                ref={sectionRefs[step.key as keyof typeof sectionRefs]}
              >
                {step.component}
              </FormSection>
            );
          })}
        </Form>
      </Wrap>
      {validation.isFormComplete && (
        <SubmitButton
          cardNumber={cardInput.first}
          cardBrand={selectedCardBrand}
        />
      )}
    </>
  );
};

export default AddCard;
