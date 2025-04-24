import { useState } from 'react';
import CARD_LABEL_INPUT_CONFIG from '../constants/cardLabeledInputConfig';
import type { CardInputProps } from '../types/CardInputTypes';

interface UseCardFormStepProps {
  cardInput: CardInputProps;
  isError: { [key: string]: boolean };
}

const useCardFormStep = ({ cardInput, isError }: UseCardFormStepProps) => {
  const [stepIndex, setStepIndex] = useState(0);

  const isFormInputComplete = (maxLength: number, inputKeys: (keyof CardInputProps)[]) => {
    return inputKeys.every((key) => cardInput[key] && cardInput[key].length === maxLength);
  };

  const isFormSelectComplete = (selectKeys: (keyof CardInputProps)[]) => {
    return selectKeys.every((key) => cardInput[key] && cardInput[key].length !== 0);
  };

  const isFormValid = () => {
    return Object.values(isError).every((error) => error === false);
  };

  const cardNumbersInputKeys: (keyof CardInputProps)[] = CARD_LABEL_INPUT_CONFIG.cardNumber.inputKeys;
  const expirationDateInputKeys: (keyof CardInputProps)[] = CARD_LABEL_INPUT_CONFIG.expirationDate.inputKeys;
  const cardBrandSelectKeys: (keyof CardInputProps)[] = ['cardBrand'];
  const cvcInputKeys: (keyof CardInputProps)[] = CARD_LABEL_INPUT_CONFIG.CVC.inputKeys;
  const passwordInputKeys: (keyof CardInputProps)[] = CARD_LABEL_INPUT_CONFIG.password.inputKeys;

  const isCardNumberComplete = isFormInputComplete(CARD_LABEL_INPUT_CONFIG.cardNumber.maxLength, cardNumbersInputKeys);
  const isExpirationDateComplete = isFormInputComplete(
    CARD_LABEL_INPUT_CONFIG.expirationDate.maxLength,
    expirationDateInputKeys
  );
  const isCVCComplete = isFormInputComplete(CARD_LABEL_INPUT_CONFIG.CVC.maxLength, cvcInputKeys);
  const isPasswordComplete = isFormInputComplete(CARD_LABEL_INPUT_CONFIG.password.maxLength, passwordInputKeys);
  const isFormAllComplete = isCardNumberComplete && isExpirationDateComplete && isCVCComplete && isPasswordComplete;

  const handleStepIndex = () => {
    if (stepIndex === 0 && isCardNumberComplete) setStepIndex(stepIndex + 1);
    if (stepIndex === 1 && isFormSelectComplete(cardBrandSelectKeys)) setStepIndex(stepIndex + 1);
    if (stepIndex === 2 && isExpirationDateComplete) setStepIndex(stepIndex + 1);
    if (stepIndex === 3 && isCVCComplete) setStepIndex(stepIndex + 1);
    if (stepIndex === 4 && isFormAllComplete && isFormValid()) setStepIndex(stepIndex + 1);
  };

  return { stepIndex, handleStepIndex };
};

export default useCardFormStep;
