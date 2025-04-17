export type CardNumber = {
  first: number | null;
  second: number | null;
  third: number | null;
  forth: number | null;
};

export type CardNumberError = {
  first: boolean;
  second: boolean;
  third: boolean;
  forth: boolean;
};

export type CardExpirationDate = {
  month: string;
  year: string;
};

export type CardExpirationDateError = {
  month: boolean;
  year: boolean;
};

export type CardCVC = number | null;
