import { useState } from 'react';
import { InputValidationResultProps } from '../../../entities/cardInfo/model/cardInfoValidator';
import { ErrorKey, NO_ERROR } from '../../../entities/cardInfo/constants/cardErrorConstants';

interface ErrorHandlerReturn {
  error: InputValidationResultProps;
  getErrorState: () => {
    error: InputValidationResultProps;
    setError: (errorKey: ErrorKey, errorValue: any) => void;
  };
}

export function useErrorHandler(): ErrorHandlerReturn {
  const [error, setErrorState] = useState<InputValidationResultProps>({
    [ErrorKey.CARD_NUMBER]: NO_ERROR,
    [ErrorKey.CARD_COMPANY]: NO_ERROR,
    [ErrorKey.CARD_EXPIRATION_DATE]: NO_ERROR,
    [ErrorKey.CARD_CVC]: NO_ERROR,
    [ErrorKey.CARD_PASSWORD]: NO_ERROR,
  });

  const setError = (errorKey: ErrorKey, errorValue: any) => {
    setErrorState((prev) => ({
      ...prev,
      [errorKey]: errorValue,
    }));
  };

  const getErrorState = () => ({
    error,
    setError,
  });

  return {
    error,
    getErrorState,
  };
}
