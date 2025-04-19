import { ValidationConfig, useCardField } from '../hooks/useCardField';
import { CardNumber, CardNumberError } from '../../types/types';
import { CARD_NUMBER_FIELD_NAMES } from '../constants';

type CardFieldMap = {
  [key in (typeof CARD_NUMBER_FIELD_NAMES)[number]]: ReturnType<
    typeof useCardField
  >;
};

export const createCardFields = (config: ValidationConfig): CardFieldMap => {
  const fields = {} as CardFieldMap;

  CARD_NUMBER_FIELD_NAMES.forEach((name) => {
    fields[name] = useCardField(config);
  });

  return fields;
};

export const createCardNumber = (fields: CardFieldMap): CardNumber => {
  const cardNumber = {} as CardNumber;

  CARD_NUMBER_FIELD_NAMES.forEach((name) => {
    cardNumber[name] = fields[name].value ? Number(fields[name].value) : null;
  });

  return cardNumber;
};

export const createCardNumberError = (
  fields: CardFieldMap
): CardNumberError => {
  const cardNumberError = {} as CardNumberError;

  CARD_NUMBER_FIELD_NAMES.forEach((name) => {
    cardNumberError[name] = fields[name].error;
  });

  return cardNumberError;
};
