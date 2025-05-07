export enum CardType {
  VISA = 'VISA',
  MASTERCARD = 'MASTERCARD',
  UNKNOWN = 'UNKNOWN',
}

export const CARD_TYPE_RULE = Object.freeze({
  [CardType.VISA]: {
    FIRST_DIGIT: 4,
  },
  [CardType.MASTERCARD]: {
    FIRST_DIGIT: 5,
    SECOND_DIGIT_MIN: 1,
    SECOND_DIGIT_MAX: 5,
  },
  [CardType.UNKNOWN]: {},
});
