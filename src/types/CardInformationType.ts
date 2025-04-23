import { Dispatch } from "react";

export type CardStateType = {
  cardState: CardInformationType;
  dispatch: Dispatch<Action>;
};

export type CvcNumberStateType = {
  cvcNumberState: string[];
  dispatch: Dispatch<Action>;
};

export type ExpirationDateStateType = {
  expirationDateState: string[];
  dispatch: Dispatch<Action>;
};

export type UniqueNumberStateType = {
  uniqueNumberState: string[];
  dispatch: Dispatch<Action>;
};

type Action =
  | { type: "SET_UNIQUE_NUMBER"; index: number; value: string }
  | { type: "SET_EXPIRATION_DATE"; index: number; value: string }
  | { type: "SET_CVC_NUMBER"; value: string };

export type CardInformationType = {
  uniqueNumber: string[];
  expirationDate: string[];
  cvcNumber: string[];
};

export type CardType = "visa" | "master" | "none";
