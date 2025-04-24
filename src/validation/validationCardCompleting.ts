import { CardInputProps } from '../types/CardInputTypes';
import { ErrorMessagesType } from '../types/ErrorMessagesType';

export const isCardNumberComplete = (
  cardInput: CardInputProps,
  errorMessages: ErrorMessagesType,
): boolean => {
  const allFieldsFilled =
    cardInput.first !== null &&
    cardInput.second !== null &&
    cardInput.third !== null &&
    cardInput.fourth !== null;

  const noErrors =
    !errorMessages.first &&
    !errorMessages.second &&
    !errorMessages.third &&
    !errorMessages.fourth;

  const correctLength =
    cardInput.first !== null &&
    String(cardInput.first).length === 4 &&
    cardInput.second !== null &&
    String(cardInput.second).length === 4 &&
    cardInput.third !== null &&
    String(cardInput.third).length === 4 &&
    cardInput.fourth !== null &&
    String(cardInput.fourth).length === 4;

  return allFieldsFilled && noErrors && correctLength;
};

export const isCardBrandComplete = (
  cardInput: CardInputProps,
  errorMessages: ErrorMessagesType,
): boolean => {
  return (
    cardInput.cardBrand !== undefined &&
    cardInput.cardBrand !== null &&
    cardInput.cardBrand !== '' &&
    !errorMessages.cardBrand
  );
};

export const isSecretNumberComplete = (
  cardInput: CardInputProps,
  errorMessages: ErrorMessagesType,
): boolean => {
  const secretNumberStr = String(cardInput.secretNumber || '');
  return (
    cardInput.secretNumber !== null &&
    !errorMessages.secretNumber &&
    (secretNumberStr.length === 2 || secretNumberStr.length === 4)
  );
};

export const isExpiryDateComplete = (
  cardInput: CardInputProps,
  errorMessages: ErrorMessagesType,
): boolean => {
  const mmStr = String(cardInput.MM || '');
  const yyStr = String(cardInput.YY || '');

  const validMM =
    cardInput.MM !== null &&
    mmStr.length === 2 &&
    parseInt(mmStr) >= 1 &&
    parseInt(mmStr) <= 12;
  const validYY = cardInput.YY !== null && yyStr.length === 2;

  return validMM && validYY && !errorMessages.MM && !errorMessages.YY;
};

export const isCVCComplete = (
  cardInput: CardInputProps,
  errorMessages: ErrorMessagesType,
): boolean => {
  const cvcStr = String(cardInput.CVC || '');
  return cardInput.CVC !== null && !errorMessages.CVC && cvcStr.length === 3;
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
