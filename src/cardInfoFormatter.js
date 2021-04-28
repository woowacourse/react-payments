import { initialCardInfo } from './App';
import {
  INITIAL_FORMATTED_CARD_NUMBER,
  CARD_NUMBER_UNIT_LENGTH,
  INITIAL_FORMATTED_EXPIRATION_MONTH,
  INITIAL_FORMATTED_EXPIRATION_YEAR,
  FORMATTED_EXPIRATION_DATE_LENGTH,
  CARD_NUMBER_MASKS,
  SLASH,
} from './constants';

export const getFormattedCardInfo = ({ cardInfo }) => {
  const { number, expirationDate, ownerName, isOwnerNameFilled } = cardInfo;

  return {
    formattedNumber: getFormattedNumber({ number }),
    formattedExpirationDate: getFormattedExpirationDate({ expirationDate }),
    formattedOwnerName: getFormattedOwnerName({ ownerName, isOwnerNameFilled }),
  };
};

const getFormattedNumber = ({ number }) => {
  if (Object.values(number).some((fourDigit) => fourDigit.length !== CARD_NUMBER_UNIT_LENGTH)) {
    return INITIAL_FORMATTED_CARD_NUMBER;
  }
  return [number.first, number.second, CARD_NUMBER_MASKS, CARD_NUMBER_MASKS].join(' ');
};

const getFormattedExpirationDate = ({ expirationDate }) => {
  const formattedExpirationDate = Object.values(expirationDate).join(SLASH);

  if (
    formattedExpirationDate.length < FORMATTED_EXPIRATION_DATE_LENGTH ||
    expirationDate.month === '' ||
    expirationDate.year === ''
  ) {
    return `${INITIAL_FORMATTED_EXPIRATION_MONTH}${SLASH}${INITIAL_FORMATTED_EXPIRATION_YEAR}`;
  }
  return formattedExpirationDate;
};

const getFormattedOwnerName = ({ ownerName, isOwnerNameFilled }) => {
  if (!isOwnerNameFilled) {
    return initialCardInfo.ownerName;
  }
  return ownerName;
};
