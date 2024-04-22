const cardType = {
  Visa: 0,
  Master: 1,
} as const;

const CARD = {
  TYPE: cardType,

  PREFIXES: {
    [cardType.Visa]: ['4'],
    [cardType.Master]: ['51', '52', '53', '54', '55'],
  },
} as const;

export default CARD;
