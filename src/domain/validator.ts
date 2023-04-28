import { CardType } from '../types';
import { EXPIRE_DATE_VALID_MESSAGE } from '../constants';

export const validExpireDate = (expireDate: CardType['expireDate']) => {
  if (expireDate.join('') === '') return;

  const [month, year] = expireDate.map(Number);
  const currentYear = new Date().getFullYear() - 2000;

  if (!(month >= 1 && month <= 12)) return EXPIRE_DATE_VALID_MESSAGE.invalidMonth;
  if (!(year >= currentYear && year <= currentYear + 5)) return EXPIRE_DATE_VALID_MESSAGE.invalidYear;
  return '';
};
