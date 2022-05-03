import { useRef } from "react";

const useControllInput = ({ maxLength }) => {
  const itemRef = useRef([]);

  const controllInput = (target) => {
    if (target.value.length >= maxLength) {
      autoFocusForward(target);
    }
  };

  const autoFocusForward = (target) => {
    const currentIndex = itemRef.current.indexOf(target);
    itemRef.current[
      Math.min(currentIndex + 1, itemRef.current.length - 1)
    ].focus();
  };

  const autoFocusBackward = (target) => {
    const currentIndex = itemRef.current.indexOf(target);
    itemRef.current[Math.max(currentIndex - 1, 0)].focus();
  };

  return {
    itemRef,
    controllInput,
    autoFocusBackward,
  };
};
export default useControllInput;
