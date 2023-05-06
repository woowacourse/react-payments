import { CardRegisterInfo } from '../../types/card.type';

export type CardRegisterAction = Values<Spread<ActionType>>;

type Values<T extends object> = T[keyof T];
type Spread<T extends ActionType> = {
  [K in T]: { type: K; payload: ActionPayload<K> };
};

export const UPDATE_CARD_NUMBER = 'UPDATE_CARD_NUMBER';
export const UPDATE_EXPIRATION_DATE = 'UPDATE_EXPIRATION_DATE';
export const UPDATE_HOLDER_NAME = 'UPDATE_HOLDER_NAME';
export const UPDATE_CVC = 'UPDATE_CVC';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';
export const UPDATE_BANK = 'UPDATE_BANK';
export const UPDATE_ALIAS = 'UPDATE_ALIAS';

export type ActionType =
  | typeof UPDATE_CARD_NUMBER
  | typeof UPDATE_EXPIRATION_DATE
  | typeof UPDATE_HOLDER_NAME
  | typeof UPDATE_CVC
  | typeof UPDATE_PASSWORD
  | typeof UPDATE_BANK
  | typeof UPDATE_ALIAS;

export type ActionPayload<T extends ActionType> = T extends typeof UPDATE_CARD_NUMBER
  ? { field: keyof CardRegisterInfo['cardNumber']; value: string }
  : T extends typeof UPDATE_EXPIRATION_DATE
  ? { field: keyof CardRegisterInfo['expirationDate']; value: string }
  : T extends typeof UPDATE_HOLDER_NAME
  ? { value: string }
  : T extends typeof UPDATE_CVC
  ? { value: string }
  : T extends typeof UPDATE_PASSWORD
  ? { field: keyof CardRegisterInfo['password']; value: string }
  : T extends typeof UPDATE_BANK
  ? { value: Record<string, unknown> }
  : T extends typeof UPDATE_ALIAS
  ? { value: string }
  : never;

export function createCardRegisterAction<T extends ActionType>(type: T, payload: ActionPayload<T>) {
  return { type, payload };
}
