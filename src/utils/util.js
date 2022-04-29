export const objectToString = ({ targetObject, separator = ' ', hideStartIndex }) => {
  if (hideStartIndex) {
    return Object.values(targetObject)
      .map((value, index) => (index >= hideStartIndex ? '*'.repeat(value.length) : value))
      .join(' ');
  }
  return Object.values(targetObject).join(separator);
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
