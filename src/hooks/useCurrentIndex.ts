import { useState } from "react";

const useCurrentIndex = (...args: boolean[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (args[currentIndex]) setCurrentIndex((prevStat) => prevStat + 1);

  return currentIndex;
};

export default useCurrentIndex;
