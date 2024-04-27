import { CardCompany } from "../constants/card-app";

export interface CardInfo {
  cardNumbers: string[];
  expirationDate: string[];
  cardOwner: string;
}

interface FormFieldState<T, E> {
  value: T;
  errorState: E;
  displayed: boolean;
}

export type CardFormField =
  | "cardNumbers"
  | "cardCompany"
  | "expirationDate"
  | "ownerName"
  | "cvcNumber"
  | "cardPassword";

export type CardNumberKeys = "first" | "second" | "third" | "fourth";

export type CardCompanyKeys = "cardCompany";

export type ExpirationDateKeys = "mm" | "yy";

export type CardOwnerKeys = "ownerName";

export type CVCNumberKeys = "cvcNumber";

export type CardPasswordKeys = "cardPassword";

type CardNumberState = FormFieldState<
  Record<CardNumberKeys, string>,
  Record<CardNumberKeys, boolean>
>;

type CardCompanyState = FormFieldState<
  Record<CardCompanyKeys, CardCompany>,
  Record<CardCompanyKeys, boolean>
>;

type ExpirationDateState = FormFieldState<
  Record<ExpirationDateKeys, string>,
  Record<ExpirationDateKeys, boolean>
>;

type OwnerNameState = FormFieldState<
  Record<CardOwnerKeys, string>,
  Record<CardOwnerKeys, boolean>
>;

type CVCNumberState = FormFieldState<
  Record<CVCNumberKeys, string>,
  Record<CVCNumberKeys, boolean>
>;

type CardPasswordState = FormFieldState<
  Record<CardPasswordKeys, string>,
  Record<CardPasswordKeys, boolean>
>;

export interface CardAddFormState {
  cardNumbers: CardNumberState;
  cardCompany: CardCompanyState;
  expirationDate: ExpirationDateState;
  ownerName: OwnerNameState;
  cvcNumber: CVCNumberState;
  cardPassword: CardPasswordState;
}

export type FormAction =
  | { type: "SET_CARD_NUMBERS"; subfield: string; value: string }
  | { type: "SET_CARD_COMPANY"; value: CardCompany }
  | {
      type: "SET_EXPIRATION_DATE";
      subfield: string;
      value: string;
    }
  | { type: "SET_OWNER_NAME"; value: string }
  | { type: "SET_CVC_NUMBER"; value: string }
  | { type: "SET_PASSWORD"; value: string }
  | {
      type: "SET_ERROR";
      field: keyof CardAddFormState;
      subField: string;
      isValid: boolean;
    }
  | {
      type: "SET_DISPLAY";
      field: keyof CardAddFormState;
    }
  | {
      type: "RESET";
    };
