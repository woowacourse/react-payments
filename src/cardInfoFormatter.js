import {
  INITIAL_CARD_NUMBER_IN_STRING,
  CARD_NUMBER_UNIT_LENGTH,
  INITIAL_EXPIRATION_DATE_IN_STRING,
  EXPIRATION_DATE_IN_STRING_FORMAT_LENGTH,
  CARD_NUMBER_MASKS,
  SLASH,
} from './constants';
import { initialCardInfo } from './App';

export const getNumberInString = ({ number }) => {
  if (Object.values(number).some((fourDigit) => fourDigit.length !== CARD_NUMBER_UNIT_LENGTH)) {
    return INITIAL_CARD_NUMBER_IN_STRING;
  }
  return [number.first, number.second, CARD_NUMBER_MASKS, CARD_NUMBER_MASKS].join(' ');
};

export const getExpirationDateInString = ({ expirationDate }) => {
  const expirationDateInString = Object.values(expirationDate).join(SLASH);
  if (
    expirationDateInString < EXPIRATION_DATE_IN_STRING_FORMAT_LENGTH ||
    expirationDate.month === initialCardInfo.expirationDate.month ||
    expirationDate.year === initialCardInfo.expirationDate.year
  ) {
    return INITIAL_EXPIRATION_DATE_IN_STRING;
  }
  return expirationDateInString;
};

export const getOwnerNameInString = ({ ownerName, isOwnerNameFilled }) => {
  if (!isOwnerNameFilled) {
    return initialCardInfo.ownerName;
  }
  return ownerName;
};
