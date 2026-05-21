import { useState } from 'react';
import { SERVER_ERROR_FIELD_MAP, type ServerFieldErrors } from '../types/error';
import type { CardRegisterServerErrorCode } from '../../../api/card/error';

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

  const setServerFieldError = (
    code: CardRegisterServerErrorCode,
    message: string,
  ) => {
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
