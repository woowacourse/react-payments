import { useState } from 'react';

import { CARD_BRANDS } from '../constants/conditions';
import { ERROR_MESSAGE } from '../constants/messages';
import { CardBrandsType } from '../types/CardBrandsType';

export default function useChangeBrand() {
  const [brand, setBrand] = useState<CardBrandsType>('');
  const [brandValid, setBrandValid] = useState({ isValid: true, isCompleted: false, errorMessage: '' });

  const handleChangeBrand = (value: string) => {
    const isValidBrand = validateCardBrand(value);
    setBrandValid(isValidBrand);

    if (!isValidBrand.isValid && value !== '') return;

    setBrand(value as CardBrandsType);
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
