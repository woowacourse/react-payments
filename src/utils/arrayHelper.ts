export const makeStringArray = (count: number) => {
  return Array.from({ length: count }, () => "");
};

export const updatedErrorMessage = (
  errorMessage: string | null,
  messages: (string | null)[],
  index: number
) => {
  return [
    ...messages.slice(0, index),
    errorMessage,
    ...messages.slice(index + 1),
  ];
};
