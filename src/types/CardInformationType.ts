import { CompanyType } from ".";

export type CardInformationType = {
  uniqueNumber: [string, string, string, string];
  expirationDate: [string, string];
  cvcNumber: [string];
  password: [string];
  company: CompanyType;
};

export type setCardInformationType = React.Dispatch<React.SetStateAction<CardInformationType>>;

export type CardType = "visa" | "master" | "none";
