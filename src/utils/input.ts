export const isAllDone = (
  inputData: Record<
    string,
    { value: string; isError: boolean; isDone: boolean }
  >
) => Object.values(inputData).every(({ isDone }) => isDone);
