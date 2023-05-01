import type { MutableRefObject } from "react";

const useFormFocus = (
  inputRefs: MutableRefObject<(HTMLButtonElement | HTMLInputElement)[]>
) => {
  const moveFocus = (index: number, value: string, maxLength?: number) => {
    if (maxLength && value.length !== maxLength) return;
    if (value === "") return;

    inputRefs.current[index].focus();
  };

  return { moveFocus };
};

export { useFormFocus };
