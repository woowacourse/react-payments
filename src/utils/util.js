export const objectToString = (object, separator = ' ', hideStartIndex) => {
  if (hideStartIndex) {
    return Object.values(object)
      .map((value, index) => (index >= hideStartIndex ? '*'.repeat(value.length) : value))
      .join(' ');
  }
  return Object.values(object).join(separator);
};

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
