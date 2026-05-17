export type CardNumberUnits =
  | [string, string, string, string]
  | [string, string, string];

export type ValidityPeriod = {
  month: string;
  year: string;
};
