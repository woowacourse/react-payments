import { ErrorDetail } from '../types/error';
import CONDITION from '../constants/condition';

const validateCardPassword = (password: string): ErrorDetail => {
  const isValidLength =
    password.length === CONDITION.TEXT_LENGTH_MIN ||
    password.length === CONDITION.PASSWORD_LENGTH_MAX;

  if (!isValidLength) {
    return {
      isError: true,
      errorMessage: `비밀번호는 ${CONDITION.PASSWORD_LENGTH_MAX}자리로 입력해주세요`,
    };
  }

  return { isError: false, errorMessage: '' };
};

export default validateCardPassword;
