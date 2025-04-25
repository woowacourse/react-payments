import { cardInformationKey, errorStateType } from ".";

export type useEachValidationType = {
  isError: errorStateType;
  errorMessage: string;
  validateInput: (index: number, value: string) => void;
};

export type useValidationType = {
  [K in Exclude<cardInformationKey, "company">]: useEachValidationType;
};
