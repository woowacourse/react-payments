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

// 도메인 서비스 및 커스텀 훅 import
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
    errorMessages,
    handleErrorMessages,
    handleCardNumberErrorMessages,
    handlePeriodErrorMessages,
    handleCardBrandChange,
  } = useCardForm();

  const validation = validateCardForm(cardInput, errorMessages);

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
          onColorChange={handleCardBrandChange}
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

  const { sectionRefs, visibleSteps, renderOrder } = useFormSteps(
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
