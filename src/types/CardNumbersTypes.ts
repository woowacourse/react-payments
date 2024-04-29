export type CardNumbersType = [string, string, string, string];
export type CardNumbersValidStatesType = [boolean, boolean, boolean, boolean];
export type CardNumbersValidType = {
  validStates: CardNumbersValidStatesType;
  isCompleted: boolean;
  errorMessage: string;
};
