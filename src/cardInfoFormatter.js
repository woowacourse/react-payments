import {
  INITIAL_FORMATTED_CARD_NUMBER,
  CARD_NUMBER_UNIT_LENGTH,
  INITIAL_FORMATTED_EXPIRATION_DATE,
  FORMATTED_EXPIRATION_DATE_LENGTH,
  CARD_NUMBER_MASKS,
  SLASH,
} from './constants';
import { initialCardInfo } from './App';

export const getFormattedNumber = ({ number }) => {
  if (Object.values(number).some((fourDigit) => fourDigit.length !== CARD_NUMBER_UNIT_LENGTH)) {
    return INITIAL_FORMATTED_CARD_NUMBER;
  }
  return [number.first, number.second, CARD_NUMBER_MASKS, CARD_NUMBER_MASKS].join(' ');
};

export const getFormattedExpirationDate = ({ expirationDate }) => {
  const formattedExpirationDate = Object.values(expirationDate).join(SLASH);
  if (
    formattedExpirationDate < FORMATTED_EXPIRATION_DATE_LENGTH ||
    expirationDate.month === initialCardInfo.expirationDate.month ||
    expirationDate.year === initialCardInfo.expirationDate.year
  ) {
    return INITIAL_FORMATTED_EXPIRATION_DATE;
  }
  return formattedExpirationDate;
};

export const getFormattedOwnerName = ({ ownerName, isOwnerNameFilled }) => {
  if (!isOwnerNameFilled) {
    return initialCardInfo.ownerName;
  }
  return ownerName;
};
