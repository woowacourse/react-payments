import { errorStateType } from ".";

export type useEachValidationType = {
  isError: errorStateType;
  errorMessage: string;
  validateInput: (index: number, value: string) => void;
};

type ValidationKey = "uniqueNumber" | "expirationDate" | "cvcNumber";
export type useValidationType = {
  [K in ValidationKey]: useEachValidationType;
};
