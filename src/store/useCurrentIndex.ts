import { useState } from 'react';

const useCurrentIndex = (...props: boolean[]) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  if (props[currentIndex]) setCurrentIndex((prop) => prop + 1);

  return currentIndex;
};

export default useCurrentIndex;
