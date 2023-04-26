export const useFocusChain = (
  inputs: React.RefObject<HTMLInputElement>[],
  fullLength: number
) => {
  const isLastInput = (ind: number) => {
    return ind === inputs.length - 1;
  };

  const isInputFull = (value: string) => {
    return value.length === fullLength;
  };

  const moveFocusToNext = (ind: number, value: string) => {
    if (!isLastInput(ind) && isInputFull(value)) {
      inputs[ind + 1].current?.focus();
    }
  };

  return { moveFocusToNext };
};
