import { useState } from 'react';
import { SERVER_ERROR_FIELD_MAP, type ServerFieldErrors } from '../types/error';
import type { CardRegisterServerErrorCode } from '../../../api/card/error';
import type { NetworkError } from '../../../api/error';

export const useRegisterServerError = () => {
  const [serverFieldErrors, setServerFieldErrors] = useState<ServerFieldErrors>(
    {},
  );
  const [networkError, setNetworkError] = useState<NetworkError | null>(null);

  const resetServerFieldErrors = () => {
    setServerFieldErrors({});
    setNetworkError(null);
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
    setNetworkError(null);
    setServerFieldErrors({
      [SERVER_ERROR_FIELD_MAP[code]]: message,
    });
  };

  const setFormServerError = (error: NetworkError) => {
    setServerFieldErrors({});
    setNetworkError(error);
  };
  return {
    serverFieldErrors,
    networkError,
    resetServerFieldErrors,
    clearServerFieldError,
    setServerFieldError,
    setFormServerError,
  };
};
