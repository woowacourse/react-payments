import { useState } from 'react';
import type {
  CardFormInfoType,
  CardPreviewInfoType,
} from '../../../common/types/CardPreviewInfoType';
import { useCvcField, type CvcFieldType } from './useCvcField';
import { useExpiryField, type ExpiryFieldType } from './useExpiryField';
import { useNumbersField, type NumbersFieldType } from './useNumbersField';
import { usePasswordField, type PasswordFieldType } from './usePasswordField';
import {
  UseCardCompanyField,
  type CardCompanyFieldType,
} from './useCardCompanyField';
import { hasCardFormError } from '../utils/cardFormValidator';

export type CardFormFieldsType = {
  numbers: NumbersFieldType;
  expiry: ExpiryFieldType;
  cvc: CvcFieldType;
  password: PasswordFieldType;
  cardCompany: CardCompanyFieldType;
};

export const useCardForm = () => {
  const numbersField = useNumbersField({ onComplete: () => advanceStep(1) });
  const cardCompanyField = UseCardCompanyField({
    onComplete: () => advanceStep(2),
  });
  const expiryField = useExpiryField({ onComplete: () => advanceStep(3) });
  const cvcField = useCvcField({ onComplete: () => advanceStep(4) });
  const passwordField = usePasswordField({ onComplete: () => advanceStep(5) });

  const [currentStep, setCurrentStep] = useState(0);
  const advanceStep = (nextStep: number) => {
    setCurrentStep((prev) => Math.max(prev, nextStep));
  };

  const fields = {
    numbers: numbersField,
    expiry: expiryField,
    cvc: cvcField,
    password: passwordField,
    cardCompany: cardCompanyField,
  };

  const cardPreviewInfo: CardPreviewInfoType = {
    cardNumbers: numbersField.cardNumbers,
    expiryMonth: expiryField.expiryMonth,
    expiryYear: expiryField.expiryYear,
    cardCompanyId: cardCompanyField.cardCompanyId,
  };

  const cardFormInfo: CardFormInfoType = {
    cardNumbers: numbersField.cardNumbers,
    expiryMonth: expiryField.expiryMonth,
    expiryYear: expiryField.expiryYear,
    cvcNumber: cvcField.value,
    cardCompanyId: cardCompanyField.cardCompanyId,
    password: passwordField.password,
  };

  const cardFormHandlers = {
    handleCardNumbersChange: numbersField.handleNumbersChange,
    handleExpiryMonthChange: expiryField.handleMonthChange,
    handleExpiryYearChange: expiryField.handleYearChange,
    handleCardCompanyChange: cardCompanyField.handleChange,
    handleCvcNumberChange: cvcField.handleChange,
    handlePasswordNumberChange: passwordField.handleChange,
  };

  const hasFormError = hasCardFormError({
    cardNumbers: numbersField.cardNumbers,
    expiryMonth: expiryField.expiryMonth,
    expiryYear: expiryField.expiryYear,
    cvcNumber: cvcField.value,
    password: passwordField.password,
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
