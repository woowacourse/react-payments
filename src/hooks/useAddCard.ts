import { useState } from 'react';
import { addCard, ApiError } from '../api/cards';
import { COMPANY_TO_ISSUER_CODE } from '../constants';
import type { AddCardFormFieldKey, FormValue } from './useAddCardForm';
import type { CardCompany } from '../types';

type ServerValidationError = {
  field: AddCardFormFieldKey;
  message: string;
} | null;

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
  issuerCode: (COMPANY_TO_ISSUER_CODE as Record<CardCompany | '', string>)[formValue.cardCompany.value] ?? '',
});

export default function useAddCard(formValue: FormValue) {
  const [serverValidationError, setServerValidationError] = useState<ServerValidationError>(null);

  const clearServerValidationError = () => setServerValidationError(null);

  const requestAddCard = async (): Promise<AddCardResult> => {
    clearServerValidationError();
    try {
      await addCard(toRequestBody(formValue));
      return { status: 'success' };
    } catch (error) {
      if (!(error instanceof ApiError)) return { status: 'error' };

      const field = API_ERROR_FIELD_MAP[error.code];
      if (field) {
        setServerValidationError({ field, message: error.message });
        return { status: 'validationError', field };
      }

      return { status: 'error' };
    }
  };

  return { requestAddCard, serverValidationError, clearServerValidationError };
}
