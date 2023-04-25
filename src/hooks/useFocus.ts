import { useRef } from "react";

export const useFocus = () => {
  const input = useRef<HTMLInputElement[]>([]);
  const currentInput = input.current;

  const handleRef = (el: HTMLInputElement | null, index: number) => {
    if (el) currentInput[index] = el;
  };

  const moveFocus = (target: HTMLInputElement, length: number) => {
    const index = currentInput.indexOf(target);
    const nextInput = currentInput[index + 1];

    if (target.value.length === length && nextInput) nextInput.focus();
  };

  return { handleRef, moveFocus };
};
