import { CardCompany } from "../constants/card-app";

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

type CardCompanyState = FormFieldState<CardCompany, boolean>;

type ExpirationDateState = FormFieldState<
  Record<ExpirationDateKeys, string>,
  Record<ExpirationDateKeys, boolean>
>;

type OwnerNameState = FormFieldState<
  Record<CardOwnerKeys, string>,
  Record<CardOwnerKeys, boolean>
>;

type CVCNumberState = FormFieldState<string, boolean>;

type CardPasswordState = FormFieldState<string, boolean>;

export interface CardAddFormState {
  cardNumbers: CardNumberState;
  cardCompany: CardCompanyState;
  expirationDate: ExpirationDateState;
  ownerName: OwnerNameState;
  cvcNumber: CVCNumberState;
  cardPassword: CardPasswordState;
}
