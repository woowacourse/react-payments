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

const CARD_FORM_STEP = {
  CARD_NUMBER: 0,
  CARD_COMPANY: 1,
  EXPIRY: 2,
  CVC: 3,
  PASSWORD: 4,
  SUBMIT: 5,
} as const;

export const useCardForm = () => {
  const numbersField = useNumbersField({
    onComplete: () => advanceStep(CARD_FORM_STEP.CARD_COMPANY),
  });
  const cardCompanyField = UseCardCompanyField({
    onComplete: () => advanceStep(CARD_FORM_STEP.EXPIRY),
  });
  const expiryField = useExpiryField({
    onComplete: () => advanceStep(CARD_FORM_STEP.CVC),
  });
  const cvcField = useCvcField({
    onComplete: () => advanceStep(CARD_FORM_STEP.PASSWORD),
  });
  const passwordField = usePasswordField({
    onComplete: () => advanceStep(CARD_FORM_STEP.SUBMIT),
  });

  const [currentStep, setCurrentStep] = useState<number>(
    CARD_FORM_STEP.CARD_NUMBER,
  );
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
