import { ERROR_TYPE_TO_MESSAGE, ErrorType } from '../config/error';

export const getFirstErrorMessage = (errorTypes?: ErrorType[]) => {
  if (!errorTypes || errorTypes.length === 0) return '';

  const firstErrorType = errorTypes[0];
  return ERROR_TYPE_TO_MESSAGE[firstErrorType];
};
