import { isNumericString } from '@/core/utils/validator';

export const CVC_LENGTH = 3;

const ERROR_MESSAGE = {
  TYPE: '숫자만 입력 가능합니다.',
  RANGE: 'CVC를 전부 채워주세요.',
};

export const validateCvcFormat = (cvc: string): string | undefined => {
  if (cvc !== '' && !isNumericString(cvc)) return ERROR_MESSAGE.TYPE;
  return;
};

export const validateCvc = (cvc: string): string | undefined => {
  if (cvc.length !== CVC_LENGTH) return ERROR_MESSAGE.RANGE;
  return;
};
