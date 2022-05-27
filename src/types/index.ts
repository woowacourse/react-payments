export interface Validator {
  (value: string);
}

export type Month =
  | "01"
  | "02"
  | "03"
  | "04"
  | "05"
  | "06"
  | "07"
  | "08"
  | "09"
  | "10"
  | "11"
  | "12"
  | "";

export type CardInfoActionType =
  | "UPDATE_COMPANY"
  | "UPDATE_NUMBERS"
  | "UPDATE_DATE"
  | "UPDATE_OWNER"
  | "UPDATE_CARD_CODE"
  | "UPDATE_PWD"
  | "RESET_CARD_INFO";

export type Reducer<State, Action> = (
  prevState: State,
  action: Action
) => State;

export interface CardCompany {
  name: string;
  hexColor: string;
}

export interface CardNumbers {
  cardNoA: string;
  cardNoB: string;
  cardNoC: string;
  cardNoD: string;
}

export interface CardDate {
  month: Month;
  year: string;
}

export interface Owner {
  name: string;
}

export interface CardCode {
  cvc: string;
}

export interface Password {
  pwdNoA: string;
  pwdNoB: string;
}

export interface CardInfoState {
  cardCompany: CardCompany;
  cardNumbers: CardNumbers;
  cardDate: CardDate;
  owner: Owner;
  cardCode: CardCode;
  pwd: Password;
}
