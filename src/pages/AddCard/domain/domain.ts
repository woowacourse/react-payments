import { InputStatus } from '../../../type';

export const calcMultipleStatus = (arr: InputStatus[]): InputStatus => {
  if (arr.includes('INVALID')) return 'INVALID';
  if (arr.filter((element) => element === 'VALID').length === arr.length) return 'VALID';
  return 'INIT';
};

// TODO: 구체화 하기
export const getErrorMessage = (inputType: string, status: InputStatus) => {
  return status === 'INVALID' ? '잘못된 입력입니다.' : '';
};
