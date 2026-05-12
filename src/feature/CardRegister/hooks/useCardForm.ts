import { useState } from 'react';
import { hasCardFormError, validatePassword } from '../utils/cardFormValidator';
import type { CardCompanyId } from '../../../common/types/CardPreview';
import type {
  CardFormInfoType,
  CardPreviewInfoType,
} from '../../../common/types/CardPreviewInfoType';
import { useCvcField } from './useCvcField';
import { useExpiryField } from './useExpiryField';
import { useNumbersField } from './useNumbersField';

export const useCardForm = () => {
  const numbersField = useNumbersField({ onComplete: () => advanceStep(1) });
  const expiryField = useExpiryField({ onComplete: () => advanceStep(3) });
  const [cardCompanyId, setCardCompanyId] = useState<CardCompanyId | null>(
    null,
  );
  const cvcField = useCvcField({
    onComplete: () => advanceStep(4),
  });
  const [password, setPassword] = useState('');

  const [currentStep, setCurrentStep] = useState(0);

  const advanceStep = (nextStep: number) => {
    setCurrentStep((prev) => Math.max(prev, nextStep));
  };

  const handleCardCompanyChange = (cardCompanyId: CardCompanyId | null) => {
    setCardCompanyId(cardCompanyId);

    if (cardCompanyId !== null) advanceStep(2);
  };

  const handlePasswordNumberChange = (password: string) => {
    setPassword(password);

    if (validatePassword(password) === null) advanceStep(5);
  };

  const cardPreviewInfo: CardPreviewInfoType = {
    cardNumbers: numbersField.cardNumbers,
    expiryMonth: expiryField.expiryMonth,
    expiryYear: expiryField.expiryYear,
    cardCompanyId,
  };

  const cardFormInfo: CardFormInfoType = {
    cardNumbers: numbersField.cardNumbers,
    expiryMonth: expiryField.expiryMonth,
    expiryYear: expiryField.expiryYear,
    cvcNumber: cvcField.value,
    cardCompanyId,
    password,
  };

  const cardFormHandlers = {
    handleCardNumbersChange: numbersField.handleNumbersChange,
    handleExpiryMonthChange: expiryField.handleMonthChange,
    handleExpiryYearChange: expiryField.handleYearChange,
    handleCardCompanyChange,
    handleCvcNumberChange: cvcField.handleChange,
    handlePasswordNumberChange,
  };

  const hasFormError = hasCardFormError({
    cardNumbers: numbersField.cardNumbers,
    expiryMonth: expiryField.expiryMonth,
    expiryYear: expiryField.expiryYear,
    cvcNumber: cvcField.value,
    password,
  });

  return {
    cardPreviewInfo,
    cardFormInfo,
    cardFormHandlers,
    currentStep,
    hasFormError,
  };
};
