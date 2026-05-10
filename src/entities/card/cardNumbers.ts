import { isNumericString } from '@/core/utils/validator';
import { RULES, type Brand } from './brand';
const ERROR_MESSAGE = {
  TYPE: '숫자만 입력 가능합니다.',
  LENGTH: '카드 번호를 전부 채워주세요.',
};

export const validateFullCareNumber = ({
  cardNumber,
  brand,
}: {
  cardNumber: string;
  brand: Brand;
}): string | undefined => {
  if (!isNumericString(cardNumber)) return ERROR_MESSAGE.TYPE;
  if (cardNumber.length !== RULES[brand].length) return ERROR_MESSAGE.LENGTH;
  return;
};

export const isValidFormatCardNumber = (cardNumber: string): boolean => {
  if (cardNumber !== '' && !isNumericString(cardNumber)) return false;
  return true;
};
