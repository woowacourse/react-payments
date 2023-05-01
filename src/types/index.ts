import type { CARD_ISSUERS } from "../constants";

interface SupportingTextMessage {
  default?: string;
  error?: string;
}

type Issuer = (typeof CARD_ISSUERS)[number];

interface ExpirationDate {
  month: string;
  year: string;
}

interface Card {
  id: number;
  cardName: string;
  issuer: Issuer | "";
  cardNumber: string;
  expirationDate: ExpirationDate;
  ownerName: string;
  securityCode: string;
  password: string[];
}

type CardFormData = Omit<Card, "id" | "cardName">;

type CardDisplayInformation = Pick<
  Card,
  "issuer" | "cardNumber" | "expirationDate" | "ownerName"
>;

type CardFormValidation = {
  [K in keyof CardFormData]: boolean;
};

type MultipleInputFieldCardInformation = "password";

type ValidatorArgs = {
  issuer: string;
  cardNumber: string;
  expirationDate: ExpirationDate;
  ownerName: string;
  securityCode: string;
  password: string[];
};

type Validator = {
  [K in keyof CardFormData]: (value: ValidatorArgs[K]) => boolean;
};

export type {
  SupportingTextMessage,
  Issuer,
  ExpirationDate,
  Card,
  CardFormData,
  CardDisplayInformation,
  CardFormValidation,
  MultipleInputFieldCardInformation,
  ValidatorArgs,
  Validator,
};
