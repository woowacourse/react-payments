import styled from 'styled-components';

import { useState } from 'react';
import CardPreview from '../../components/feature/CardPreviw/CardPreview';
import CVCInputField from '../../components/feature/InputField/CVCInputField/CVCInputField';
import CardIssuerSelector from '../../components/feature/InputField/CardIssuerSelector/CardIssuerSelector';
import CardNumberInputField from '../../components/feature/InputField/CardNumberInputField/CardNumberInputField';
import ExpirationDateInputField from '../../components/feature/InputField/ExpirationDateInputField/ExpirationDateInputField';
import PasswordInputField from '../../components/feature/InputField/PasswordInputField/PasswordInputField';
import StepCompleteButton from '../../components/feature/StepCompleteButton/StepCompleteButton';
import { useCardCompletion } from '../../hooks/useCardCompletion';
import { useCardFormInputs } from '../../hooks/useCardFormInputs';

export const FORM_STEP = {
  CARD_NUMBER: 1,
  CARD_ISSUER: 2,
  EXPIRATION_DATE: 3,
  CVC: 4,
  PASSWORD: 5,
  COMPLETE_BUTTON: 6,
};

function AddCard() {
  const {
    cardNumber,
    setCardNumber,
    expirationDate,
    setExpirationDate,
    CVC,
    setCVC,
    password,
    setPassword,
    cardIssuer,
    setCardIssuer,
    cardType,
  } = useCardFormInputs();

  const [step, setStep] = useState(1);

  const { markFieldComplete, isFormComplete } = useCardCompletion({
    step,
    setStep,
  });

  return (
    <AddCardLayout>
      <AddCardContainer>
        <CardPreview
          cardNumberInputValue={cardNumber}
          expirationDateInputValue={expirationDate}
          cardType={cardType}
          cardIssuer={cardIssuer}
        />
        {step >= FORM_STEP.PASSWORD && (
          <PasswordInputField
            isFocused={step === FORM_STEP.PASSWORD}
            inputValue={password}
            setInputValue={setPassword}
            onComplete={(state) =>
              markFieldComplete({ ...state, targetStep: FORM_STEP.PASSWORD })
            }
          />
        )}
        {step >= FORM_STEP.CVC && (
          <CVCInputField
            isFocused={step === FORM_STEP.CVC}
            inputValue={CVC}
            setInputValue={setCVC}
            onComplete={(state) =>
              markFieldComplete({ ...state, targetStep: FORM_STEP.CVC })
            }
          />
        )}
        {step >= FORM_STEP.EXPIRATION_DATE && (
          <ExpirationDateInputField
            isFocused={step === FORM_STEP.EXPIRATION_DATE}
            inputValue={expirationDate}
            setInputValue={setExpirationDate}
            onComplete={(state) =>
              markFieldComplete({
                ...state,
                targetStep: FORM_STEP.EXPIRATION_DATE,
              })
            }
          />
        )}
        {step >= FORM_STEP.CARD_ISSUER && (
          <CardIssuerSelector
            isFocused={step === FORM_STEP.CARD_ISSUER}
            setCardIssuer={setCardIssuer}
            onComplete={() => {
              if (step === FORM_STEP.CARD_ISSUER)
                setStep(FORM_STEP.EXPIRATION_DATE);
            }}
          />
        )}
        {step >= FORM_STEP.CARD_NUMBER && (
          <CardNumberInputField
            isFocused={step === FORM_STEP.CARD_NUMBER}
            inputValue={cardNumber}
            setInputValue={setCardNumber}
            cardType={cardType}
            onComplete={(state) =>
              markFieldComplete({
                ...state,
                targetStep: FORM_STEP.CARD_NUMBER,
              })
            }
          />
        )}
        {step >= FORM_STEP.COMPLETE_BUTTON && isFormComplete && (
          <StepCompleteButton
            step={step}
            cardNumber={cardNumber.cardNumberPart1}
            cardIssuer={cardIssuer}
          />
        )}
      </AddCardContainer>
    </AddCardLayout>
  );
}

const AddCardLayout = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const AddCardContainer = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
  padding: 44px 28px;
  align-items: center;
  height: 100vh;
  width: 376px;
  min-height: 100%;
  background-color: white;
  border: 1px solid lightgray;
  overflow: auto;
`;

export default AddCard;
