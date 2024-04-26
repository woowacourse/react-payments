import { EXPIRATION_PERIOD } from '../constants/cardSection';
import { MAX_LENGTH } from '../constants/rules';
import validate from '../utils/validate';
import useInput from './useInput';
import { ValidationType } from './useValidations';

const inputLimitValidation: ValidationType = {
  isError: (state: string) => state !== '' && !validate.isValidDigit(state),
  errorMessage: EXPIRATION_PERIOD.monthErrorMessage,
};

const monthValidations: ValidationType[] = [
  {
    isError: (state: string) => !validate.isSatisfiedLength(2, state.length),
    errorMessage: '2자리 숫자를 입력해주세요.',
  },
  {
    isError: (state: string) =>
      state !== '' &&
      !validate.isNumberInRange({
        min: 1,
        max: 12,
        compareNumber: Number(state),
      }),
    errorMessage: EXPIRATION_PERIOD.monthErrorMessage,
  },
];

const yearValidations: ValidationType[] = [
  {
    isError: (state: string) =>
      !validate.isSatisfiedLength(MAX_LENGTH.expirationDate, state.length),
    errorMessage: `${MAX_LENGTH.expirationDate}자리 숫자를 입력해주세요.`,
  },
  {
    isError: (state: string) => !validate.isOverYear(Number(state)),
    errorMessage: '유효기간이 만료된 카드입니다.',
  },
];

const useExpirationDate = () => {
  const month = useInput<HTMLInputElement>(inputLimitValidation, monthValidations);
  const year = useInput<HTMLInputElement>(inputLimitValidation, yearValidations);

  return { month, year };
};

export default useExpirationDate;
