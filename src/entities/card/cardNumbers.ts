import { isNumericString } from '@/core/utils/validator';

export const CVC_LENGTH = 3;

const ERROR_MESSAGE = {
  type: '숫자만 입력 가능합니다.',
  length: '카드 번호를 전부 채워주세요.',
};

import type { Brand } from '@/entities/card/brand';
import { BRAND_CARD_LENGTH } from './brand';

// 카드번호
export const validateCardNumber = (cardNumber: string, brand: Brand): string | undefined => {
  if (cardNumber.length !== BRAND_CARD_LENGTH[brand]) return ERROR_MESSAGE.length;
  if (!isNumericString(cardNumber)) return ERROR_MESSAGE.type;
  return;
};

export const validateCardNumberFormat = (cardNumber: string): string | undefined => {
  if (cardNumber !== '' && !isNumericString(cardNumber)) return ERROR_MESSAGE.type;
  return;
};
