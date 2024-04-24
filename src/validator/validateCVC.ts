import { ErrorDetail } from '../components/types/error';
import CONDITION from '../constants/condition';

const validateCVC = (cvc: string): ErrorDetail => {
  const isValidLength =
    cvc.length === CONDITION.TEXT_LENGTH_MIN ||
    cvc.length === CONDITION.CVC_LENGTH_MIN ||
    cvc.length === CONDITION.CVC_LENGTH_MAX;

  if (!isValidLength) {
    return { isError: true, errorMessage: 'cvc는 3자리 또는 4자리로 입력해주세요' };
  }

  return { isError: false, errorMessage: '' };
};

export default validateCVC;
