const isValidCardPassword = (cardPassword: string) => cardPassword.length === 2;

export const isCompletedInputCardPassword = (
  cardPassword: string,
  cardPasswordError: { isError: boolean; errorMessage: string },
) => {
  return isValidCardPassword(cardPassword) && !cardPasswordError.isError;
};
