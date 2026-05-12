import { useState } from 'react';

import { useCvcField, type CvcFieldType } from './useCvcField';
import { useExpiryField, type ExpiryFieldType } from './useExpiryField';
import { useNumbersField, type NumbersFieldType } from './useNumbersField';
import { usePasswordField, type PasswordFieldType } from './usePasswordField';
import {
  UseCardCompanyField,
  type CardCompanyFieldType,
} from './useCardCompanyField';
import type {
  CardFormInfoType,
  CardPreviewInfoType,
} from '../types/CardPreviewInfoType';

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
    cardCompany: cardCompanyField,
    expiry: expiryField,
    cvc: cvcField,
    password: passwordField,
  };

  const cardPreviewInfo: CardPreviewInfoType = {
    cardNumbers: numbersField.cardNumbers,
    cardCompanyId: cardCompanyField.cardCompanyId,
    expiryMonth: expiryField.expiryMonth,
    expiryYear: expiryField.expiryYear,
  };

  const cardFormInfo: CardFormInfoType = {
    ...cardPreviewInfo,
    cvcNumber: cvcField.cvcNumber,
    password: passwordField.password,
  };

  const hasFormError = !Object.values(fields).every(
    (field) => field.isComplete,
  );

  return {
    fields,
    cardPreviewInfo,
    cardFormInfo,
    currentStep,
    hasFormError,
  };
};
