import { CARD_BRANDS } from '../constants/conditions';
import { ERROR_MESSAGE } from '../constants/messages';
import type { CardBrandsType } from '../types/CardBrandsType';

import useChangeInput from './useChangeInput';

export default function useChangeBrand() {
  const {
    value: brand,
    validationResult: brandValid,
    handleChange: handleChangeBrand,
  } = useChangeInput('', validateCardBrand);

  return { brand: brand as CardBrandsType, brandValid, handleChangeBrand };
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
