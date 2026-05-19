import { BANK_RULES, type Bank } from '@/entities/card/model/bank';
import type { RegisterCardRequest } from '@/entities/card/model/card';
import type { ExpiryDate } from '@/entities/card/model/expiryDate';
import type { RegisterCardErrorCode } from '@/entities/card/model/card';

export const FORM_ID = 'payments-form';

export interface CardInfo {
  numbers: string[];
  expiryDate: ExpiryDate;
  cvc: string;
  password: string;
  bank: Bank | undefined;
}

export interface FieldData {
  numbers: string;
  expiryDate: ExpiryDate;
  bank: Bank | undefined;
  cvc: string;
  password: string;
}

export type ServerError = {
  field: ServerErrorField;
  message: string;
} | null;

export type FieldServerError = {
  message: string;
  onClear: () => void;
};

export type ServerErrorField = 'numbers' | 'expiryDate' | 'cvc';
export type ServerFieldErrors = Partial<Record<ServerErrorField, string>>;
export const SERVER_ERROR_FIELD_MAP: Record<RegisterCardErrorCode, ServerErrorField> = {
  INVALID_CARD_NUMBER: 'numbers',
  INVALID_EXPIRATION_DATE: 'expiryDate',
  INVALID_CVC: 'cvc',
};

export const toRequestData = (cardInfo: CardInfo): RegisterCardRequest => {
  if (cardInfo.bank === undefined) {
    throw new Error('카드사를 선택해 주세요.');
  }

  return {
    number: cardInfo.numbers.join(''),
    expirationDate: `${cardInfo.expiryDate.month}/${cardInfo.expiryDate.year}`,
    cvc: cardInfo.cvc,
    issuerCode: BANK_RULES[cardInfo.bank].code,
  };
};
