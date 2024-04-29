import { ERROR_MESSAGE } from '../constants/messages';
import { CARD_PIN } from '../constants/conditions';
import Validation from '../utils/Validation';

import useChangeInput from './useChangeInput';

export default function useChangePIN() {
  const { value: PIN, validationResult: PINValid, handleChange: handleChangePIN } = useChangeInput('', validatePIN);

  return { PIN, PINValid, handleChangePIN };
}

function validatePIN(value: string) {
  if (Validation.isNumeric(value) && Validation.hasLength(value, CARD_PIN.MAX_LENGTH)) {
    return { isValid: true, isCompleted: true, errorMessage: '' };
  }
  return { isValid: false, isCompleted: false, errorMessage: ERROR_MESSAGE.INVALID_PIN };
}
