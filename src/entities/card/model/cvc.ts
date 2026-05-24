export const CVC_LENGTH = 3;

export const validateCvc = (cvc: string): boolean => {
  return cvc.length === CVC_LENGTH;
};
