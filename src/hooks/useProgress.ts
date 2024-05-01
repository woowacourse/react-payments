import { useState } from "react";

export default function useProgress(progress: boolean[]) {
  const [curProgress, setCurProgress] = useState(0);

  if (progress[curProgress]) {
    setCurProgress((curProgress) => curProgress + 1);
  }

  return curProgress;
}
