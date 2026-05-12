import { useState } from 'react';
import { hasCardFormError, validatePassword } from '../utils/cardFormValidator';
import type { CardCompanyId } from '../../../common/types/CardPreview';
import type {
  CardFormInfoType,
  CardPreviewInfoType,
} from '../../../common/types/CardPreviewInfoType';
import { useCvcField, type CvcFieldType } from './useCvcField';
import { useExpiryField, type ExpiryFieldType } from './useExpiryField';
import { useNumbersField, type NumbersFieldType } from './useNumbersField';

export type CardFormFieldsType = {
  numbers: NumbersFieldType;
  expiry: ExpiryFieldType;
  cvc: CvcFieldType;
};

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

  const fields = {
    numbers: numbersField,
    expiry: expiryField,
    cvc: cvcField,
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
    fields,
    cardPreviewInfo,
    cardFormInfo,
    cardFormHandlers,
    currentStep,
    hasFormError,
  };
};
