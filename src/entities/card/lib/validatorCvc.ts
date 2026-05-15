import { CVC_LENGTH, ERROR_MESSAGE } from '../model/cvc';

export const getErrorCvc = (cvc: string): string | undefined => {
  if (cvc.length !== CVC_LENGTH) return ERROR_MESSAGE.RANGE;
  return;
};
export const validateCvc = (cvc: string): boolean => {
  return getErrorCvc(cvc) !== undefined;
};
