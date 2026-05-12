import { useState } from 'react';
import {
  hasCardNumbersError,
  hasCardFormError,
  validateExpiryMonth,
  validateExpiryYear,
  validatePassword,
} from '../utils/cardFormValidator';
import type { CardCompanyId } from '../../../common/types/CardPreview';
import type {
  CardFormInfoType,
  CardPreviewInfoType,
} from '../../../common/types/CardPreviewInfoType';
import { useCvcField } from './useCvcField';

export const useCardForm = () => {
  const [cardNumbers, setCardNumbers] = useState(['', '', '', '']);
  const [expiryMonth, setExpiryMonth] = useState('');
  const [expiryYear, setExpiryYear] = useState('');
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

  const handleCardNumbersChange = (cardNumbers: string[]) => {
    setCardNumbers(cardNumbers);

    if (!hasCardNumbersError(cardNumbers)) advanceStep(1);
  };
  const handleCardCompanyChange = (cardCompanyId: CardCompanyId | null) => {
    setCardCompanyId(cardCompanyId);

    if (cardCompanyId !== null) advanceStep(2);
  };
  const handleExpiryMonthChange = (expiryMonth: string) => {
    setExpiryMonth(expiryMonth);

    if (
      validateExpiryMonth(expiryMonth) === null &&
      validateExpiryYear(expiryYear) === null
    ) {
      advanceStep(3);
    }
  };
  const handleExpiryYearChange = (expiryYear: string) => {
    setExpiryYear(expiryYear);

    if (
      validateExpiryMonth(expiryMonth) === null &&
      validateExpiryYear(expiryYear) === null
    ) {
      advanceStep(3);
    }
  };

  const handlePasswordNumberChange = (password: string) => {
    setPassword(password);

    if (validatePassword(password) === null) advanceStep(5);
  };

  const cardPreviewInfo: CardPreviewInfoType = {
    cardNumbers,
    expiryMonth,
    expiryYear,
    cardCompanyId,
  };

  const cardFormInfo: CardFormInfoType = {
    cardNumbers,
    expiryMonth,
    expiryYear,
    cvcNumber: cvcField.value,
    cardCompanyId,
    password,
  };

  const cardFormHandlers = {
    handleCardNumbersChange,
    handleExpiryMonthChange,
    handleExpiryYearChange,
    handleCardCompanyChange,
    handleCvcNumberChange: cvcField.handleChange,
    handlePasswordNumberChange,
  };

  const hasFormError = hasCardFormError({
    cardNumbers,
    expiryMonth,
    expiryYear,
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
