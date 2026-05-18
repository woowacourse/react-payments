import { useState } from 'react';
import { addCard } from '../api/cards';
import { COMPANY_TO_ISSUER_CODE } from '../constants';
import type { AddCardFormFieldKey, FormValue } from './useAddCardForm';

type ServerValidationError = {
  field: AddCardFormFieldKey;
  message: string;
} | null;

type ApiError = {
  code: string;
  message: string;
};

export type AddCardResult =
  | { status: 'success' }
  | { status: 'validationError'; field: AddCardFormFieldKey }
  | { status: 'error' };

const API_ERROR_FIELD_MAP: Partial<Record<string, AddCardFormFieldKey>> = {
  INVALID_CARD_NUMBER: 'cardNumbers',
  INVALID_CVC: 'cvc',
  INVALID_EXPIRATION_DATE: 'expirationPeriod',
};

const toRequestBody = (formValue: FormValue) => ({
  number: formValue.cardNumbers.value.join(''),
  expirationDate: formValue.expirationPeriod.value.join('/'),
  cvc: formValue.cvc.value,
  issuerCode: COMPANY_TO_ISSUER_CODE[formValue.cardCompany.value] ?? '',
});

export default function useAddCard(formValue: FormValue) {
  const [serverValidationError, setServerValidationError] = useState<ServerValidationError>(null);

  const requestAddCard = async (): Promise<AddCardResult> => {
    try {
      await addCard(toRequestBody(formValue));
      return { status: 'success' };
    } catch (error) {
      const { code, message } = error as ApiError;
      const field = API_ERROR_FIELD_MAP[code];
      if (field) {
        setServerValidationError({ field, message });
        return { status: 'validationError', field };
      }
      return { status: 'error' };
    }
  };

  const clearServerValidationError = () => setServerValidationError(null);

  return { requestAddCard, serverValidationError, clearServerValidationError };
}
