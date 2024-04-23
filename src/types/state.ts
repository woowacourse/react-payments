export interface CardNumberType {
  data: string[];
  errorMessage: string;
}

export interface CardPeriodType {
  data: { month: string; year: string };
  errorMessage: string;
}

export interface CardOwnerType {
  data: string;
  errorMessage: string;
}
