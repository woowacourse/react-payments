import { useEffect, useRef } from "react";
import useModal from "woowahan-yummy-modal/dist/useModal";

export const useFocus = () => {
  const input = useRef<HTMLInputElement>(null);
  const currentInput = input.current;

  const { isModalOpen } = useModal();
  const isNeededFocus = currentInput !== null && !currentInput.value.length;

  useEffect(() => {
    if (!isModalOpen && isNeededFocus) currentInput.focus();
  }, [isModalOpen]);

  return input;
};
