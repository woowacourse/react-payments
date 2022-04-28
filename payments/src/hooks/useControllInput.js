import { useCallback, useRef } from "react";

const useControllInput = ({ maxLength, isNumber }) => {
  const itemRef = useRef([]);

  const controllInput = useCallback((target) => {
    const limitInputLength = (target) => {
      target.value = target.value.substring(0, maxLength);
    };

    const autoFocus = (target) => {
      const currentIndex = itemRef.current.indexOf(target);
      itemRef.current[
        Math.min(currentIndex + 1, itemRef.current.length - 1)
      ].focus();
    };
    if (isNumber) {
      target.value = target.value.replace(/[^\d]/g, "").replace(".", "");
    }
    if (target.value.length >= maxLength) {
      limitInputLength(target);
      autoFocus(target);
    }
  }, []);

  return { itemRef, controllInput };
};
export default useControllInput;
