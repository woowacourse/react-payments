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
export type CvcNumberType = [string];
export type PasswordType = [string];

export type setCardInformationType = {
  uniqueNumber: React.Dispatch<React.SetStateAction<UniqueNumberType>>;
  expirationDate: React.Dispatch<React.SetStateAction<ExpirationDateType>>;
  cvcNumber: React.Dispatch<React.SetStateAction<CvcNumberType>>;
  password: React.Dispatch<React.SetStateAction<PasswordType>>;
  company: React.Dispatch<React.SetStateAction<CompanyType>>;
};
export type CardType = "visa" | "master" | "none";

export type isStateCompletesType = Record<keyof CardInformationType, boolean>;
