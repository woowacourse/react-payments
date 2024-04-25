import { useState } from 'react';
import { ERROR_MESSAGE } from '../constants/messages';
import { CARD_CVC } from '../constants/conditions';
import Validation from '../utils/Validation';

export default function useChangeCVC() {
  const [CVC, setCVC] = useState('');
  const [CVCValid, setCVCValid] = useState({ isValid: true, errorMessage: '' });

  const handleChangeCVC = (value: string) => {
    const isValidCVC = validateCVC(value);
    setCVCValid(isValidCVC);

    if (!isValidCVC.isValid && value !== '') return;

    setCVC(value);
  };

  return { CVC, CVCValid, handleChangeCVC };
}

function validateCVC(value: string) {
  if (Validation.isNumeric(value) && Validation.hasLength(value, CARD_CVC.MAX_LENGTH)) {
    return { isValid: true, errorMessage: '' };
  }
  return { isValid: false, errorMessage: ERROR_MESSAGE.INVALID_CVC };
}
