export const VALIDATION = {
  cardNumberCount: 4,
  cardMonthRange: {
    min: 1,
    max: 12,
  },
  maximumYearPeriod: 10,
  cardOwnerLength: {
    min: 1,
    max: 20,
  },
  singleDigit: {
    min: 1,
    max: 9,
  },
  cvcNumberCount: 3,
  numberRegex: /^[0-9]*$/,
  upperCaseRegex: /^[A-Z\s]*$/,
};
