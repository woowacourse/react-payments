import { CARD_PREFIX, CARD_TYPE } from '../config/card';

export const getCardTypeFromPrefix = (value: string) => {
  if (value.length < CARD_PREFIX.length) return null;

  const firstDigit = value[0];
  const firstTwoDigits = Number(value.slice(0, 2));

  if (firstDigit === CARD_PREFIX.visa) return CARD_TYPE.visa;
  if (
    firstTwoDigits >= CARD_PREFIX.master.min &&
    firstTwoDigits <= CARD_PREFIX.master.max
  ) {
    return CARD_TYPE.master;
  }

  return null;
};
