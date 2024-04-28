import { CVC_NUMBER_COUNT } from '@constants/cvcNumber';

export const isValidCVCNumber = (cvcNumber: string) => cvcNumber.length === CVC_NUMBER_COUNT;

export const isCompletedInputCVCNumber = (cvcNumber: string, cvcError: { isError: boolean; errorMessage: string }) => {
  return isValidCVCNumber(cvcNumber) && !cvcError.isError;
};
