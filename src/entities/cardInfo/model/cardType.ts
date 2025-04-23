import { CARD_IMAGE_PATH } from '../../../shared/assets/constants/cardImagePaths';
import { CARD_TYPE_RULE, CardType } from '../constants/cardTypeConstants';

const getCardType = (cardNumber: string) => {
  const first = cardNumber[0];
  const second = Number(cardNumber[1]);

  if (first === CARD_TYPE_RULE.VISA.FIRST_DIGIT) return CardType.VISA;
  if (
    first === CARD_TYPE_RULE.MASTERCARD.FIRST_DIGIT &&
    second >= CARD_TYPE_RULE.MASTERCARD.SECOND_DIGIT_MIN &&
    second <= CARD_TYPE_RULE.MASTERCARD.SECOND_DIGIT_MAX
  )
    return CardType.MASTERCARD;

  return CardType.UNKNOWN;
};

export const isValidCardType = (cardNumber: string): boolean => {
  return getCardType(cardNumber) !== CardType.UNKNOWN;
};

export const getCardImagePath = (cardNumber: string = '') => {
  const cardType = getCardType(cardNumber);

  switch (cardType) {
    case CardType.VISA:
      return CARD_IMAGE_PATH.VISA;
    case CardType.MASTERCARD:
      return CARD_IMAGE_PATH.MASTERCARD;
    default:
      return CARD_IMAGE_PATH.DEFAULT;
  }
};
