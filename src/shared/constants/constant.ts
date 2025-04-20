import {
  CardNumberPosition,
  ExpirationPeriod,
} from "./../../types/index.types";
export const NO_ERROR = "";

export const INITIALIZE_VALUE = "";

export const POSITION: Record<
  "FIRST" | "SECOND" | "THIRD" | "FOURTH",
  CardNumberPosition
> = {
  FIRST: "first",
  SECOND: "second",
  THIRD: "third",
  FOURTH: "fourth",
};

export const EXPIRATION_PERIOD: Record<
  "MONTH" | "YEAR",
  keyof ExpirationPeriod
> = {
  MONTH: "month",
  YEAR: "year",
} as const;
