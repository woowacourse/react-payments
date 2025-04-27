export enum CardInfoType {
  NUMBER = 'cardNumber',
  EXPDATE = 'cardExpirationDate',
  CVC = 'cardCVC',
}

export const CARD_INFO_VALID_RULE = Object.freeze({
  [CardInfoType.NUMBER]: {
    MAX_LENGTH: 4,
    TOTAL_SECTIONS: 4,
  },
  [CardInfoType.EXPDATE]: {
    MAX_LENGTH: 2,
  },
  [CardInfoType.CVC]: {
    MAX_LENGTH: 3,
  },
});
