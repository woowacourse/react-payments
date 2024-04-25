import { CARD_BRAND } from '../constants/cardInfo';

type Brand = 'visa' | 'master';

export const getCardBrand = (cardNumbers: string[]): Nullable<Brand> => {
  const { visa, master } = CARD_BRAND;

  const visaPrefix = Number(cardNumbers[0].slice(0, 1));
  const masterPrefix = Number(cardNumbers[0].slice(0, 2));

  if (visaPrefix === visa.startNumber) return 'visa';

  if (masterPrefix >= master.startNumber && masterPrefix <= master.endNumber)
    return 'master';

  return null;
};
