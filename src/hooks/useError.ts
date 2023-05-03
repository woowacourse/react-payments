export const useErrorMessage = (
  userInput: string | string[],
  validator: (userInput: string | string[]) => void
) => {
  try {
    validator(userInput);
    return null;
  } catch (error) {
    if (error instanceof Error) return error.message;
    return '';
  }
};
