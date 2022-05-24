import { useRef } from "react";

const useControlInput = ({ maxLength }) => {
  const itemRef = useRef([]);

  const controlInput = (target) => {
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
    controlInput,
    autoFocusBackward,
  };
};
export default useControlInput;
