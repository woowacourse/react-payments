import { cardInformationKey, errorStateType } from ".";

export type useEachValidationType = {
  isError: errorStateType;
  isComplete: boolean;
  errorMessage: string;
  validateInput: (index: number, value: string) => void;
};

export type useValidationType = {
  validation: validationFieldType;
  isErrorCompletes: isErrorCompletesType;
};

// 🔥 새로 추가
export type validationFieldType = {
  [K in Exclude<cardInformationKey, "company">]: Exclude<useEachValidationType, "isComplete">;
};

export type isErrorCompletesType = {
  [K in Exclude<cardInformationKey, "company">]: Extract<useEachValidationType, "isComplete">;
};
