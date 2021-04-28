import {
  INITIAL_CARD_NUMBER_IN_STRING,
  CARD_NUMBER_UNIT_LENGTH,
  EXPIRATION_DATE_IN_STRING_FORMAT_LENGTH,
  INITIAL_EXPIRATION_MONTH,
  INITIAL_EXPIRATION_YEAR,
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
    expirationDateInString.length < EXPIRATION_DATE_IN_STRING_FORMAT_LENGTH ||
    expirationDate.month === '' ||
    expirationDate.year === ''
  ) {
    return `${INITIAL_EXPIRATION_MONTH}${SLASH}${INITIAL_EXPIRATION_YEAR}`;
  }
  return expirationDateInString;
};

export const getOwnerNameInString = ({ ownerName, cardInfo }) => {
  if (!cardInfo.isOwnerNameFilled) {
    return initialCardInfo.ownerName;
  }
  return ownerName;
};
