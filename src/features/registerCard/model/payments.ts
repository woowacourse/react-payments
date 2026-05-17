import type { Bank } from '@/entities/card/model/bank';
import type { ExpiryDate } from '@/entities/card/model/expiryDate';

export const FORM_ID = 'payments-form';

export interface FieldData {
  numbers: string;
  expiryDate: ExpiryDate;
  bank: Bank | undefined;
  cvc: string;
  password: string;
}

export const STEP = {
  NUMBERS: 0,
  BANK: 1,
  EXPIRY: 2,
  CVC: 3,
  PASSWORD: 4,
  BUTTON: 5,
} as const;
