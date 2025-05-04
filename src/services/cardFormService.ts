import { CardInputProps } from '../types/CardInputTypes';
import { ErrorMessagesType } from '../types/ErrorMessagesType';
import {
  isCardNumberComplete,
  isCardBrandComplete,
  isExpiryDateComplete,
  isCVCComplete,
  isFormComplete,
} from '../validation/validationCardCompleting';

export const validateCardForm = (
  cardInput: CardInputProps,
  errorMessages: ErrorMessagesType,
) => {
  return {
    isCardNumberComplete: isCardNumberComplete(cardInput, errorMessages),
    isCardBrandComplete: isCardBrandComplete(cardInput, errorMessages),
    isExpiryDateComplete: isExpiryDateComplete(cardInput, errorMessages),
    isCVCComplete: isCVCComplete(cardInput, errorMessages),
    isFormComplete: isFormComplete(cardInput, errorMessages),
  };
};

export const getCardNumberErrorMessage = (
  errorMessages: ErrorMessagesType,
): string => {
  const filterErrorMessage = [
    errorMessages.first,
    errorMessages.second,
    errorMessages.third,
    errorMessages.fourth,
  ].filter(message => message.length !== 0);
  return filterErrorMessage[0] || '';
};

export const getExpiryDateErrorMessage = (
  errorMessages: ErrorMessagesType,
): string => {
  const filterErrorMessage = [errorMessages.YY, errorMessages.MM].filter(
    message => message.length !== 0,
  );
  return filterErrorMessage[0] || '';
};
