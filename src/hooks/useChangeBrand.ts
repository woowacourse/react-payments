import { useState } from 'react';

import { CARD_BRANDS } from '../constants/conditions';
import { ERROR_MESSAGE } from '../constants/messages';
import { cardBrandsType } from '../types/cardBrands';

export default function useChangeBrand() {
  const [brand, setBrand] = useState<cardBrandsType>('');
  const [brandValid, setBrandValid] = useState({ isValid: true, isCompleted: false, errorMessage: '' });

  const handleChangeBrand = (value: string) => {
    const isValidBrand = validateCardBrand(value);
    setBrandValid(isValidBrand);

    if (!isValidBrand.isValid && value !== '') return;

    setBrand(value as cardBrandsType);
  };

  return { brand, brandValid, handleChangeBrand };
}

function validateCardBrand(value: string) {
  const cardBrands = Object.keys(CARD_BRANDS);
  if (!cardBrands.includes(value)) {
    return {
      isValid: false,
      isCompleted: false,
      errorMessage: ERROR_MESSAGE.INVALID_CARD_BRAND,
    };
  }

  return { isValid: true, isCompleted: true, errorMessage: '' };
}
