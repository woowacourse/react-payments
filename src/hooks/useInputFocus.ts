const useInputFocus = (refs: React.RefObject<HTMLInputElement>[], inputLength: number) => {
  const isNextInputFocusable = (inputValue: string, inputIndex: number) => {
    return inputValue.length === inputLength && inputIndex < refs.length - 1;
  };

  const focusNextInput = (currentInputIndex: number) => {
    refs[currentInputIndex + 1].current?.focus();
  };

  return { isNextInputFocusable, focusNextInput };
};

export default useInputFocus;
