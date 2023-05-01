import { useEffect, useState } from "react";
import type { RefObject } from "react";

const useInputCursorPosition = (ref: RefObject<HTMLInputElement>) => {
  const [cursor, setCursor] = useState<number | null>(null);

  useEffect(() => {
    if (ref.current) ref.current.setSelectionRange(cursor, cursor);
  }, [cursor, ref]);

  return setCursor;
};

export { useInputCursorPosition };
