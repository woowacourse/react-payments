import { LENGTH } from 'constants/constants';
import { CardNumber } from 'types/Card';

export const showNumberHyphen = (cardNumber: CardNumber) => {
  const numbers = Object.values(cardNumber);
  return numbers.map((number) => {
    return number.length !== LENGTH.EACH_CARD_NUMBER ? 'hidden' : 'visible';
  });
};

export const showDateHyphen = (month?: string) => {
  return month?.length !== LENGTH.EXPIRATION ? 'hidden' : 'visible';
};
