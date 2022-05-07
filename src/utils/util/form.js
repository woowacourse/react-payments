export const findNotCompletedInput = (inputMap, currentInputKey) => {
  const nextInputKey = Object.keys(inputMap).find(
    key => key !== currentInputKey && inputMap[key].isComplete === false,
  );

  return (
    inputMap[nextInputKey] ?? {
      element: null,
    }
  );
};
