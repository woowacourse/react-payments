export enum CardInfoType {
  NUMBER = 'cardNumber',
  EXPDATE = 'cardExpirationDate',
  CVC = 'cardCVC',
  PASSWORD = 'cardPassword',
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
  [CardInfoType.PASSWORD]: {
    MAX_LENGTH: 2,
  },
});

export const SECTION_ORDER = [
  CardInfoType.NUMBER,
  CardInfoType.EXPDATE,
  CardInfoType.CVC,
  CardInfoType.PASSWORD,
];
