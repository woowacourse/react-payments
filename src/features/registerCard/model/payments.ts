import type { Bank } from '@/entities/card/model/bank';

export const FORM_ID = 'payments-form';

export interface FieldControl {
  value: string;
  handleChange: (v: string) => void;
}

export interface FieldData {
  numbers: string;
  month: string;
  year: string;
  bank: Bank | undefined;
  cvc: string;
  password: string;
}
