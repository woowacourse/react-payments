import { useState } from "react";

export function useCountText() {
  const [count, setCount] = useState<number>(0);

  function countText(e: React.ChangeEvent<HTMLInputElement>) {
    setCount(e.target.value.length);
  }

  return { count, countText };
}
