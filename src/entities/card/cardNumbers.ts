import { isNumericString } from '@/core/utils/validator';

import type { Brand } from '@/entities/card/brand';
import { CARD_BRAND_FORMAT } from './brand';

const ERROR_MESSAGE = {
  TYPE: '숫자만 입력 가능합니다.',
  LENGTH: '카드 번호를 전부 채워주세요.',
};

export const validateCardNumber = ({
  cardNumber,
  index,
  brand,
}: {
  cardNumber: string;
  index: number;
  brand: Brand;
}): string | undefined => {
  if (!isNumericString(cardNumber)) return ERROR_MESSAGE.TYPE;
  if (cardNumber.length !== CARD_BRAND_FORMAT[brand][index]) return ERROR_MESSAGE.LENGTH;
  return;
};

export const validateCardNumberFormat = (cardNumber: string): string | undefined => {
  if (cardNumber !== '' && !isNumericString(cardNumber)) return ERROR_MESSAGE.TYPE;
  return;
};
