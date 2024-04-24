import { useState } from 'react';

import { CARD_BRANDS } from '../constants/conditions';
import { ERROR_MESSAGE } from '../constants/messages';
import { cardBrandsType } from '../types/cardBrands';

export default function useChangeBrand() {
  const [brand, setBrand] = useState<cardBrandsType>('');
  const [brandValid, setBrandValid] = useState({ isValid: true, errorMessage: '' });

  const handleChangeBrand = (value: string) => {
    const isValidBrand = validateCardBrand(value);
    setBrandValid(isValidBrand);

    if (!isValidBrand.isValid && value !== '') return;

    setBrand(value as cardBrandsType);
  };

  return { brand, brandValid, handleChangeBrand };
}

function validateCardBrand(value: string) {
  const cardBrands = Object.values(CARD_BRANDS);
  if (!cardBrands.includes(value as (typeof cardBrands)[number])) {
    return {
      isValid: false,
      errorMessage: ERROR_MESSAGE.INVALID_CARD_BRAND,
    };
  }

  return { isValid: true, errorMessage: '' };
}
