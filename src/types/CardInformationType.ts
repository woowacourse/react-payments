import { CompanyType } from ".";

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
