import { cardInformationKey, errorStateType } from ".";

export type useEachValidationType = {
  isError: errorStateType;
  isComplete: boolean;
  errorMessage: string;
  validateInput: (index: number, value: string) => void;
};

export type useValidationType = {
  validation: validationFieldType;
  isCompletes: isCompletesFieldType;
};

// 🔥 새로 추가
export type validationFieldType = {
  [K in Exclude<cardInformationKey, "company">]: Exclude<useEachValidationType, "isComplete">;
};

export type isCompletesFieldType = {
  [K in Exclude<cardInformationKey, "company">]: Extract<useEachValidationType, "isComplete">;
};
