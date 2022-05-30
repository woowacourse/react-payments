import { useCallback, useState } from 'react';

const useHover = (initialState: boolean) => {
  const [isHover, setIsHover] = useState(initialState);

  const handleMouseEnter = useCallback(() => setIsHover(true), []);
  const handleMouseLeave = useCallback(() => setIsHover(false), []);

  return { isHover, handleMouseEnter, handleMouseLeave };
};

export default useHover;
