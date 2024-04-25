import { useState } from 'react';
import { ERROR_MESSAGE } from '../constants/messages';
import { CARD_CVC } from '../constants/conditions';
import Validation from '../utils/Validation';

export default function useChangeCVC() {
  const [CVC, setCVC] = useState('');
  const [CVCValid, setCVCValid] = useState({ isValid: true, isCompleted: false, errorMessage: '' });

  const handleChangeCVC = (value: string) => {
    const isValidCVC = validateCVC(value);
    setCVCValid(isValidCVC);

    setCVC(value);
  };

  return { CVC, CVCValid, handleChangeCVC };
}

function validateCVC(value: string) {
  if (Validation.isNumeric(value) && Validation.hasLength(value, CARD_CVC.MAX_LENGTH)) {
    return { isValid: true, isCompleted: true, errorMessage: '' };
  }
  return { isValid: false, isCompleted: false, errorMessage: ERROR_MESSAGE.INVALID_CVC };
}
