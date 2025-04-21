const CARD_TYPE = {
  VISA: {
    NAME: "visa",
    START_NUMBER: 40,
    END_NUMBER: 49,
  },
  MASTER: {
    NAME: "master",
    START_NUMBER: 51,
    END_NUMBER: 55,
  },
  DEFAULT: {
    NAME: "default",
  },
} as const;

export function getCardType(firstTwoDigits: number) {
  if (
    firstTwoDigits >= CARD_TYPE.VISA.START_NUMBER &&
    firstTwoDigits <= CARD_TYPE.VISA.END_NUMBER
  ) {
    return CARD_TYPE.VISA.NAME;
  } else if (
    firstTwoDigits >= CARD_TYPE.MASTER.START_NUMBER &&
    firstTwoDigits <= CARD_TYPE.MASTER.END_NUMBER
  ) {
    return CARD_TYPE.MASTER.NAME;
  } else {
    return CARD_TYPE.DEFAULT.NAME;
  }
}
