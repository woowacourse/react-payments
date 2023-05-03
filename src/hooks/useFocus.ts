import { useRef } from "react";
import useModal from "./useModal";

export const useFocus = () => {
  const input = useRef<HTMLInputElement>(null);
  const currentInput = input.current;

  const isNeededFocus = currentInput !== null && !currentInput.value.length;

  if (!useModal().isModalOpen && isNeededFocus) currentInput.focus();

  return input;
};
