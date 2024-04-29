import { ERROR_MESSAGE } from '../constants/messages';
import { CARD_CVC } from '../constants/conditions';
import Validation from '../utils/Validation';

import useChangeInput from './useChangeInput';

export default function useChangeCVC() {
  const { value: CVC, validationResult: CVCValid, handleChange: handleChangeCVC } = useChangeInput('', validateCVC);

  return { CVC, CVCValid, handleChangeCVC };
}

function validateCVC(value: string) {
  if (Validation.isNumeric(value) && Validation.hasLength(value, CARD_CVC.MAX_LENGTH)) {
    return { isValid: true, isCompleted: true, errorMessage: '' };
  }
  return { isValid: false, isCompleted: false, errorMessage: ERROR_MESSAGE.INVALID_CVC };
}
