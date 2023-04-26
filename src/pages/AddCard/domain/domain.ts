import { InputStatus } from '../../../type';
import { INVALID_MESSAGE } from '../../../utils/constants';

export const calcMultipleStatus = (arr: InputStatus[]): InputStatus => {
  if (arr.includes('INVALID')) return 'INVALID';
  if (arr.filter((element) => element === 'VALID').length === arr.length) return 'VALID';
  return 'INIT';
};

export const getErrorMessage = (inputType: string, status: InputStatus) => {
  return INVALID_MESSAGE[inputType][status];
};
