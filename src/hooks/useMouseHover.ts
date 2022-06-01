import { useState } from 'react';

export const useMouseHover = () => {
  const [isMouseOver, setIsMouseOver] = useState(false);

  const onMouseOver = () => {
    setIsMouseOver(true);
  };

  const onMouseLeave = () => {
    setIsMouseOver(false);
  };

  return [isMouseOver, onMouseOver, onMouseLeave];
};
