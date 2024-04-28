import { useRef } from "react";

const useInputRefs = (
  count: number,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
) => {
  const inputRefs = useRef<(HTMLInputElement | null)[]>(new Array(count));

  const onFocusNextInput = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    if (index === 0) {
      inputRefs.current[0]?.focus();
    }

    if (e.target.value.length === e.target.maxLength) {
      onChange(e);
      const nextIndex = index + 1;
      if (nextIndex < count) {
        inputRefs.current[nextIndex]?.focus();
      }
    } else {
      onChange(e);
    }
  };

  return { onFocusNextInput, inputRefs };
};

export default useInputRefs;
