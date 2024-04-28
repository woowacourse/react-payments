export const isCompletedInputOwnerName = (ownerNameError: { isError: boolean; errorMessage: string }) => {
  return !ownerNameError.isError;
};
