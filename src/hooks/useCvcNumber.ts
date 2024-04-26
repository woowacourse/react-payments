import { MAX_LENGTH } from '../constants/rules';
import validate from '../utils/validate';
import useInput from './useInput';
import { ValidationType } from './useValidations';

const inputLimitValidation: ValidationType = {
  isError: (state: string) => state !== '' && !validate.isValidDigit(state),
  errorMessage: '문자 입력은 불가능합니다.',
};

const validations: ValidationType[] = [
  {
    isError: (state: string) => !validate.isSatisfiedLength(MAX_LENGTH.cvcNumber, state.length),
    errorMessage: `${MAX_LENGTH.cvcNumber}자리 숫자를 입력해주세요.`,
  },
];

const useCvcNumber = () => {
  const cvc = useInput<HTMLInputElement>(inputLimitValidation, validations);

  return cvc;
};

export default useCvcNumber;
