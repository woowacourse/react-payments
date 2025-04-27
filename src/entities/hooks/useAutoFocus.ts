import { useEffect, useRef } from "react";

type useAutoFocusType = {
  inputCount: number;
  inputMaxLength: number;
};

export default function useAutoFocus({
  inputCount,
  inputMaxLength,
}: useAutoFocusType) {
  const inputRefs = Array.from({ length: inputCount }, () =>
    useRef<HTMLInputElement>(null)
  );

  useEffect(() => {
    inputRefs[0].current?.focus();
  }, []);

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>,
    index: number
  ) => {
    if (
      event.currentTarget.value.length >= inputMaxLength &&
      index < inputCount - 1
    ) {
      inputRefs[index + 1].current?.focus();
    }
  };

  return { inputRefs, handleKeyDown };
}
