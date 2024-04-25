export const isCompletedInputOwnerName = (
  ownerName: string,
  ownerNameError: { isError: boolean; errorMessage: string },
) => {
  return ownerName.length > 1 && !ownerNameError.isError;
};
