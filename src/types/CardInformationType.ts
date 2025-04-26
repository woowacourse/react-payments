import { Dispatch } from "react";

export type CardStateType = {
  cardState: CardInformationType;
  dispatch: Dispatch<Action>;
};

export type CvcNumberStateType = {
  cvcNumberState: string[];
  dispatch: Dispatch<Action>;
  openNextForm: (currentForm: string) => void;
};

export type ExpirationDateStateType = {
  expirationDateState: string[];
  dispatch: Dispatch<Action>;
  openNextForm: (currentForm: string) => void;
};

export type UniqueNumberStateType = {
  uniqueNumberState: string[];
  dispatch: Dispatch<Action>;
  openNextForm: (currentForm: string) => void;
};

export type PasswordStateType = {
  passwordState: string[];
  dispatch: Dispatch<Action>;
};

export type CardIssuerStateType = {
  cardIssuerState: (string | null)[];
  dispatch: Dispatch<Action>;
  openNextForm: (currentForm: string) => void;
};

type Action =
  | { type: "SET_UNIQUE_NUMBER"; index: number; value: string }
  | { type: "SET_EXPIRATION_DATE"; index: number; value: string }
  | { type: "SET_CVC_NUMBER"; value: string }
  | { type: "SET_PASSWORD"; value: string }
  | { type: "SET_CARD_ISSUER"; value: string };

export type CardInformationType = {
  uniqueNumber: string[];
  expirationDate: string[];
  cvcNumber: string[];
  password: string[];
  cardIssuer: (string | null)[];
};

export type CardType = "visa" | "master" | "none";
