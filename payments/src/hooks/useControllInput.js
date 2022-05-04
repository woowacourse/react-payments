import { useRef } from 'react';

const useControllInput = () => {
  const itemRef = useRef([]);

  const controllInput = (target) => {
    if (target.value.length >= target.maxLength) {
      autoFocusForward(target);
    }
  };

  const blockCharacter = (target) => {
    target.value = target.value.replace(/[^\d]/g, '').replace('.', '');
  };

  const limitExceptUpperCase = (target) => {
    target.value = target.value
      .replace(/[^A-Za-z\s]*/g, '')
      .replace('.', '')
      .toUpperCase();
  };

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
    controllInput,
    autoFocusForward,
    autoFocusBackward,
    blockCharacter,
    limitExceptUpperCase,
  };
};
export default useControllInput;
