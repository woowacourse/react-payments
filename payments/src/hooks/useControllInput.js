import { useRef } from "react";

const useControllInput = ({ maxLength }) => {
  const itemRef = useRef([]);

  const controllInput = (target) => {
    if (target.value.length >= maxLength) {
      autoFocusForward(target);
    }
  };

  const blockCharacter = (value) => {
    return value.replace(/[^\d]/g, "").replace(".", "");
  };

  const limitInputLength = (value) => {
    return value.substring(0, maxLength);
  };

  const limitExceptUpperCase = (value) => {
    return value.replace(/[^A-Z\s]*/g, "").replace(".", "");
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
    blockCharacter,
    limitExceptUpperCase,
    limitInputLength,
  };
};
export default useControllInput;
