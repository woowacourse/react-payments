import React from 'react';
import Card from '../component/card/Card';
import styled from 'styled-components';

import { justifyBrandLogo } from './util/justifyBrandLogo';
import { CardNumberInput } from '../component/cardDetails/CardNumberInput';
import { ExpiryDateInput } from '../component/cardDetails/ExpiryDateInput';
import { CVCInput } from '../component/cardDetails/CVCInput';
import CardBrandSelect from '../component/cardDetails/CardBrandSelect';
import { SecretNumberInput } from '../component/cardDetails/SecretNumberInput';
import { SubmitButton } from '../component/SubmitButton';

import {
  validateCardNumber,
  validateCardExpirationDateMM,
  validateCardExpirationDateYY,
  validateCardCVC,
  validateCardSecretNumber,
} from '../validation/validation';
import { validateCardForm } from '../services/cardFormService';
import { useCardForm } from '../hooks/useCardForm';
import { useFormSteps } from '../hooks/useFormSteps';

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
  const {
    cardInput,
    setCardInput,
    selectedCardBrand,
    setSelectedCardBrand,
    errorMessages,
    handleErrorMessages,
  } = useCardForm();

  const validation = validateCardForm(cardInput, errorMessages);

  const handleCardNumberChange = (
    field: 'first' | 'second' | 'third' | 'fourth',
    value: string,
  ) => {
    const errorMessage =
      value.length === 4 ? validateCardNumber(value) || '' : '';
    handleErrorMessages(field, errorMessage);

    setCardInput(prev => ({
      ...prev,
      [field]: value === '' ? null : Number(value),
    }));
  };

  const handleCardBrandChange = (brand: string, color: string) => {
    setSelectedCardBrand(brand);
    setCardInput(prev => ({
      ...prev,
      cardBrand: color,
    }));
  };

  const handleExpiryDateChange = (field: 'MM' | 'YY', value: string) => {
    let errorMessage = '';

    if (field === 'MM') {
      errorMessage =
        value.length === 2 ? validateCardExpirationDateMM(value) || '' : '';
    } else {
      errorMessage =
        value.length === 2
          ? validateCardExpirationDateYY(
              value,
              cardInput.MM?.toString() || '',
            ) || ''
          : '';
    }

    handleErrorMessages(field, errorMessage);

    setCardInput(prev => ({
      ...prev,
      [field]: value === '' ? null : Number(value),
    }));
  };

  const handleCVCChange = (value: string) => {
    const errorMessage = value.length === 3 ? validateCardCVC(value) || '' : '';
    handleErrorMessages('CVC', errorMessage);

    setCardInput(prev => ({
      ...prev,
      CVC: value === '' ? null : Number(value),
    }));
  };

  const handleSecretNumberChange = (value: string) => {
    const errorMessage =
      value.length === 2 || value.length === 4
        ? validateCardSecretNumber(value) || ''
        : '';
    handleErrorMessages('secretNumber', errorMessage);

    setCardInput(prev => ({
      ...prev,
      secretNumber: value === '' ? null : Number(value),
    }));
  };

  const formSteps = [
    {
      key: 'cardNumber',
      order: 5,
      condition: () => true,
      component: (
        <CardNumberInput
          cardNumberValues={{
            first: cardInput.first?.toString() || '',
            second: cardInput.second?.toString() || '',
            third: cardInput.third?.toString() || '',
            fourth: cardInput.fourth?.toString() || '',
          }}
          errorMessages={{
            first: errorMessages.first,
            second: errorMessages.second,
            third: errorMessages.third,
            fourth: errorMessages.fourth,
          }}
          onCardNumberChange={handleCardNumberChange}
        />
      ),
    },
    {
      key: 'cardBrand',
      order: 4,
      condition: () => validation.isCardNumberComplete,
      component: (
        <CardBrandSelect
          selectedBrand={selectedCardBrand}
          onBrandChange={handleCardBrandChange}
        />
      ),
    },
    {
      key: 'expiryDate',
      order: 3,
      condition: () =>
        validation.isCardNumberComplete && validation.isCardBrandComplete,
      component: (
        <ExpiryDateInput
          expiryValues={{
            MM: cardInput.MM?.toString() || '',
            YY: cardInput.YY?.toString() || '',
          }}
          errorMessages={{
            MM: errorMessages.MM,
            YY: errorMessages.YY,
          }}
          onExpiryDateChange={handleExpiryDateChange}
        />
      ),
    },
    {
      key: 'cvc',
      order: 2,
      condition: () =>
        validation.isCardNumberComplete &&
        validation.isCardBrandComplete &&
        validation.isExpiryDateComplete,
      component: (
        <CVCInput
          cvcValue={cardInput.CVC?.toString() || ''}
          errorMessage={errorMessages.CVC}
          onCVCChange={handleCVCChange}
        />
      ),
    },
    {
      key: 'secretNumber',
      order: 1,
      condition: () =>
        validation.isCardNumberComplete &&
        validation.isCardBrandComplete &&
        validation.isExpiryDateComplete &&
        validation.isCVCComplete,
      component: (
        <SecretNumberInput
          secretValue={cardInput.secretNumber?.toString() || ''}
          errorMessage={errorMessages.secretNumber}
          onSecretNumberChange={handleSecretNumberChange}
        />
      ),
    },
  ] as const;

  const { sectionRefs, visibleSteps, sortedStepKeys } = useFormSteps(
    cardInput,
    errorMessages,
    formSteps,
  );

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
          {sortedStepKeys.map(stepKey => {
            const step = formSteps.find(s => s.key === stepKey);
            if (!step || !visibleSteps[step.key]) return null;

            return (
              <FormSection
                key={step.key}
                isVisible={visibleSteps[step.key]}
                ref={sectionRefs[step.key]}
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
