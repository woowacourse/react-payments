export type cardNumbersType = [string, string, string, string];
export type cardNumbersValidStatesType = [boolean, boolean, boolean, boolean];
export type cardNumbersValidType = {
  validStates: cardNumbersValidStatesType;
  errorMessage: string;
};
