import { CARD_BRANDS } from '../constant/cardBrands';
import { getCardBrandName } from './cardDisplay';

export const getCardNumberSegmentLengths = (cardNumbers: string[]) => {
  const segmentLengths = CARD_BRANDS.find(
    (brand) => brand.name === getCardBrandName(cardNumbers),
  )?.segmentLengths;

  return segmentLengths ?? [4, 4, 4, 4];
};
