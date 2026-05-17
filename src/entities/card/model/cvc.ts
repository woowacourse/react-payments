export const CVC_LENGTH = 3;

export const ERROR_MESSAGE = {
  TYPE: '숫자만 입력 가능합니다.',
  RANGE: 'CVC를 전부 채워주세요.',
};

export const getErrorCvc = (cvc: string): string | undefined => {
  if (cvc.length !== CVC_LENGTH) return ERROR_MESSAGE.RANGE;
  return;
};
export const validateCvc = (cvc: string): boolean => {
  return getErrorCvc(cvc) === undefined;
};
