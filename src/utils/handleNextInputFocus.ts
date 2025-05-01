import { ObjectKey } from "@/types";

interface HandleNextInputFocusParams<T extends ObjectKey> {
  key: T;
  keys: T[];
  refs: Record<T, { current: HTMLElement | null }>;
}

export const handleNextInputFocus = <T extends ObjectKey>({
  key,
  keys,
  refs,
}: HandleNextInputFocusParams<T>) => {
  const index = keys.indexOf(key);
  const nextKey = keys[index + 1] as T;
  const nextInputRef = refs[nextKey];
  nextInputRef.current?.focus();
};
