import { cardInformationKey, CompanyType, ListErrorType, SingleErrorType } from ".";

export type CardInformationType = {
  uniqueNumber: UniqueNumberType;
  expirationDate: ExpirationDateType;
  cvcNumber: CvcNumberType;
  password: PasswordType;
  company: CompanyType;
};

export type ValidCardTuple = UniqueNumberType | ExpirationDateType | CvcNumberType | PasswordType;

export type UniqueNumberType = [string, string, string, string];
export type ExpirationDateType = [string, string];
export type CvcNumberType = string;
export type PasswordType = string;

export type SetValueFn<T> = (value: T, index?: number) => void;

export type setCardInformationType = {
  uniqueNumber: SetValueFn<UniqueNumberType[number]>;
  expirationDate: SetValueFn<ExpirationDateType[number]>;
  cvcNumber: SetValueFn<CvcNumberType>;
  password: SetValueFn<PasswordType>;
  company: React.Dispatch<React.SetStateAction<CompanyType>>;
};
export type CardType = "visa" | "master" | "none";

export type isStateCompletesType = Record<keyof CardInformationType, boolean>;

export type KeysWithout<T, K extends keyof T> = Exclude<keyof T, K>;

export type UseHookReturn<T extends keyof CardInformationType> = {
  state: CardInformationType[T];
  setState: setCardInformationType[T];
  validateInput?: (value: string, index: number) => void;
  isError?: SingleErrorType | ListErrorType;
  errorMessage?: string;
  isComplete: boolean;
  isErrorComplete?: boolean;
};

export type useEachValidationType = {
  isError: SingleErrorType | ListErrorType;
  errorMessage: string;
  validateInput: (value: string, index?: number) => void;
};

export type ValidationType = {
  [T in KeysWithout<CardInformationType, "company">]: useEachValidationType;
};

export type validationFieldType = {
  [K in Exclude<cardInformationKey, "company">]: Exclude<useEachValidationType, "isComplete">;
};

export type isErrorCompletesType = {
  [K in Exclude<cardInformationKey, "company">]: Extract<useEachValidationType, "isComplete">;
};
