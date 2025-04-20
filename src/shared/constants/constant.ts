export const NO_ERROR = "";

export const INITIALIZE_VALUE = "";

export const POSITION = {
  FIRST: "first",
  SECOND: "second",
  THIRD: "third",
  FOURTH: "fourth",
} as const;

type PositionValues = (typeof POSITION)[keyof typeof POSITION];

export const EXPIRATION_PERIOD = {
  MONTH: "month",
  YEAR: "year",
} as const;
