import { ChangeEvent } from 'react';
import {
  CARD_NUMBER_ERROR,
  CARD_NUMBER,
  CARD_NUMBER_FIELD_NAMES,
} from '../constants';
import {
  createCardFields,
  createCardNumber,
  createCardNumberError,
} from '../utils/cardFieldFactory';

type FieldName = (typeof CARD_NUMBER_FIELD_NAMES)[number];

export const useCardNumber = () => {
  const fields = createCardFields({
    requiredLength: CARD_NUMBER.maxLength,
    errorMessages: { onlyNumbers: CARD_NUMBER_ERROR.onlyNumbers },
  });

  const cardNumber = createCardNumber(fields);
  const cardNumberError = createCardNumberError(fields);

  const handleCardNumberChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name in fields) {
      fields[name as FieldName].handleChange(value);
    }
  };

  const resetCardNumber = () => {
    CARD_NUMBER_FIELD_NAMES.forEach((name) => {
      fields[name].reset();
    });
  };

  const isCardNumberValid = () => {
    return CARD_NUMBER_FIELD_NAMES.every((name) => {
      return (
        fields[name].isValid() &&
        fields[name].value.length === CARD_NUMBER.maxLength
      );
    });
  };

  const getCardNumberErrorMessage = (): string | null => {
    if (CARD_NUMBER_FIELD_NAMES.some((name) => fields[name].error)) {
      return CARD_NUMBER_ERROR.onlyNumbers;
    }
    return null;
  };

  return {
    cardNumber,
    cardNumberError,
    handleCardNumberChange,
    resetCardNumber,
    isCardNumberValid,
    getCardNumberErrorMessage,
  };
};
