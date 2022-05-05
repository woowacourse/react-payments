import { useRef } from 'react';

const useControllInput = () => {
  const itemRef = useRef([]);

  const autoFocusForward = (target) => {
    if (target.value.length >= target.maxLength) {
      const currentIndex = itemRef.current.indexOf(target);
      itemRef.current[Math.min(currentIndex + 1, itemRef.current.length - 1)].focus();
    }
  };

  const autoFocusBackward = (target) => {
    const currentIndex = itemRef.current.indexOf(target);
    itemRef.current[Math.max(currentIndex - 1, 0)].focus();
  };

  return {
    itemRef,
    autoFocusForward,
    autoFocusBackward,
  };
};
export default useControllInput;
