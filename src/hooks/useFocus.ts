import { useRef } from "react";

export const useFocus = () => {
  const cardNumberInput = useRef<HTMLInputElement[]>([]);
  const currentInput = cardNumberInput.current;

  const handleRef = (el: HTMLInputElement | null, index: number) => {
    if (el) currentInput[index] = el;
  };

  const moveFocus = (target: HTMLInputElement) => {
    const index = currentInput.indexOf(target);
    const nextInput = currentInput[index + 1];

    if (target.value.length === 4 && nextInput) nextInput.focus();
  };

  return { handleRef, moveFocus };
};
