import { BRAND_NUMBER } from '../form/constant';

export const getBrandCard = (cardNumbers: string[]) => {
  const brandCard = Object.entries(BRAND_NUMBER).find(([key, brand]) => {
    const { startNumber } = brand;
    if (startNumber.some((brandNumber) => cardNumbers[0].startsWith(brandNumber))) return true;
  });

  return brandCard ? brandCard?.[0] : 'default';
};
