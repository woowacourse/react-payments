export const addError = <T extends string, U extends string>(
  prev: Record<T, U[]>,
  inputName: T,
  errorType: U
) => ({
  ...prev,
  [inputName]: [...prev[inputName], errorType],
});

export const removeError = <T extends string, U extends string>(
  prev: Record<T, U[]>,
  inputName: T,
  errorType: U
) => ({
  ...prev,
  [inputName]: prev[inputName].filter((e) => e !== errorType),
});
