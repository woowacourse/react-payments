import { useState } from 'react';
import { ERROR_MESSAGE } from '../constants/messages';
import { CARD_PIN } from '../constants/conditions';
import Validation from '../utils/Validation';

export default function useChangePIN() {
  const [PIN, setPIN] = useState('');
  const [PINValid, setPINValid] = useState({ isValid: true, isCompleted: false, errorMessage: '' });

  const handleChangePIN = (value: string) => {
    const isValidPIN = validatePIN(value);
    setPINValid(isValidPIN);
    setPIN(value);
  };

  return { PIN, PINValid, handleChangePIN };
}

function validatePIN(value: string) {
  if (Validation.isNumeric(value) && Validation.hasLength(value, CARD_PIN.MAX_LENGTH)) {
    return { isValid: true, isCompleted: true, errorMessage: '' };
  }
  return { isValid: false, isCompleted: false, errorMessage: ERROR_MESSAGE.INVALID_PIN };
}
