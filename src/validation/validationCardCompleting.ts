import { CardInputProps } from '../types/CardInputTypes';
import { ErrorMessagesType } from '../types/ErrorMessagesType';

const isFieldValid = <T extends keyof CardInputProps>(
  cardInput: CardInputProps,
  errorMessages: ErrorMessagesType,
  field: T,
  validator?: (value: CardInputProps[T]) => boolean,
): boolean => {
  const isNotEmpty =
    cardInput[field] !== null &&
    cardInput[field] !== undefined &&
    cardInput[field] !== '';

  const hasNoError =
    !errorMessages[field as unknown as keyof ErrorMessagesType];

  const passesCustomValidation = validator ? validator(cardInput[field]) : true;

  return isNotEmpty && hasNoError && passesCustomValidation;
};

export const isCardNumberComplete = (
  cardInput: CardInputProps,
  errorMessages: ErrorMessagesType,
): boolean => {
  const cardNumberFields = ['first', 'second', 'third', 'fourth'] as const;

  return cardNumberFields.every(field =>
    isFieldValid(
      cardInput,
      errorMessages,
      field,
      value => String(value).length === 4,
    ),
  );
};

export const isCardBrandComplete = (
  cardInput: CardInputProps,
  errorMessages: ErrorMessagesType,
): boolean => {
  return isFieldValid(cardInput, errorMessages, 'cardBrand');
};

export const isSecretNumberComplete = (
  cardInput: CardInputProps,
  errorMessages: ErrorMessagesType,
): boolean => {
  return isFieldValid(cardInput, errorMessages, 'secretNumber', value => {
    const strValue = String(value || '');
    return strValue.length === 2 || strValue.length === 4;
  });
};

export const isExpiryDateComplete = (
  cardInput: CardInputProps,
  errorMessages: ErrorMessagesType,
): boolean => {
  const isMMValid = isFieldValid(cardInput, errorMessages, 'MM', value => {
    const mmStr = String(value || '');
    return mmStr.length === 2 && parseInt(mmStr) >= 1 && parseInt(mmStr) <= 12;
  });

  const isYYValid = isFieldValid(
    cardInput,
    errorMessages,
    'YY',
    value => String(value || '').length === 2,
  );

  return isMMValid && isYYValid;
};

export const isCVCComplete = (
  cardInput: CardInputProps,
  errorMessages: ErrorMessagesType,
): boolean => {
  return isFieldValid(
    cardInput,
    errorMessages,
    'CVC',
    value => String(value || '').length === 3,
  );
};

export const isFormComplete = (
  cardInput: CardInputProps,
  errorMessages: ErrorMessagesType,
): boolean => {
  return (
    isSecretNumberComplete(cardInput, errorMessages) &&
    isCardBrandComplete(cardInput, errorMessages) &&
    isCardNumberComplete(cardInput, errorMessages) &&
    isExpiryDateComplete(cardInput, errorMessages) &&
    isCVCComplete(cardInput, errorMessages)
  );
};
