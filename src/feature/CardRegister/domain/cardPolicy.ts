import type {CardNumbersType} from '../../../common/types/CardInfoType';

export const MASK_FROM_INDEX = 2;

export const maskCardNumbers = (chunks: CardNumbersType) =>
  chunks.map((chunk, i) => (i >= MASK_FROM_INDEX ? '·'.repeat(chunk.length) : chunk));

export const getBrandName = (cardNumbers: CardNumbersType): 'visa' | 'masterCard' | null => {
  const fullNumber = cardNumbers.map((chunk) => chunk.padEnd(4, '#')).join('');

  if (fullNumber.startsWith('4')) return 'visa';

  const prefix = Number(fullNumber.slice(0, 2));
  if (prefix >= 51 && prefix <= 55) return 'masterCard';

  return null;
};
