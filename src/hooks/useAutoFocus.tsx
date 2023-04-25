import { useRef } from "react";

interface Props {
  maxLength: number;
}

function useAutoFocus({ maxLength }: Props) {
  const refs = useRef<HTMLInputElement[]>([]);

  const nextInputFocus = (index = 0) => {
    if (index === refs.current.length - 1) return;

    if (refs.current[index]?.value.length === maxLength) {
      refs.current[index + 1]?.focus();
    }
  };

  return {
    refs,
    nextInputFocus,
  };
}

export default useAutoFocus;
