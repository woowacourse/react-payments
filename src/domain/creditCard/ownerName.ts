export const isValidOwnerName = (ownerName: string) => ownerName.length > 2;

export const isCompletedInputOwnerName = (
  ownerName: string,
  ownerNameError: { isError: boolean; errorMessage: string },
) => {
  return isValidOwnerName(ownerName) && !ownerNameError.isError;
};
