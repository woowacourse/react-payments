import { useState } from "react";

export function useCountText() {
  const [count, setCount] = useState<number>(0);

  function countText(text: string) {
    setCount(text.length);
  }

  return { count, countText };
}
