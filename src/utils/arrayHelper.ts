export const makeStringArray = (count: number) => {
  return Array.from({ length: count }, () => "");
};

export const updatedErrorMessage = (
  errorMessage: string,
  messages: string[],
  index: number
) => {
  return [
    ...messages.slice(0, index),
    errorMessage,
    ...messages.slice(index + 1),
  ];
};
