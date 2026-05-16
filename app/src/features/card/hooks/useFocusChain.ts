import { useRef } from "react";

export default function useFocusChain(length: number, maxLength: number) {
  const refs = useRef<(HTMLInputElement | null)[]>(Array(length).fill(null));

  const ref = (index: number, node: HTMLInputElement | null) => {
    refs.current[index] = node;
  };

  const changeFocus = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
  ) => {
    if (e.target.value.length === maxLength) {
      refs.current[index + 1]?.focus();
      return;
    }
    if (e.target.value.length === 0) {
      refs.current[index - 1]?.focus();
      return;
    }
  };

  return { ref, changeFocus };
}
