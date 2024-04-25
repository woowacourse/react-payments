const isValidCVCNumber = (cvcNumber: string) => cvcNumber.length === 3;

export const isCompletedInputCVCNumber = (cvcNumber: string, cvcError: { isError: boolean; errorMessage: string }) => {
  return isValidCVCNumber(cvcNumber) && !cvcError.isError;
};
