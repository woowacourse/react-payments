import { Dispatch } from "react";

export type CardStateType = {
  cardState: CardInformationType;
  dispatch: Dispatch<Action>;
  errorState: boolean[];
  dispatchError: Dispatch<ErrorAction>;
};

export type CvcNumberStateType = {
  cvcNumberState: string[];
  dispatch: Dispatch<Action>;
  openNextForm: (currentForm: string) => void;
  errorState: boolean[];
  dispatchError: Dispatch<ErrorAction>;
};

export type ExpirationDateStateType = {
  expirationDateState: string[];
  dispatch: Dispatch<Action>;
  openNextForm: (currentForm: string) => void;
  errorState: boolean[];
  dispatchError: Dispatch<ErrorAction>;
};

export type UniqueNumberStateType = {
  uniqueNumberState: string[];
  dispatch: Dispatch<Action>;
  openNextForm: (currentForm: string) => void;
  errorState: boolean[];
  dispatchError: Dispatch<ErrorAction>;
};

export type PasswordStateType = {
  passwordState: string[];
  dispatch: Dispatch<Action>;
  errorState: boolean[];
  dispatchError: Dispatch<ErrorAction>;
};

export type CardIssuerStateType = {
  cardIssuerState: (string | null)[];
  dispatch: Dispatch<Action>;
  openNextForm: (currentForm: string) => void;
};

export type Action =
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

export type ErrorAction =
  | { type: "SET_UNIQUE_NUMBER_ERROR"; index: number; value: boolean }
  | { type: "SET_EXPIRATION_DATE_ERROR"; index: number; value: boolean }
  | { type: "SET_CVC_NUMBER_ERROR"; value: boolean }
  | { type: "SET_PASSWORD_ERROR"; value: boolean };

export type CardErrorType = {
  uniqueNumber: boolean[];
  expirationDate: boolean[];
  cvcNumber: boolean[];
  password: boolean[];
};

export type CardType = "visa" | "master" | "none";
