import { EXPIRATION_PERIOD } from '../constants/cardSection';
import validate from '../utils/validate';
import useInput from './useInput';
import { ValidationType } from './useValidations';

const monthChangeValidations: ValidationType[] = [
  {
    isError: (state: string) => state !== '' && !validate.isValidDigit(state),
    errorMessage: EXPIRATION_PERIOD.monthErrorMessage,
  },
];

const monthOnBlurValidations: ValidationType[] = [
  {
    isError: (state: string) => state !== '' && !validate.isSatisfiedLength(2, state.length),
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

const yearChangeValidations: ValidationType[] = [
  {
    isError: (state: string) => state !== '' && !validate.isValidDigit(state),
    errorMessage: EXPIRATION_PERIOD.yearErrorMessage,
  },
];

const yearOnBlurValidations: ValidationType[] = [
  {
    isError: (state: string) => state !== '' && !validate.isSatisfiedLength(2, state.length),
    errorMessage: '2자리 숫자를 입력해주세요.',
  },
];

const useExpirationDate = () => {
  const month = useInput(monthChangeValidations, monthOnBlurValidations);
  const year = useInput(yearChangeValidations, yearOnBlurValidations);

  return { month, year };
};

export default useExpirationDate;
