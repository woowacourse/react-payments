import { BRAND_RULES, type Brand } from '../model/brand';
import { getBrandByNumber } from '../model/numbers';

export const updateNumbers = (
  cardNumbers: string[],
  inputValue: string,
  index: number,
  brand: Brand,
) => {
  const next = [...cardNumbers];
  next[index] = inputValue;
  const nextBrand = getBrandByNumber(next);
  if (nextBrand !== brand) next[3] = next[3].slice(0, BRAND_RULES[nextBrand].format[3]);
  return next;
};
