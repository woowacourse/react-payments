import { useState } from 'react';

const SERVER_ERROR_FIELD_MAP = {
  INVALID_CARD_NUMBER: 'cardNumber',
  INVALID_EXPIRATION_DATE: 'expirationDate',
  INVALID_CVC: 'cvc',
} as const;

export type ServerFieldErrors = {
  cardNumber?: string;
  expirationDate?: string;
  cvc?: string;
  form?: string;
};

export type ServerErrorCode = keyof typeof SERVER_ERROR_FIELD_MAP;

export const useRegisterServerError = () => {
  const [serverFieldErrors, setServerFieldErrors] = useState<ServerFieldErrors>(
    {},
  );

  const resetServerFieldErrors = () => {
    setServerFieldErrors({});
  };

  const clearServerFieldError = (fieldName: keyof ServerFieldErrors) => {
    setServerFieldErrors((prev) => ({
      ...prev,
      [fieldName]: undefined,
    }));
  };

  const setServerFieldError = (code: ServerErrorCode, message: string) => {
    setServerFieldErrors({
      [SERVER_ERROR_FIELD_MAP[code]]: message,
    });
  };

  const setFormServerError = (message: string) => {
    setServerFieldErrors({
      form: message,
    });
  };
  return {
    serverFieldErrors,
    resetServerFieldErrors,
    clearServerFieldError,
    setServerFieldError,
    setFormServerError,
  };
};
