export const findNotCompletedInput = (inputMap, currentInputKey) => {
  const nextInputKey = Object.keys(inputMap).find(
    key => key !== currentInputKey && inputMap[key].isComplete === false,
  );

  return {
    nextInput: inputMap[nextInputKey] ?? {
      element: null,
    },
  };
};
