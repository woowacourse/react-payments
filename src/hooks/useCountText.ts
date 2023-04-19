import { useState } from "react";

export function useCountText() {
  const [count, setCount] = useState<number>(0);

  function handleChange(text: string) {
    setCount(count + 1);
  }

  return { count, handleChange };
}
