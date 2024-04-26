import { MAX_LENGTH } from '../constants/rules';
import validate from '../utils/validate';
import useInput from './useInput';
import { ValidationType } from './useValidations';

const inputLimitValidation: ValidationType = {
  isError: (state: string) => state !== '' && !validate.isValidDigit(state),
  errorMessage: '숫자만 입력 가능합니다.',
};

const validations: ValidationType[] = [
  {
    isError: (state: string) => !validate.isSatisfiedLength(MAX_LENGTH.password, state.length),
    errorMessage: `${MAX_LENGTH.password}자리 숫자를 입력해주세요.`,
  },
];

const usePassword = () => {
  const password = useInput<HTMLInputElement>(inputLimitValidation, validations);

  return password;
};

export default usePassword;
