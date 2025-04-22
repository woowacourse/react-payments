export type CardNumber = {
  first: number | null;
  second: number | null;
  third: number | null;
  forth: number | null;
};

export interface CardNumberError extends Record<keyof CardNumber, boolean> {}

export type CardExpirationDate = {
  month: string;
  year: string;
};

export interface CardExpirationDateError
  extends Record<keyof CardExpirationDate, boolean> {}

export type CardCVC = number | null;

export type NonEmptyArray<T> = readonly [T, ...T[]];
