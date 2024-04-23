import { IErrorStatus } from './index.d';

const CVC_LENGTH = 3;

const validateCvc = (value: string): IErrorStatus => {
  const isOnlyNumber = /^\d+$/.test(value);
  if (!isOnlyNumber) {
    return { isError: true, errorMessage: '숫자로만 입력해주세요.' };
  }

  if (value.length !== CVC_LENGTH) {
    return { isError: true, errorMessage: '3자리로 입력해주세요.' };
  }

  return { isError: false, errorMessage: '' };
};

export default validateCvc;
