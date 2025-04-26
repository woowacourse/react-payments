import { isNumericNaN } from "@/utils/isNumericNaN";
import { useRef, RefObject } from "react";

type InputRefs<T extends string> = Record<
  T,
  RefObject<HTMLInputElement | null>
>;

interface UseAutoFocusReturn<T extends string> {
  inputRefs: InputRefs<T>;
  handleAutoFocus: (
    currentKey: T,
    value: string,
    keys: T[],
    maxLength: number
  ) => void;
}

export function useAutoFocus<T extends string>(
  keys: T[]
): UseAutoFocusReturn<T> {
  const inputRefs = keys.reduce((acc, key) => {
    acc[key] = useRef<HTMLInputElement | null>(null);
    return acc;
  }, {} as InputRefs<T>);

  const handleAutoFocus = (
    currentKey: T,
    value: string,
    keys: T[],
    maxLength: number
  ) => {
    if (value.length !== maxLength) return;

    const numeric = Number(value);
    if (isNumericNaN(numeric)) return;

    const idx = keys.indexOf(currentKey);
    const nextKey = keys[idx + 1];
    if (nextKey && inputRefs[nextKey]?.current) {
      inputRefs[nextKey].current.focus();
    }
  };

  return { inputRefs, handleAutoFocus };
}
