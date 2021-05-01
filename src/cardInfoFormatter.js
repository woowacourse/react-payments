import {
  EXPIRATION_DATE_IN_STRING_FORMAT_LENGTH,
  INITIAL_EXPIRATION_MONTH,
  INITIAL_EXPIRATION_YEAR,
  CARD_NUMBER_MASKS,
  SLASH,
  CARD_NUMBER_INPUT,
} from './constants';
import { initialCardInfo } from './App';

export const getNumberInString = (cardNumbers) => {
  return [
    cardNumbers[CARD_NUMBER_INPUT.FIRST],
    cardNumbers[CARD_NUMBER_INPUT.SECOND],
    CARD_NUMBER_MASKS,
    CARD_NUMBER_MASKS,
  ].join(' ');
};

export const getExpirationDateInString = (expirationDate) => {
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
