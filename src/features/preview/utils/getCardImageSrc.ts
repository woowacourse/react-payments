import {
  MASTERCARD_FIRST_DIGIT,
  MASTERCARD_MAX_SECOND_DIGIT,
  MASTERCARD_MIN_SECOND_DIGIT,
  VISA_CARD_FIRST_DIGIT,
} from '../../../shared/constants/cardInfoConstants';

export const getCardImageSrc = (cardNumber = '') => {
  const first = cardNumber[0];
  const second = Number(cardNumber[1]);

  if (first === VISA_CARD_FIRST_DIGIT) return './Visa.svg';
  if (
    first === MASTERCARD_FIRST_DIGIT &&
    second >= MASTERCARD_MIN_SECOND_DIGIT &&
    second <= MASTERCARD_MAX_SECOND_DIGIT
  )
    return './Mastercard.svg';
  return '';
};
